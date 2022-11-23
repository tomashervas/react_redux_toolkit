// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  keepUnusedDataFor: 10,
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => `posts`,
    }),
    getPostsById: builder.query({
        query: (postId) => `posts/${postId}`,
      }),
  }),
})

export const { useGetPostsQuery, useGetPostsByIdQuery } = postsApi