import React from 'react';
import {
	View,
	Text,
	ImageBackground,
	StyleSheet,
	Image,
	Dimensions,
	StatusBar
} from 'react-native';
import { GoogleSignin, GoogleSigninButton, statusCodes } from 'react-native-google-signin';

import bgimage from './back.jpg';
//url image_background https://www.imgbase.info/images/safe-wallpapers/digital_art/3d/44428_3d_blue_black_black_and_blue_cubes.jpg
import logo from './logo.png';
//url logo https://upload.wikimedia.org/wikipedia/en/d/d2/Birla_Institute_of_Technology_Mesra.png

/**
 * We can have only one instance of firebase app configured at a time, so I'm using a 
 * singelton class to provide a configured firebase object wherever required. Confiuration does not 
 * need to be done explicitly
 */
import firebase from '../../firebaseRealtimeDatabaseConfig';

const { width: WINDOW_WIDTH } = Dimensions.get('window');

export default class LoginPage extends React.Component {
	constructor() {
		super();
		this.onPress = this.onPress.bind(this);
		this._signIn = this._signIn.bind(this);
		this.state = { email: '', password: '', error: ''};
	}
	onPress() {
		this.props.navigation.navigate('Home');
	}
	async componentDidMount(){
		this._configureGoogleSignIn();
	}
	_configureGoogleSignIn(){
		GoogleSignin.configure({
			scopes: ['https://www.googleapis.com/auth/drive.readonly'], 
			webClientId: "1012861969204-ei4o4vhvnm8e545ol3crek9d8872i2f4.apps.googleusercontent.com", 
		});
	}
	_signIn = async () => {
		try {
		  await GoogleSignin.hasPlayServices();
		  const userInfo = await GoogleSignin.signIn();
		  this.setState({ userInfo, error: null });
		  console.log('try');
		} catch (error) {
		  console.log(error);
		  console.log(error.code);
		  if (error.code === statusCodes.SIGN_IN_CANCELLED) {
			// user cancelled the login flow
		  } else if (error.code === statusCodes.IN_PROGRESS) {
			// operation (f.e. sign in) is in progress already
		  } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
			// play services not available or outdated
		  } else {
			// some other error happened
		  }
		}
		console.log('madar');
		this.onPress();
	};
	render() {
		StatusBar.setBackgroundColor('black', true);
		return (
			<ImageBackground source={bgimage} style={styles.backGroundContainer}>
				<View style={styles.logoContainer}>
					<Image source={logo} style={styles.logo} />
					<Text style={styles.logoText}>BIT EVENTS</Text>
				</View>
				<GoogleSigninButton
					style={{ width: 215, height: 55, paddingBottom: 50, marginBottom: 140, marginTop: 150 }}
					size={GoogleSigninButton.Size.Wide}
					color={GoogleSigninButton.Color.Dark}
					onPress={this._signIn}
					disabled={this.state.isSigninInProgress} />
				<Text style={styles.teamName}>_destroyingRecursively_</Text>
				<Text style={styles.name}>Ankur Dubey</Text>
				<Text style={styles.name}>Saksham Arora</Text>
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
		width: 150,
		height: 150
	},
	logoContainer: {
		alignItems: 'center',
		marginBottom: 50,
		marginTop: 90
	},
	logoText: {
		color: 'white',
		fontSize: 45,
		fontWeight: '500',
		marginTop: 10,
		opacity: 0.5
	},
	input: {
		width: WINDOW_WIDTH - 55,
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
		left: 40,
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
		width: WINDOW_WIDTH - 55,
		height: 50,
		borderRadius: 25,
		marginTop: 20,
		alignContent:'center',
		justifyContent: 'center',
		backgroundColor: '#00ff80'
	},
	text: {
		paddingTop:10,
		color: 'rgba(255,255,255,0.7)',
		fontSize: 30,
		fontWeight: 'bold',
		textAlign: 'center'
	},
	teamName:{
		color: 'white',
		fontSize: 20,
		fontWeight: '500',
		marginTop: 10,
		opacity: 0.5
	},
	name:
	{
		color: 'white',
		fontSize: 20,
		fontWeight: '500',
		marginTop: 10,
		opacity: 0.5
	}
});