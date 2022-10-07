export enum NETWORK_DEFAULTS {
  INVALID_URL = 'Invalid Url',
  NETWORK_ERROR = 'NETWORK_ERROR',
  NO_CALLBACK = 'No Callback Provided',
  NULL_CREDENTIALS = 'Null Credentials',
  SERVER_ERROR = 'Server Error',
  TOKEN_ABSENT = 'Token Absent',
  TOKEN_INVALID = 'token_invalid',
  TOKEN_EXPIRED = 'token_expired',
  TOKEN_NOT_PROVIDED = 'token_not_provided',
  UNKNOWN_ERROR = 'Unknown Error!',
  AUTH_INVALID_CREDENTIALS = 'AUTH.INVALID_CREDENTIALS',
  AUTH_INVALID_REFRESH_TOKEN = 'AUTH.INVALID_REFRESH_TOKEN',
  AUTH_UNAUTHENTICATED = 'AUTH.UNAUTHENTICATED',
  AUTH_USER_NOT_FOUND = 'AUTH.USER_NOT_FOUND',
  AUTH_SSO_TOKEN_TIMEOUT = 'AUTH.SSO_TOKEN_TIMEOUT'
}

export const HTTP_STATUS = {
  '400': {
    code: 400,
    errors: []
  },
  '401': {
    code: 401,
    errors: [
      NETWORK_DEFAULTS.AUTH_USER_NOT_FOUND,
      NETWORK_DEFAULTS.AUTH_INVALID_CREDENTIALS,
      NETWORK_DEFAULTS.AUTH_SSO_TOKEN_TIMEOUT
    ]
  },
  '402': { code: 402, errors: [] },
  '403': { code: 403, errors: [] },
  '404': { code: 404, errors: [] },
  '405': { code: 405, errors: [] },
  '408': { code: 408, errors: [] },
  '418': {
    code: 418,
    errors: [NETWORK_DEFAULTS.TOKEN_NOT_PROVIDED, NETWORK_DEFAULTS.TOKEN_INVALID]
  },
  '420': { code: 420, errors: [] },
  '429': { code: 429, errors: [] },
  '500': { code: 500, errors: [] },
  '503': { code: 503, errors: [] }
};
