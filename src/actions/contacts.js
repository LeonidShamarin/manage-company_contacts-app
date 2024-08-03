import { getContacts, getContact, createContact, deleteContact } from './api';

export const fetchContacts = () => {
  return async (dispatch) => {
    const contacts = await getContacts();
    dispatch({ type: 'FETCH_CONTACTS_SUCCESS', contacts });
  };
};

export const fetchContact = (id) => {
  return async (dispatch) => {
    const contact = await getContact(id);
    dispatch({ type: 'FETCH_CONTACT_SUCCESS', contact });
  };
};

export const createNewContact = (data) => {
  return async (dispatch) => {
    const contact = await createContact(data);
    dispatch({ type: 'CREATE_CONTACT_SUCCESS', contact });
  };
};

export const deleteExistingContact = (id) => {
  return async (dispatch) => {
    await deleteContact(id);
    dispatch({ type: 'DELETE_CONTACT_SUCCESS', id });
  };
};