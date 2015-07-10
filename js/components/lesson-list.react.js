import React from 'react/addons';
import { List } from 'immutable';
import Lesson from './lesson.react';

var LessonList = React.createClass({
	displayName: 'LessonList',

	propTypes: {
		lessons: React.PropTypes.instanceOf(List).isRequired
	},

	mixins: [React.addons.PureRenderMixin],

	render: function(){
		var lessons = this.props.lessons.map(function(lesson){
			return (
				<li key={lesson.get('id')}>
					<Lesson lesson={lesson} />
				</li>
			);
		});

		return (
			<div>
				<div>Lessons</div>

				<ul>
					{lessons}
				</ul>
			</div>
		);
	}
});

export default LessonList;