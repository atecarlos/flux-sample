import dispatcher from '../dispatcher/dispatcher';
import { EventEmitter } from 'events';
import actionTypes from '../constants/action-types';
import immutable from 'immutable';

const CHANGE_EVENT = 'change';

var initiatives = immutable.List();

class InitiativesStore extends EventEmitter {
	constructor(){
		super();

		this.dispatchToken = dispatcher.register((action) => {
			if(action.type === actionTypes.GET_INITIATIVES){
				initiatives = immutable.fromJS(action.initiatives);
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

	getInitiatives(){
		return initiatives;
	}
}

export default new InitiativesStore();