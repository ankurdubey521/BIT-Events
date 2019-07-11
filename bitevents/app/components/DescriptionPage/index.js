import React from 'react';
import { StatusBar } from 'react-native';

import EventCard from '../EventCard';

export default class DescriptionPage extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			clubIconUrl:
				'http://ipsn.acm.org/2011/index_files/acm.jpg',
			clubName: 'ACM',
			eventName: 'CQM',
			posterUrl:
				'https://scontent.fnag1-2.fna.fbcdn.net/v/t1.0-9/61142444_1799068313527207_5241365323948490752_n.jpg?_nc_cat=109&_nc_oc=AQkCN8pIYhG1hhABhqZx0WkWXJ3luOQGN4d1eXEuF73CordFEvDuohXy5ngfuVxNhNg&_nc_ht=scontent.fnag1-2.fna&oh=bf3c3c676e672a0eae208cf03c5671fb&oe=5D790762',
			googleFormUrl: 'https://www.testlink.com',
			desc: 'ACM BIT Mesra will be organizing CQM-06 on 12th June 2019. The contest will start at 10:00 pm and will have a duration of 3 hours. The link for the same is:\nhttps://www.hackerrank.com/cqm-06\nIt is an individual contest.\nSee you on the leaderboard.',
			startDate: 'Today',
			endDate: 'Tommorow'
		};
	}

	render() {
        StatusBar.setBackgroundColor('black', true);
		return (
			<EventCard
				clubIconUrl={this.state.clubIconUrl}
				clubName={this.state.clubName}
				eventName={this.state.eventName}
				posterUrl={this.state.posterUrl}
				googleFormUrl={this.state.googleFormUrl}
				desc={this.state.desc}
				startDate={this.state.startDate}
				endDate={this.state.endDate}
			/>
		);
	}
}