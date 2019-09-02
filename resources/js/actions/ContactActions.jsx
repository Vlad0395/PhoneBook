import { constants } from '../constants/index'
import axios from 'axios'

export const getContacts = () => {
    return dispatch => {
        axios.get('api/contacts')
            .then(response => {
                dispatch({
                    type: constants.GET_CONTACTS_SUCCESS,
                    data: response.data,
                })

            })
            .catch(erorr => {
                dispatch({
                    type: constants.GET_CONTACTS_ERROR,
                    error: error,
                    data: response.data
                })
            })
    }
}

export const AddContact = (data) => {
    return dispatch => {
        axios.post('api/contacts', data)
            .then(response => {
                console.log('check')
            })
            .catch(error => {
                console.log('error')
            })
    }
}
export const UpdateContact = (data) => {
    return dispatch => {
        axios.post('api/constants', data)
            .then(response => {
                console.log('check')
            })
            .catch(error => {
                console.log('error')
            })
    }
}