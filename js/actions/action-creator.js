import dispatcher from '../dispatcher/dispatcher';
import actionTypes from '../constants/action-types';
import api from '../services/api';

export default {
	updateMessage: function(text){
		dispatcher.dispatch({
			type: actionTypes.RECEIVE_NEW_MESSAGE,
			message: text
		});
	},
	getInitiatives: function(){
		api.getInitiatives().then(function(initiatives){
			dispatcher.dispatch({
				type: actionTypes.GET_INITIATIVES,
				initiatives: initiatives
			});
		});
	}
};