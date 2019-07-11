import { createStackNavigator, createAppContainer } from 'react-navigation';

import HomePage from './app/components/HomePage';
import LoginPage from './app/components/LoginPage';
import DescriptionPage from './app/components/DescriptionPage';

const AppNavigator = createStackNavigator(
	{
		Home: {
      screen: HomePage,
      navigationOptions: {
        title: "Events",
        headerTintColor: "white",
        headerStyle: {
          backgroundColor:"black"
        }
      }
		},
		Login: {
      screen: LoginPage,
      navigationOptions: {
        header: null
      }
		},
		Description: {
      screen: DescriptionPage,
      navigationOptions: {
        title: "Event Description",
        headerTintColor: "white",
        headerStyle: {
          backgroundColor:"black"
        }
      }
		}
	},
	{
		initialRouteName: 'Login'
  }
);

export default createAppContainer(AppNavigator);
