import {BaseQueryApi, createApi, FetchArgs, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import config from '../constants/config';

const baseQuery = fetchBaseQuery({
  baseUrl: config.API_BASE_URL,
  prepareHeaders: (headers, {getState}) => {
    // create header with token here :
    //
    // const token: string = getState()?.auth?.accessToken;
    // if (token) {
    //   headers.set('Authorization', `Bearer ${token}`);
    // }

    return headers;
  },
});

const api = createApi({
  reducerPath: 'api',
  baseQuery: async (args: string | FetchArgs, api: BaseQueryApi, extraOptions: object) => {
    const result = await baseQuery(args, api, extraOptions);

    if (result.error?.status === 401) {
      // logout
    }
    return result;
  },
  tagTypes: [],
  endpoints: () => ({}),
});

export default api;
