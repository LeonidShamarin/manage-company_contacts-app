const initialState = {
    contacts: [],
    contact: {},
  };
  
  export default function contactsReducer(state = initialState, action) {
    switch (action.type) {
      case 'FETCH_CONTACTS_SUCCESS':
        return { ...state, contacts: action.contacts };
      case 'FETCH_CONTACT_SUCCESS':
        return { ...state, contact: action.contact };
      case 'CREATE_CONTACT_SUCCESS':
        return { ...state, contacts: [...state.contacts, action.contact] };
      case 'DELETE_CONTACT_SUCCESS':
        return { ...state, contacts: state.contacts.filter((contact) => contact.id !== action.id) };
      default:
        return state;
    }
  }