import { constants } from '../constants/index'
import axios from 'axios'

export const getContacts = () => {
    return dispatch => {
        axios.get('api/contacts')
        .then(response=>{
            console.log(response);
            dispatch({
                type: constants.GET_CONTACTS_SUCCESS,
                data: response.data,
            })
            
        })
        .catch(erorr=>{
            dispatch({
                type: constants.GET_CONTACTS_ERROR,
                error: error,
                data: response.data
            })
        })
    }
}