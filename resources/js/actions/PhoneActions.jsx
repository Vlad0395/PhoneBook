import axios from 'axios'
import { constants } from '../constants/index'
export const AddNumber = (data) => {
    return dispatch => {
        axios.post('api/phones', data)
            .then(response => {
                console.log('check_create_number')
                return dispatch({
                    type:constants.GET_CONTACT_PHONES_SUCCES,
                    data:response.data,
                })
            })
            .catch(error => {
                console.log('create_number_error')
            })
    }
}