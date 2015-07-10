import React from 'react/addons';
import Initiative from './initiative.react';
import actionCreator from '../actions/action-creator';
import { List } from 'immutable';
import { Button } from 'react-bootstrap';

var InitiativesList = React.createClass({
	displayName: 'InitiativesList',

	propTypes: {
		initiatives: React.PropTypes.instanceOf(List).isRequired
	},

	mixins: [React.addons.PureRenderMixin],

	componentDidMount: function(){
		actionCreator.getInitiatives();
	},

	refresh: function(){
		actionCreator.getInitiatives();
	},

	render: function(){
		var initiatives = this.props.initiatives.map(function(initiative){
			return (
				<li key={initiative.get('id')} >
					<Initiative initiative={initiative} />
				</li>
			);
		});

		return (
			<div>
				<ul>
					{initiatives}
				</ul>
				<Button bsSize='large'
						bsStyle='primary'
						onClick={this.refresh}>Refresh</Button>
			</div>
		);
	}
});

export default InitiativesList;