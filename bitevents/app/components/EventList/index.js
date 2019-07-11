import React, { Component } from 'react';
import { ActivityIndicator, StyleSheet, StatusBar } from 'react-native';
import { Container, Content, Card, CardItem, Text, Icon, Right, Thumbnail} from 'native-base';
import firebase from '../../firebaseRealtimeDatabaseConfig';

export default class EventList extends Component {
    constructor(props) {
		super(props);
		this.generateListItemArray = this.generateListItemArray.bind(this);
		this.onEventPress = this.onEventPress.bind(this);
		this.setEventList = this.setEventList.bind(this);

		this.state = {
            isLoading: true,
			listItems: this.props.listItems,
			listCardJsx: <ActivityIndicator size="large" color="#0000ff" />
		};
	}

	onEventPress() {
		this.props.onPressCallback();
	}

	setEventList() {
        this.setState({
            listCardJsx: <ActivityIndicator size="large" color="#0000ff" />,
            isLoading: false
        });
		let list = [];
		let eventsCollection = firebase.database().ref('/Events');
		return eventsCollection.once('value', (snapshot) => {
			const state = snapshot.val();
			list.push({
				eventName: state.event_name,
				src: 'http://ipsn.acm.org/2011/index_files/acm.jpg'
			});
			this.setState({
				listCardJsx: this.generateListItemArray(list)
			});
		});
	}

	generateListItemArray(list) {
		let itemArray = [];
		for (let i = 0; i < list.length; ++i) {
			itemArray.push(
				<CardItem button onPress={this.onEventPress} key={i+1}>
					<Thumbnail source={{ uri: list[i].src }} />
					<Text style={style.clubName}>{list[i].eventName}</Text>
				</CardItem>
            );
        }
        itemArray.push(
            <CardItem button onPress={this.setEventList} key={10}>
                <Icon type = "MaterialCommunityIcons" name = "reload" style={style.reloadIcon}/>
                <Text style={style.reloadText}>Reload</Text>
            </CardItem>
        );
		return itemArray;
	}

	render() {
        StatusBar.setBackgroundColor('black', true);
        if(this.state.isLoading) {
            this.setEventList();
        }
		return (
			<Container>
				<Content>
					<Card>{this.state.listCardJsx}</Card>
				</Content>
			</Container>
		);
	}
}

const style = StyleSheet.create({
    clubName: {
        fontSize:18,
        fontFamily:'Trebuchet MS',
        fontWeight:'bold',
        paddingLeft: 10
    },
    reloadText: {
        fontSize:14,
        fontFamily:'Trebuchet MS',
        fontWeight:'bold',
        paddingLeft: 0
    },
    reloadIcon:{
        fontSize:20,
        fontWeight:'bold'
    }
});
