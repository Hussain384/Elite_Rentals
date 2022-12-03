import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import {SignInScreen, SignUpScreen, HomeScreen} from '../src/screens';

const Screens = {
  SignUp: {
    screen: SignUpScreen,
  },
  SignIn: {
    screen: SignInScreen,
  },
  Home: {
    screen: HomeScreen,
  },
};

const AuthNavigation = createStackNavigator(Screens);

export default createAppContainer(AuthNavigation);
