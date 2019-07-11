import React from 'react';
import { View, Text, TouchableOpacity, Button, ImageBackground, StyleSheet, Image, Dimensions, StatusBar } from 'react-native';

import bgimage from './back.jpg';
import logo from './logo.png';
import { TextInput } from 'react-native-gesture-handler';
const { width: WIDTH } = Dimensions.get('window');
import Icon from 'react-native-vector-icons/Ionicons';
export default class LoginPage extends React.Component {
	constructor() {
		super();
		this.onPress = this.onPress.bind(this);
	}
	onPress() {
		this.props.navigation.navigate('Home');
	}
	render() {
    StatusBar.setBackgroundColor('black', true);
		return (
			<ImageBackground source={bgimage} style={styles.backGroundContainer}>
				<View style={styles.logoContainer}>
					<Image source={logo} style={styles.logo} />
					<Text style={styles.logoText}>BIT EVENTS</Text>
				</View>
				<View style={styles.inputContainer}>
					<Icon name={'ios-person'} size={28} color={'rgba(255,255,255,0.7)'} style={styles.inputIcon} />
					<TextInput
						style={styles.input}
						placeholder={'Username'}
						placeholderTextColor={'rgba(255,255,255,0.7)'}
						underlineColorAndroid="transparent"
					/>
				</View>
				<View style={styles.inputContainer}>
					<Icon name={'ios-lock'} size={28} color={'rgba(255,255,255,0.7)'} style={styles.inputIcon} />
					<TextInput
						style={styles.input}
						placeholder={'Password'}
						secureTextEntry={true}
						placeholderTextColor={'rgba(255,255,255,0.7)'}
						underlineColorAndroid="transparent"
					/>
					<TouchableOpacity style={styles.eye}>
						<Icon name={'ios-eye'} size={26} color={'rgba(255,255,255,0.7)'} />
					</TouchableOpacity>
				</View>
				<TouchableOpacity style={styles.login} onPress={this.onPress}>
					<Text style={styles.text}>Login</Text>
				</TouchableOpacity>
			</ImageBackground>
		);
	}
}

const styles = StyleSheet.create({
	backGroundContainer: {
		flex: 1,
		height: null,
		width: null,
		justifyContent: 'center',
		alignItems: 'center'
	},
	logo: {
		width: 120,
		height: 120
	},
	logoContainer: {
		alignItems: 'center',
		marginBottom: 50
	},
	logoText: {
		color: 'white',
		fontSize: 20,
		fontWeight: '500',
		marginTop: 10,
		opacity: 0.5
	},
	input: {
		width: WIDTH - 55,
		height: 50,
		borderRadius: 25,
		fontSize: 16,
		paddingLeft: 45,
		backgroundColor: 'rgba(255,255,255,0.7)',
		color: 'rgba(255,255,255,0.7)',
		marginHorizontal: 25
	},
	inputIcon: {
		position: 'absolute',
		top: 8,
		left: 37,
		width: 10
	},
	inputContainer: {
		marginTop: 10,
		height: 30,
		paddingBottom: 60
	},
	eye: {
		position: 'absolute',
		top: 8,
		right: 37
	},
	login: {
		width: WIDTH - 55,
		height: 50,
		borderRadius: 25,
		marginTop: 20,
		justifyContent: 'center',
		backgroundColor: '#00ff80'
	},
	text: {
		color: 'rgba(255,255,255,0.7)',
		fontSize: 30,
		fontWeight: 'bold',
		textAlign: 'center'
	}
});