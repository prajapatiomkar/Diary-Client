import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface RegisterRequest {
  email: string;
  password: string;
  username: string;
}

interface RegisterResponse {
  message: string;
  user: {
    id: string;
    email: string;
    username: string;
  };
  token: string;
}

interface LoginRequest {
  email: string;
  password: string;
}

interface LoginResponse {
  message: string;
}

export const auth = createApi({
  reducerPath: "auth",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000",
    credentials: "include",
  }),
  endpoints: (builder) => ({
    register: builder.mutation<RegisterResponse, RegisterRequest>({
      query: (credentials) => ({
        url: "/auth/register",
        method: "POST",
        body: credentials,
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
    login: builder.mutation<LoginResponse, LoginRequest>({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        credentials: "include",
        body: credentials,
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation } = auth;
