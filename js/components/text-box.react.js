import React from 'react/addons';
import actionCreator from '../actions/action-creator';

import 'text-box.scss';

var TextBox = React.createClass({
	displayName: 'TextBox',

	getInitialState: function() {
		return { text: '' };
	},

	onChange: function(event){
		this.setState({ text: event.target.value });
	},

	onKeyDown: function(event){
		if(event.keyCode === 13){
			event.preventDefault();
			actionCreator.updateMessage(this.state.text.trim());
			this.setState({ text: '' });
		}
	},

	render: function(){
		return (
			<input
				className="text-box"
				onChange={this.onChange}
				onKeyDown={this.onKeyDown}
				value={this.state.text} />
		);
	}
});

export default TextBox;