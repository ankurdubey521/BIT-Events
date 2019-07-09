import React from "react";
import { View, TouchableOpacity, FlatList } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import EventCard from './app/components/EventCard';
import EventList from './app/components/EventList';

const desc = "Et aperiam magnam impedit aperiam id sed. Ipsam culpa sint quo modi quisquam. Architecto quibusdam inventore cum fugiat. Ratione fuga sed \
sunt ab. Repellat accusantium pariatur voluptas.Et aperiam magnam impedit aperiam id sed. Ipsam culpa sint quo modi quisquam. Architecto quibusdam inventore cum fugiat. Ratione fuga sed \
sunt ab. Repellat accusantium pariatur voluptas.Et aperiam magnam impedit aperiam id sed. Ipsam culpa sint quo modi quisquam. Architecto quibusdam inventore cum fugiat. Ratione fuga sed \
sunt ab. Repellat accusantium pariatur voluptas.Et aperiam magnam impedit aperiam id sed. Ipsam culpa sint quo modi quisquam. Architecto quibusdam inventore cum fugiat. Ratione fuga sed \
sunt ab. Repellat accusantium pariatur voluptas.Et aperiam magnam impedit aperiam id sed. Ipsam culpa sint quo modi quisquam. Architecto quibusdam inventore cum fugiat. Ratione fuga sed \
sunt ab. Repellat accusantium pariatur voluptas.Et aperiam magnam impedit aperiam id sed. Ipsam culpa sint quo modi quisquam. Architecto quibusdam inventore cum fugiat. Ratione fuga sed \
sunt ab. Repellat accusantium pariatur voluptas.Et aperiam magnam impedit aperiam id sed. Ipsam culpa sint quo modi quisquam. Architecto quibusdam inventore cum fugiat. Ratione fuga sed \ ";

class HomeScreen extends React.Component {
  render() {
    /*
    let cardArray = [];
    for(let i = 0; i < 7; ++i) {
      cardArray.push({
        key: 10
      });
    }
    return <FlatList data={cardArray} renderItem = {
      ({item}) => {
        return (<EventCard clubIconUrl="https://media.istockphoto.com/photos/man-speaking-at-a-business-conference-picture-id499517325"
        clubName="ACM" eventName="CQM-1000" posterUrl="https://media.istockphoto.com/photos/man-speaking-at-a-business-conference-picture-id499517325" 
        desc={desc} startDate="Today" endDate="Tommorow"/>);
      }
    }/>
    */
   let dataArray = [];
   for(let i = 0; i < 10; ++i) {
     dataArray.push({
       eventName: "CQM",
       src: "https://media.istockphoto.com/photos/man-speaking-at-a-business-conference-picture-id499517325"
     })
   }
   return <EventList listItems={dataArray} />
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

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Login: {
      screen: LoginPage
    }
  },
  {
    initialRouteName: "Login"
  }
);

export default createAppContainer(AppNavigator);