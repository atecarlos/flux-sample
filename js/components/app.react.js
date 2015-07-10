import React from 'react/addons';
import messageStore from '../stores/message-store';
import initiativeStore from '../stores/initiatives-store';
import Message from './message.react';
import InitiativeList from './initiative-list.react';

import 'bootstrap.scss';
import 'styles.scss';

function getState(){
	return {
		message: messageStore.getState(),
		initiatives: initiativeStore.getInitiatives()
	};
}

var App = React.createClass({
	displayName: 'App',

	mixins: [React.addons.PureRenderMixin],

	getInitialState: function(){
		return getState();
	},

	componentDidMount: function(){
		messageStore.addChangeListener(this.onChange);
		initiativeStore.addChangeListener(this.onChange);
	},

	componentWillUnmount: function(){
		messageStore.removeChangeListener(this.onChange);
		initiativeStore.removeChangeListener(this.onChange);
	},

	onChange: function(){
		this.setState(getState());
	},

	render: function(){
		return (
			<div>
				<Message message={this.state.message} />
				<InitiativeList initiatives={this.state.initiatives} />
			</div>
		);
	}
});

export default App;