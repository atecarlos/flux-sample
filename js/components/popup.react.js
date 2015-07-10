import React from 'react/addons';
import { Modal } from 'react-bootstrap';

var Popup = React.createClass({
	displayName: 'Popup',

	propTypes: {
		onClose: React.PropTypes.func,
		show: React.PropTypes.bool.isRequired,
		header: React.PropTypes.string,
		body: React.PropTypes.string,
		footer: React.PropTypes.string
	},

	close: function(){
		this.props.onClose();
	},

	render: function(){
		return (
			<Modal onHide={this.close} show={this.props.show} >
				<Modal.Header closeButton>
					<Modal.Title>{this.props.header}</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<p>{this.props.body}</p>
				</Modal.Body>
				<Modal.Footer>
					<p>{this.props.footer}</p>
				</Modal.Footer>
			</Modal>
		);
	}
});

export default Popup;