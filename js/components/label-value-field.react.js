import React from 'react/addons';

import 'label-value-field.scss';

var LabelValueField = React.createClass({
	displayName: 'LabelValueField',

	propTypes: {
		name: React.PropTypes.string.isRequired,
		value: React.PropTypes.oneOfType([
			React.PropTypes.string,
			React.PropTypes.bool,
			React.PropTypes.number
		])
	},

	render: function(){
		return (
			<div className="label-value-field">
				<span className="name">
					{this.props.name}
				</span>
				<span>
					{this.props.value}
				</span>
			</div>
		);
	}
});

export default LabelValueField;