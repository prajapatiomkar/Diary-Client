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
export const auth = createApi({
  reducerPath: "auth",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000",
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
  }),
});

export const { useRegisterMutation } = auth;
