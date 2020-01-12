import axios from 'axios';
import { constants } from '../constants/index';

export const AddNumber = data => {
	return dispatch => {
		axios
			.post('api/phones', data)
			.then(response => {
				return dispatch({
					type: constants.GET_CONTACT_PHONES_SUCCES,
					data: response.data,
				});
			})
			.catch(error => {
				console.log('create_number_error', error);
			});
	};
};
export const getPhone = id => {
	return dispatch => {
		axios
			.get('api/phones/' + id)
			.then(response => {
				return dispatch({
					type: constants.GET_CONTACT_PHONE_SUCCES,
					data: response.data,
				});
			})
			.catch(error => {
				console.log('show_number_error', error);
			});
	};
};
export const getPhones = () => {
	return dispatch => {
		axios
			.get('api/phones')
			.then(response => {
				dispatch({
					type: constants.GET_PHONES_SUCCESS,
					data: response.data,
				});
			})
			.catch(error => {
				dispatch({
					type: constants.GET_PHONES_ERROR,
					data: error,
				});
			});
	};
};
