import React from 'react';
import { StatusBar } from 'react-native';
import { Tabs, Tab, TabHeading, Container, Header, Text } from 'native-base';

import EventList from '../EventList';

export default class HomePage extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
        StatusBar.setBackgroundColor('black', true);
        return(
            <Container>
            <Header hasTabs style = {{height: 0}}/>
                <Tabs>
                <Tab heading={ <TabHeading style = {{backgroundColor: "#444444"}}><Text>Upcoming</Text></TabHeading>}>
                    <EventList onPressCallback={() => {	this.props.navigation.navigate('Description');}} />
                </Tab>
                <Tab heading={ <TabHeading style = {{backgroundColor: "#444444"}}><Text>Past</Text></TabHeading>}>
                    <EventList onPressCallback={() => {	this.props.navigation.navigate('Description');}} />
                </Tab>
                </Tabs>
            </Container>
        );
	}
}