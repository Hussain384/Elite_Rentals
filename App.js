import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  SignInScreen,
  SignUpScreen,
  HomeScreen,
  ProfileScreen,
  SearchScreen,
  WishListScreen,
  AddListingScreen,
} from './src/screens';
import Octicons from 'react-native-vector-icons/Octicons';
import ProfileIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const HomeStack = createNativeStackNavigator();
function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="SignIn"
        component={SignInScreen}
        options={{tabBarVisible: false}}
      />
      <HomeStack.Screen
        name="AddListing"
        component={AddListingScreen}
        options={{tabBarVisible: false}}
      />
    </HomeStack.Navigator>
  );
}
// const SignInStack = createNativeStackNavigator();
// function SignInStackScreen() {
//   return (
//     <SignInStack.Navigator>
//       <SignInStack.Screen name="SignIn" component={SignInScreen} />
//       <SignInStack.Screen name="SignUp" component={SignUpScreen} />
//       {/* <SignInStack.Screen name="Home" component={HomeScreen} /> */}
//     </SignInStack.Navigator>
//   );
// }
// const SignUpStack = createNativeStackNavigator();
// function SignUpStackScreen() {
//   return (
//     <SignUpStack.Navigator>
//       <SignUpStack.Screen name="SignIn" component={SignUpScreen} />
//       <SignUpStack.Screen name="SignUp" component={SignInScreen} />
//     </SignUpStack.Navigator>
//   );
// }
const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Search') {
              iconName = 'search';
            } else if (route.name === 'Profile') {
              iconName = 'account-circle-outline';
            } else if (route.name === 'WishList') {
              iconName = 'heart';
            }

            return iconName === 'account-circle-outline' ? (
              <ProfileIcon name={iconName} size={28} color={color} />
            ) : (
              <Octicons name={iconName} size={25} color={color} />
            );
          },
          tabBarActiveTintColor: '#35C6ED',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen
          name="Home"
          component={HomeStackScreen}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="WishList"
          component={WishListScreen}
          options={{tabBarVisible: false}}
        />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
