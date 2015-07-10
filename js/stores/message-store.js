import dispatcher from '../dispatcher/dispatcher';
import { EventEmitter } from 'events';
import actionTypes from '../constants/action-types';
import { Map } from 'immutable';

const CHANGE_EVENT = 'change';

var state = Map({ text: 'initial value' });

class MessageStore extends EventEmitter{
	constructor(){
		super();

		this.dispatchToken = dispatcher.register((action) => {
			if(action.type === actionTypes.RECEIVE_NEW_MESSAGE){
				state = state.set('text', action.message);
				this.emitChange();
			}
		});
	}

	emitChange() {
		this.emit(CHANGE_EVENT);
	}

	addChangeListener(callback){
		this.on(CHANGE_EVENT, callback);
	}

	removeChangeListener(callback){
		this.removeListener(CHANGE_EVENT, callback);
	}

	getState(){
		return state;
	}
}

export default new MessageStore();