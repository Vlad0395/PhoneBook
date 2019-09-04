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
                console.log('create_error')
            })
    }
}
export const UpdateContact = (data, id) => {
    return dispatch => {
        axios.patch('api/contacts/' + id, data)
            .then(response => {
                console.log('check')
            })
            .catch(error => {
                console.log('update_error', error)
            })
    }
}
export const DeleteContact = (id) => {
    return dispatch => {
        axios.delete('api/contacts/' + id)
            .then(response => {
                return dispatch({
                    type: constants.DELETE_CONTACT_SUCCESS,
                    data: response.data,
                })
            })
            .catch(error => {
                console.log('delete_error', error)
            })
    }
}