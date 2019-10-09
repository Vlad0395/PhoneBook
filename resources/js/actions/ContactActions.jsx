import { constants } from '../constants/index';
import axios from 'axios';
import { AddNumber } from '../actions/PhoneActions';

export const getContacts = () => {
	return dispatch => {
		axios
			.get('api/contacts')
			.then(response => {
				dispatch({
					type: constants.GET_CONTACTS_SUCCESS,
					data: response.data,
				});
			})
			.catch(error => {
				dispatch({
					type: constants.GET_CONTACTS_ERROR,
					data: error,
				});
			});
	};
};

export const AddContact = data => {
	return dispatch => {
		axios
			.post('api/contacts', data)
			.then(response => {
				dispatch(
					AddNumber({
						contact_id: response.data.id,
						mobile: data.mobile,
					})
				);
			})
			.catch(error => {
				console.log('create_error', error);
			});
	};
};
export const getContact = id => {
	return dispatch => {
		axios
			.get('api/contacts/' + id)
			.then(response => {
				return dispatch({
					type: constants.GET_CONTACT_SUCCESS,
					data: response.data,
				});
			})
			.catch(error => {
				console.log('check_getContact_error', error);
			});
	};
};
export const UpdateContact = (data, id) => {
	return dispatch => {
		axios
			.patch('api/contacts/' + id, data)
			.then(response => {
				return dispatch({
					type: constants.UPDATE_CONTACT_SUCCESS,
					data: response.data,
				});
			})
			.catch(error => {
				console.log('update_error', error.data);
			});
	};
};
export const DeleteContact = id => {
	return dispatch => {
		axios
			.delete('api/contacts/' + id)
			.then(response => {
				return dispatch({
					type: constants.DELETE_CONTACT_SUCCESS,
					data: response.data,
				});
			})
			.catch(error => {
				console.log('delete_error', error);
			});
	};
};
