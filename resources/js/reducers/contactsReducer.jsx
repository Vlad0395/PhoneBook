import { constants } from '../constants/index';

const initialState = {
	contact: null,
	contacts: null,
	error: false,
	phone: null,
	phones: null,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case constants.GET_CONTACTS_SUCCESS:
			return {
				...state,
				contacts: action.data,
			};
		case constants.DELETE_CONTACT_SUCCESS:
			let contacts = state.contacts.filter(contact => contact.id !== Number(action.data));
			return {
				...state,
				contacts: contacts,
			};
		case constants.UPDATE_CONTACT_SUCCESS:
			let editContact = state.contacts.map(cont => (cont.id === action.data.id ? action.data : cont));
			return {
				...state,
				contacts: editContact,
			};
		case constants.GET_CONTACT_SUCCESS:
			return {
				...state,
				contact: action.data,
			};
		case constants.GET_CONTACT_PHONES_SUCCES:
			return {
				...state,
				phone: action.data,
			};
		case constants.GET_PHONES_SUCCESS:
			return {
				...state,
				phones: action.data,
			};
		default:
			return state;
	}
};
