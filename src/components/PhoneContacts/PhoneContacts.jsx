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
// import { Loader } from 'components/Loader/Loader';
import { Notification } from 'components/Notification/Notification';
// import { LoaderContainer } from 'components/Loader/Loader.styled';
// import { MutatingDots } from 'react-loader-spinner';

const PhoneContacts = () => {
  const [deleteContact] = useDeleteContactsMutation();
  const { data: fetchContacts } = useFetchContactsQuery();
  const filter = useSelector(selectFilters);

  const NewFilteredContactsList = fetchContacts?.filter(contact =>
    contact.name.toLowerCase().includes(filter?.toLowerCase())
  );

  // const NewFilteredContactsList = () => {
  //   return contacts?.filter(contact =>
  //     contact.name.toLowerCase().includes(filter?.toLowerCase())
  //   );
  // };

  // if (isLoading)
  //   return (
  //     <LoaderContainer>
  //       <MutatingDots
  //         height="100"
  //         width="100"
  //         color="#8d9495"
  //         secondaryColor="#8d9495"
  //         radius="12.5"
  //         ariaLabel="mutating-dots-loading"
  //         wrapperStyle={{}}
  //         wrapperClass=""
  //         visible={true}
  //       />
  //     </LoaderContainer>
  //   );

  return (
    <>
      {fetchContacts?.length === 0 && <Notification />}
      <List>
        {/* {isLoading && !isError && <Loader />} */}
        {NewFilteredContactsList?.map(({ id, name, phone }) => (
          <Contact key={id}>
            <ContactItem>
              {name}: {phone}
            </ContactItem>
            <DeleteButton onClick={() => deleteContact(id)}>
              Delete
            </DeleteButton>
          </Contact>
        ))}
      </List>
    </>
  );
};
export default PhoneContacts;
