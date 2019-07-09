import React from "react";
import { Image, StyleSheet } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';
import { TouchableOpacity } from "react-native-gesture-handler";

export default class EventCard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        clubIconUrl: this.props.clubIconUrl,
        clubName: this.props.clubName,
        eventName: this.props.eventName,
        posterUrl: this.props.posterUrl,
        desc: this.props.desc,
        startDate: this.props.startDate,
        endDate: this.props.endDate
    };
    console.log(this.state);
    this.register = this.register.bind(this);
  }

  register() {

  }

  render() {
    return(
      <Container>
      <Header />
      <Content>
        <Card style={style}>
          <CardItem>
            <Left>
              <Thumbnail source={{ uri: this.state.clubIconUrl}} />
              <Body>
                <Text>{this.state.clubName}</Text>
                <Text note>{this.state.startDate} - {this.state.endDate}</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem>
            <Left>
              <Body>
                <Text>{this.state.eventName}</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem>
            <Body>
              <Image source={{ uri: this.state.posterUrl}} style={{height: 200, width: 200, flex: 1}}/>
              {/*
              <Text>
                {this.state.desc}
              </Text>
              */ }
            </Body>
          </CardItem>
          <CardItem>
            <Left>
              <TouchableOpacity onPress={this.register}>
                <Text>Register</Text>
              </TouchableOpacity>
            </Left>
          </CardItem>
        </Card>
      </Content>
      </Container>
    );
  }
}

const style = StyleSheet.create({
  flex: 1,
  paddingLeft: 0,
  paddingRight: 0,
  paddingTop: 0,
  paddingBottom: 0
});