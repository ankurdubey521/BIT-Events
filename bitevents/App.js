import React from "react";
import { View, TouchableOpacity, FlatList } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import EventCard from './app/components/EventCard';
import EventList from './app/components/EventList';;

class HomeScreen extends React.Component {

  constructor(props) {
    super(props);
    //this.state.firebaseApp = ;
    this.getEventList = this.getEventList.bind(this);
  }

  getEventList() {
       
  }

  render() {
   let dataArray = [];
   for(let i = 0; i < 10; ++i) {
     dataArray.push({
       eventName: "CQM",
       src: "https://media.istockphoto.com/photos/man-speaking-at-a-business-conference-picture-id499517325"
     })
   }
   console.log('render');
   this.getEventList();
   return <EventList listItems={dataArray} onPressCallback={() => {this.props.navigation.navigate("Description");}}/>
  }
}
class LoginPage extends React.Component {
  constructor() {
    super();
    this.onPress = this.onPress.bind(this);
  }
  onPress() {
    this.props.navigation.navigate("Home");
  }
  render() {
    return(
    <TouchableOpacity onPress={this.onPress}><Text>Login</Text></TouchableOpacity>);
  }
}

class DescriptionPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      clubIconUrl: "https://media.istockphoto.com/photos/man-speaking-at-a-business-conference-picture-id499517325",
      clubName: "ACM",
      eventName: "CQM",
      posterUrl: "https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.SMbWRAxiRdIKGO5lK9dnUwHaJ4%26pid%3DApi&f=1",
      googleFormUrl: "https://www.testlink.com",
      desc: "qefopqjwefkojqwiefj0qejqrjqjgqiwjgioj",
      startDate: "Today",
      endDate: "Tommorow" 
    }
  }
  
  render() {
    return (
    <EventCard clubIconUrl={this.state.clubIconUrl} clubName={this.state.clubName} eventName={this.state.eventName} posterUrl={this.state.posterUrl}
    googleFormUrl={this.state.googleFormUrl} desc={this.state.desc} startDate={this.state.startDate} endDate={this.state.endDate} />);
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Login: {
      screen: LoginPage
    },
    Description: {
      screen: DescriptionPage
    }
  },
  {
    initialRouteName: "Login"
  }
);

export default createAppContainer(AppNavigator);