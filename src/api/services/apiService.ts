import { BaseQueryFn, createApi } from '@reduxjs/toolkit/query/react';
import { Method } from 'axios';
import { API_SERVICE_METHOD } from '../../common/constants/apiServiceMethods';
import { ApiErrorUseCase } from '../../common/constants/errors';
import { decrease, increase } from '../../redux/slices/loadingSlice';
import { BaseAxios } from '../api';
import { silentServices } from './silentServices';

const Api = new BaseAxios({});

export interface ApiError {
  id?: string;
  errorLabel: string;
  errorTitle?: string;
  useCase: ApiErrorUseCase;
  statusCode: number;
}

const apiErrorHandler = (error: ApiError) => {
  const logout = () => alert('logout'); // dispatch(authApi.endpoints.logout.initiate());
  const pushError = () => alert(`${error.errorTitle} ${error.errorLabel}`);

  if (error) {
    switch (error.useCase) {
      case ApiErrorUseCase.LOGOUT:
        logout();
        pushError();
        break;
      case ApiErrorUseCase.SHOW_MESSAGE:
        pushError();
        break;
      default:
        break;
    }
  }
};

interface RequestData {
  body?: Record<string, unknown>;
  params?: Record<string, unknown>;
}

export const apiBaseQuery =
  (): BaseQueryFn<
    {
      url: string;
      method: API_SERVICE_METHOD;
      data?: RequestData;
    },
    unknown,
    unknown
  > =>
  async ({ url, method, data = {} }, { dispatch, endpoint }) => {
    const isSilentService = silentServices.includes(endpoint);

    try {
      !isSilentService && dispatch(increase());

      const result = await Api.start({ method: method as Method, url, body: data?.body, params: data?.params });

      return { data: result?.data || result };
    } catch (error) {
      const apiError = error as ApiError;

      apiErrorHandler(apiError);

      return {
        error: apiError
      };
    } finally {
      !isSilentService && dispatch(decrease());
    }
  };

export const resetApiState = (dispatch: (arg0: { payload: undefined; type: string }) => never) =>
  dispatch(baseApi.util.resetApiState());

export enum Tags {}

export const baseApi = createApi({
  baseQuery: apiBaseQuery(),
  endpoints: () => ({}),
  tagTypes: Object.keys(Tags)
});
