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
  OnbordingScreen,
} from './src/screens';
import Octicons from 'react-native-vector-icons/Octicons';
import ProfileIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
function TabScreen() {
  return (
    <Tab.Navigator
      tabBarVisible={false}
      screenOptions={({route}) => ({
        showLabel: false,
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
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen name="WishList" component={WishListScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
const OnbordingStack = createNativeStackNavigator();
function OnbordingStackScreen() {
  return (
    <OnbordingStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <OnbordingStack.Screen
        name="OnbordingScreen"
        component={OnbordingScreen}
      />
      <OnbordingStack.Screen
        name="SignUpFromOnbording"
        component={SignUpStackScreen}
      />
      <OnbordingStack.Screen
        name="SignInFromOnbording"
        component={SignInStackScreen}
      />
    </OnbordingStack.Navigator>
  );
}
const SignInStack = createNativeStackNavigator();
function SignInStackScreen() {
  return (
    <SignInStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <SignInStack.Screen name="SignInStack" component={SignInScreen} />
      <SignInStack.Screen name="SignUp" component={SignUpStackScreen} />
      <SignInStack.Screen name="Authenticated" component={TabScreen} />
    </SignInStack.Navigator>
  );
}
const SignUpStack = createNativeStackNavigator();
function SignUpStackScreen() {
  return (
    <SignUpStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <SignUpStack.Screen name="SignUpStack" component={SignUpScreen} />
      <SignUpStack.Screen name="SignIn" component={SignInStackScreen} />
    </SignUpStack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <HomeStack.Navigator
        initialRouteName="SignUp"
        screenOptions={{
          headerShown: false,
        }}>
        <HomeStack.Screen
          name="OnbordingStack"
          component={OnbordingStackScreen}
        />
        <HomeStack.Screen name="HomeStack" component={TabScreen} />
        <HomeStack.Screen name="SignIn" component={SignInStackScreen} />
        <HomeStack.Screen name="SignUp" component={SignUpStackScreen} />
        <HomeStack.Screen name="AddListing" component={AddListingScreen} />
      </HomeStack.Navigator>
    </NavigationContainer>
  );
}

export default App;
