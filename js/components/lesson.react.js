import React from 'react/addons';
import { Map } from 'immutable';
import LabelValueField from './label-value-field.react';

var Lesson = React.createClass({
	displayName: 'Lesson',

	propTypes: {
		lesson: React.PropTypes.instanceOf(Map).isRequired
	},

	render: function(){
		var lesson = this.props.lesson;

		var lessonFields = lesson.entrySeq().map(function(keyValue){
			return (<LabelValueField key={keyValue[0]} name={keyValue[0]} value={keyValue[1]} />);
		}).toArray();

		return (
			<div>
				{lessonFields}
			</div>
		);
	}
});

export default Lesson;