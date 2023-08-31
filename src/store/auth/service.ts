import {IUserApiResponse} from 'store/types';
import api from '../api';

export const auth = api.injectEndpoints({
  endpoints: builder => ({
    signIn: builder.mutation<IUserApiResponse, {email: string; password: string}>({
      query: () => ({
        url: '/users/1',
        method: 'GET',
      }),
    }),
    signUp: builder.mutation<IUserApiResponse, {email: string; password: string}>({
      query: body => ({
        url: '/signUp/viaEmail',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const {useSignInMutation, useSignUpMutation} = auth;
