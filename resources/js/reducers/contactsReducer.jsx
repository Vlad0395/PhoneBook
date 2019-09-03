import { constants } from "../constants/index";

const initialState = {
    contacts: null,
    error: false,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case constants.GET_CONTACTS_SUCCESS:
            return {
                ...state,
                contacts: action.data,
            }
        case constants.DELETE_CONTACT_SUCCESS:
            let contacts = state.contacts.filter(contact => contact.id != action.data);
            return {
                ...state,
                contacts: contacts
            }
        default:
            return state
    }
}