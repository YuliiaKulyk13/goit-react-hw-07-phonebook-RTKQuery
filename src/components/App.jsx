import React from 'react';
// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchContacts } from 'redux/operations';
import PhoneContacts from './PhoneContacts/PhoneContacts';
import Filter from './Filter/Filter';
import { Title } from './Title/Title';
import { ContactForm } from './ContactsForm/ContactsForm';
import { Layout } from './Layout/Layout.styled';
// import { selectContacts, selectError, selectIsLoading } from 'redux/selectors';
import { Notification } from './Notification/Notification';
import { Loader } from './Loader/Loader';
import { useFetchContactsQuery } from 'redux/contactSlice';

export function App() {
  const { data, error, isLoading } = useFetchContactsQuery();
  console.log(data);
  console.log(error);
  console.log(isLoading);
  // const dispatch = useDispatch();
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);
  // const contactList = useSelector(selectContacts);

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  return (
    <Layout>
      <Title title={'Phonebook'} />
      <ContactForm />
      <Title title={'Contacts'} />
      {data.length > 0 && <Filter />}
      {data.length === 0 ? (
        <Notification notification={'There are no contacts.'} />
      ) : (
        <PhoneContacts />
      )}
      {isLoading && !error && <Loader />}
    </Layout>
  );
}
