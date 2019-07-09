import React, { Component, Alert } from 'react';
import { Container, Header, Content, Card, CardItem, Text, Icon, Right, Thumbnail } from 'native-base';
export default class EventList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            listItems: this.props.listItems
        };
        this.generateListItemArray = this.generateListItemArray.bind(this);
        this.onEventPress = this.onEventPress.bind(this);
    }

    onEventPress() {
        console.log("Arora");
    }

    generateListItemArray(list) {
        let itemArray = [];
        for (let i = 0; i < list.length; ++i) {
            itemArray.push(
            <CardItem button onPress={this.onEventPress}>
                 <Thumbnail source={{ uri: list[i].src}}/>
                <Text style={{flex: 10}}>{list[i].eventName}</Text>
                <Right>
                    <Icon name="arrow-forward" style={{align:"right"}}/>
                </Right>
            </CardItem>
            );
        }
        return itemArray;
    }

    render() {
        return (
            <Container>
                <Header />
                <Content>
                    <Card>
                        {this.generateListItemArray(this.state.listItems)}
                    </Card>
                </Content>
            </Container>
        );
    }
}