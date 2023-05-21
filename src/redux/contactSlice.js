import { createSlice } from '@reduxjs/toolkit';
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

// const handlePending = state => {
//   state.contacts.isLoading = true;
// };

// const handleRejected = (state, action) => {
//   state.contacts.isLoading = false;
//   state.contacts.error = action.payload;
// };

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    filters: '',
  },
  reducers: {
    filterContacts(state, action) {
      state.filters = action.payload;
    },
  },
});

export const { filterContacts } = filterSlice.actions;

export default filterSlice.reducer;
//   extraReducers: builder => {
//     builder
//       .addCase(fetchContacts.pending, handlePending)
//       .addCase(fetchContacts.fulfilled, (state, action) => {
//         state.contacts.isLoading = false;
//         state.contacts.error = null;
//         state.contacts.items = action.payload;
//       })
//       .addCase(fetchContacts.rejected, handleRejected)

//       .addCase(addContact.pending, handlePending)
//       .addCase(addContact.fulfilled, (state, action) => {
//         state.contacts.isLoading = false;
//         state.contacts.error = null;
//         state.contacts.items.push(action.payload);
//       })
//       .addCase(addContact.rejected, handleRejected)

//       .addCase(deleteContact.pending, handlePending)
//       .addCase(deleteContact.fulfilled, (state, action) => {
//         state.contacts.isLoading = false;
//         state.contacts.error = null;
//         state.contacts.items = state.contacts.items.filter(contact => {
//           return contact.id !== action.payload.id;
//         });
//       })
//       .addCase(deleteContact.rejected, handleRejected);
//   },
// });

// export const contactsReducers = contactSlice.reducer;
// export const { filterContacts } = contactSlice.actions;
