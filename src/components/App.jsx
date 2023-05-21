import React from 'react';

import PhoneContacts from './PhoneContacts/PhoneContacts';

import { Title } from './Title/Title';
import { ContactForm } from './ContactsForm/ContactsForm';
import { Layout } from './Layout/Layout.styled';

import { Loader } from './Loader/Loader';
// import { useFetchContactsQuery } from 'redux/contactSlice';

export function App() {
  // const { data, error, isLoading } = useFetchContactsQuery();
  // console.log(data);
  // console.log(error);
  // console.log(isLoading);

  return (
    <Layout>
      <Title title={'Phonebook'} />
      <ContactForm />
      <Title title={'Contacts'} />
      <PhoneContacts />
      <Loader />
    </Layout>
  );
}
