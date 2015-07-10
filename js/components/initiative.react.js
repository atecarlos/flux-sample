import React from 'react/addons';
import LabelValueField from './label-value-field.react';
import Provider from './provider.react';
import LessonList from './lesson-list.react';
import { Map } from 'immutable';

import 'initiative.scss';

var Initiative = React.createClass({
	displayName: 'Initiative',

	propTypes: {
		initiative: React.PropTypes.instanceOf(Map).isRequired
	},

	mixins: [React.addons.PureRenderMixin],

	render: function(){
		var initiative = this.props.initiative;

		var initiativeFields = initiative.entrySeq().map(function(keyValue){
			if(typeof keyValue[1] !== 'object'){
				return (<LabelValueField key={keyValue[0]} name={keyValue[0]} value={keyValue[1]} />);
			}
		}).toArray();

		var provider = initiative.get('provider');
		var lessons = initiative.get('lessons');

		return (
			<div className="initiative">
				<div className="initiative-properties">
					{initiativeFields}
				</div>
				<div className="initiative-provider">
					<Provider provider={provider} />
				</div>
				<div className="initiative-lessons">
					<LessonList lessons={lessons} />
				</div>
			</div>
		);
	}
});

export default Initiative;