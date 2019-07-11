import React from "react";
import { Image,StyleSheet,Dimensions, Linking} from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';

export default class EventCard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        clubIconUrl: this.props.clubIconUrl,
        clubName: this.props.clubName,
        eventName: this.props.eventName,
        posterUrl: this.props.posterUrl,
        googleFormUrl: this.props.googleFormUrl,
        desc: this.props.desc,
        startDate: this.props.startDate,
        endDate: this.props.endDate
    };
    this.register = this.register.bind(this);
  }

  register() {
    Linking.openURL(this.state.googleFormUrl);
  }

  render() {
    return(
      <Container>
      <Content>
        <Card style={style}>
          <CardItem>
            <Left>
              <Thumbnail source={{ uri: this.state.clubIconUrl}} />
              <Body>
                <Text style={style.clubName}>{this.state.clubName}</Text>
                <Text style={style.duration} note>{this.state.startDate} - {this.state.endDate}</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem>
            <Left>
              <Body style={style.eventName}>
                <Text style={style.eventName}>{this.state.eventName}</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem>
            <Body>
              <Image source={{ uri: this.state.posterUrl}} style={{height:400,width:'100%'}} resizeMode="contain"/>
              <Text style={style.description}>
                {"\n"}
                {this.state.desc}
              </Text>
            </Body>
          </CardItem>
          <CardItem style={style.register}>
          <Button full success style={style.full} onPress={this.register}>
            <Text style={style.register}>Register</Text>
          </Button>
          </CardItem>
        </Card>
      </Content>
      </Container>
    );
  }
}

const style = StyleSheet.create({
  clubName:{
    fontSize:18,
    fontFamily:'Trebuchet MS',
    fontWeight:'bold'
  },
  duration:
  {
    fontSize:16,
    fontFamily:'Trebuchet MS',
    fontWeight:'bold'
  },
  eventName:{
    fontSize:25,
    fontFamily:'Trebuchet MS',
    fontWeight:'bold',
    justifyContent: 'center',
    alignItems: 'center'
  },
  description:
  {
    fontSize:18,
    fontFamily:'Trebuchet MS'
  },
  poster:{
    justifyContent:'space-around'
  },
  register:{
    fontSize:21,
    fontFamily:'calibri',
    justifyContent: 'space-around',
    alignItems:'center'
  },
  full:
  {
    width:'100%'
  }
});