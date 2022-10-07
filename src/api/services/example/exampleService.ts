import { API_SERVICE_METHOD } from '../../../common/constants/apiServiceMethods';
import { ENDPOINTS } from '../../endpoints';
import { baseApi } from '../apiService';
import { ExampleModel } from './exampleInterface';

export const exampleApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query<ExampleModel[], void>({
      query: () => ({ url: ENDPOINTS.POSTS, method: API_SERVICE_METHOD.GET })
    })
  })
});

export const { useGetPostsQuery } = exampleApi;
