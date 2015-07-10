import React from 'react/addons';
import TextBox from './text-box.react';
import { Map } from 'immutable';
import { Button } from 'react-bootstrap';
import Popup from './popup.react';

var Message = React.createClass({
	displayName: 'Message',

	propTypes: {
		message: React.PropTypes.instanceOf(Map).isRequired
	},

	mixins: [React.addons.PureRenderMixin],

	getInitialState: function(){
		return { showModal: false };
	},

	closeModal: function(){
		this.setState({ showModal: false });
	},

	showMessage: function(){
		this.setState({ showModal: true });
	},

	render: function(){
		var text = this.props.message.get('text');

		return (
			<div>
				<div>
					<span>Message goes here:</span>
					<span className="message">{text}</span>
				</div>
				<TextBox />
				<Button onClick={this.showMessage}>Show me</Button>
				<Popup
						body={text}
						footer="You just typed this message"
						header="My Message"
						onClose={this.closeModal}
						show={this.state.showModal} />
			</div>
		);
	}
});

export default Message;