import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import { addContact, deleteContact, fetchContacts } from './operations';

const API_ENDPOINT = '/contacts';
const BASE_URL = 'https://644f91eab61a9f0c4d25c138.mockapi.io';

export const contactsApi = createApi({
  reducerPath: 'contacts',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagTypes: ['Contacts'],
  endpoints: builder => ({
    fetchContacts: builder.query({
      query: () => API_ENDPOINT,
      providesTags: ['Contacts'],
    }),
    addContacts: builder.mutation({
      query: contact => ({
        url: API_ENDPOINT,
        method: 'POST',
        body: contact,
      }),
      invalidatesTags: ['Contacts'],
    }),
    deleteContacts: builder.mutation({
      query: id => ({
        url: `${API_ENDPOINT}/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contacts'],
    }),
  }),
});

export const {
  useFetchContactsQuery,
  useAddContactsMutation,
  useDeleteContactsMutation,
} = contactsApi;
