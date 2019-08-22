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
        default:
            return state
    }
}