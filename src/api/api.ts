import axios, { Method } from 'axios';
import { ApiErrorUseCase } from '../common/constants/errors';
import { ACCESS_TOKEN } from '../common/constants/localStorageConstants';
import { HTTP_STATUS, NETWORK_DEFAULTS } from '../common/constants/networkConstants';
import { getHttpCodeErrorLabel, getHttpCodeErrorTitle } from '../utils/errorUtils';

export interface ApiError {
  id?: string;
  errorLabel: string;
  errorTitle?: string;
  useCase: ApiErrorUseCase;
  statusCode: number;
}

export class BaseAxios {
  // Variables
  baseURL: string | undefined = '';
  headers: Record<string, string | number | boolean> = {};
  additionalSuffixParams: Record<string, unknown> | undefined | null = undefined;

  constructor({
    baseURL,
    headers,
    storageAuthKey,
    additionalSuffixParams
  }: {
    baseURL?: string;
    headers?: Record<string, string | number | boolean>;
    storageAuthKey?: string;
    additionalSuffixParams?: Record<string, unknown>;
  }) {
    this.setBaseUrl(baseURL);
    this.setHeaders(headers);
    this.setAccessToken(storageAuthKey);
    this.additionalSuffixParams = additionalSuffixParams;
    this.setResponseInterceptors();
  }

  private setBaseUrl(_baseURL?: string) {
    this.baseURL = _baseURL || process.env.APP_URL;
  }

  private setHeaders(_headers?: Record<string, string | number | boolean>) {
    this.headers = _headers || {
      Accept: 'application/json',
      Enctype: 'multipart/form-data'
    };
  }

  public async setAccessToken(storageAuthKey?: string) {
    //TODO: You have to change for your response data
    const raw = await localStorage.getItem(storageAuthKey || ACCESS_TOKEN);

    const auth = (raw?.length && JSON.parse(raw)) || null;

    auth && (axios.defaults.headers.common.Authorization = `Bearer ${auth.access_token}`);
  }

  private setResponseInterceptors() {
    axios.interceptors.response.use(
      (response) => response?.data,
      async (error) => {
        const errorResponse = error?.response;
        //const _originalRequest = error?.config; //If you want to original request
        const errorStatusCode = errorResponse?.status;
        const errorMessage = errorResponse?.data?.message;

        const apiError: ApiError = {
          errorLabel: errorMessage,
          useCase: ApiErrorUseCase.SHOW_MESSAGE,
          statusCode: errorStatusCode
        };

        if (errorStatusCode && Object.keys(HTTP_STATUS)?.includes(errorStatusCode?.toString())) {
          apiError.errorLabel = errorMessage;
          apiError.errorTitle = getHttpCodeErrorTitle(HTTP_STATUS[400].code);
          apiError.useCase = ApiErrorUseCase.SHOW_MESSAGE;
        }

        if (!error || !errorResponse) {
          apiError.errorLabel = getHttpCodeErrorLabel(NETWORK_DEFAULTS.NETWORK_ERROR);
          apiError.errorTitle = getHttpCodeErrorTitle(NETWORK_DEFAULTS.NETWORK_ERROR);
          apiError.useCase = ApiErrorUseCase.SHOW_MESSAGE;
        }

        if (errorStatusCode === HTTP_STATUS[400].code) {
          if (HTTP_STATUS[418].errors.includes(errorMessage)) {
            apiError.errorLabel = getHttpCodeErrorLabel(HTTP_STATUS[418].code);
            apiError.errorTitle = getHttpCodeErrorTitle(HTTP_STATUS[418].code);
            apiError.useCase = ApiErrorUseCase.LOGOUT;
          } else {
            apiError.errorLabel = getHttpCodeErrorLabel(HTTP_STATUS[400].code);
            apiError.errorTitle = getHttpCodeErrorTitle(HTTP_STATUS[400].code);
          }
        }

        if (errorStatusCode === HTTP_STATUS[401].code) {
          //TODO: Your auth logic have to be here
        }

        // If the error is HTTP 402 and has not already been retried
        if (errorStatusCode === HTTP_STATUS[402].code) {
          apiError.errorLabel = getHttpCodeErrorLabel(HTTP_STATUS[402].code);
          apiError.errorTitle = getHttpCodeErrorTitle(HTTP_STATUS[402].code);
        }

        // If the error is HTTP 403 and has not already been retried
        if (errorStatusCode === HTTP_STATUS[403].code) {
          apiError.errorLabel = getHttpCodeErrorLabel(HTTP_STATUS[403].code);
          apiError.errorTitle = getHttpCodeErrorTitle(HTTP_STATUS[403].code);
        }

        // If the error is HTTP 404 and has not already been retried
        if (errorStatusCode === HTTP_STATUS[404].code) {
          //404 Flow
          apiError.errorLabel = errorMessage;
          apiError.errorTitle = getHttpCodeErrorTitle(HTTP_STATUS[404].code);
        }

        // If the error is HTTP 405 and has not already been retried
        if (errorStatusCode === HTTP_STATUS[405].code) {
          apiError.errorLabel = getHttpCodeErrorLabel(HTTP_STATUS[405].code);
          apiError.errorTitle = getHttpCodeErrorTitle(HTTP_STATUS[405].code);
        }

        // If the error is HTTP 408 and has not already been retried
        if (errorStatusCode === HTTP_STATUS[408].code) {
          apiError.errorLabel = getHttpCodeErrorLabel(HTTP_STATUS[408].code);
          apiError.errorTitle = getHttpCodeErrorTitle(HTTP_STATUS[408].code);
        }

        if (errorStatusCode === HTTP_STATUS[418].code) {
          apiError.errorLabel = getHttpCodeErrorLabel(HTTP_STATUS[418].code);
          apiError.errorTitle = getHttpCodeErrorTitle(HTTP_STATUS[418].code);
        }

        if (errorStatusCode === HTTP_STATUS[429].code) {
          apiError.errorLabel = getHttpCodeErrorLabel(HTTP_STATUS[429].code);
          apiError.errorTitle = getHttpCodeErrorTitle(HTTP_STATUS[429].code);
        }

        // If the error is HTTP 500 and has not already been retried
        if (errorStatusCode === HTTP_STATUS[500].code) {
          apiError.errorLabel = getHttpCodeErrorLabel(HTTP_STATUS[500].code);
          apiError.errorTitle = getHttpCodeErrorTitle(HTTP_STATUS[500].code);
        }

        // If the error is HTTP 503 and has not already been retried
        if (errorStatusCode === HTTP_STATUS[503].code) {
          //Page 5xx Flow
          apiError.errorLabel = getHttpCodeErrorLabel(HTTP_STATUS[503].code);
          apiError.errorTitle = getHttpCodeErrorTitle(HTTP_STATUS[503].code);
          apiError.useCase = ApiErrorUseCase.LOGOUT;
        }

        return Promise.reject(apiError);
      }
    );
  }

  public async start({
    method,
    url,
    body,
    params,
    rest
  }: {
    method: Method;
    url: string;
    body?: Record<string, unknown> | string | null;
    params?: Record<string, unknown>;
    rest?: Record<string, unknown>;
  }) {
    await this.setAccessToken();

    const axiosResponse = await axios({
      method,
      url,
      headers: this.headers,
      baseURL: this.baseURL,
      data: body,
      params: { ...params },
      ...rest
    });

    return axiosResponse;
  }
}
