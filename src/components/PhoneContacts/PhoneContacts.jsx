import React from 'react';
import { useSelector } from 'react-redux';
import {
  Contact,
  ContactItem,
  DeleteButton,
  List,
} from './PhoneContacts.styled';
import { selectFilters } from 'redux/selectors';
import {
  useDeleteContactsMutation,
  useFetchContactsQuery,
} from 'redux/contactSlice';
import { Loader } from 'components/Loader/Loader';

const PhoneContacts = () => {
  const [deleteContact] = useDeleteContactsMutation();
  const { data = [], isLoading, isError } = useFetchContactsQuery();
  const filter = useSelector(selectFilters);

  const NewFilteredContactsList = () => {
    return data.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <List>
      {isLoading && !isError && <Loader />}
      {NewFilteredContactsList().map(({ id, name, phone }) => (
        <Contact key={id}>
          <ContactItem>
            {name}: {phone}
          </ContactItem>
          <DeleteButton onClick={() => deleteContact(id)}>Delete</DeleteButton>
        </Contact>
      ))}
    </List>
  );
};
export default PhoneContacts;
