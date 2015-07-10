import React from 'react/addons';
import { Map } from 'immutable';
import LabelValueField from './label-value-field.react';

var Provider = React.createClass({
	displayName: 'provider',

	propTypes: {
		provider: React.PropTypes.instanceOf(Map).isRequired
	},

	mixins: [React.addons.PureRenderMixin],

	render: function(){
		var provider = this.props.provider;

		var providerFields = provider.entrySeq().map(function(keyValue){
			return (<LabelValueField key={keyValue[0]} name={keyValue[0]} value={keyValue[1]} />);
		}).toArray();

		return (
			<div className="provider">
				<div>
					Provider
				</div>
				<div>
					{providerFields}
				</div>
			</div>
		);
	}
});

export default Provider;