import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  SignInScreen,
  SignUpScreen,
  HomeScreen,
  ProfileScreen,
  EditProfileScreen,
  SearchScreen,
  WishListScreen,
  AddListingScreen,
  DetailsScreen,
} from './src/screens';
import Octicons from 'react-native-vector-icons/Octicons';
import ProfileIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();
const ProfileStack = createNativeStackNavigator();
const SignInStack = createNativeStackNavigator();
const SignUpStack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();
function TabScreen() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
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
        tabBarActiveTintColor: '#3DA7AE',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitleStyle: {fontFamily: 'Montserrat', fontWeight: '600'},
        }}
      />
      <Tab.Screen
        name="WishList"
        component={WishListScreen}
        options={{
          title: 'Wishlist',
          headerTitleStyle: {fontFamily: 'Montserrat', fontWeight: '600'},
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStackScreen}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
}

function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <ProfileStack.Screen name="ProfileScreen" component={ProfileScreen} />
      <ProfileStack.Screen
        name="EditProfileScreen"
        component={EditProfileScreen}
      />
    </ProfileStack.Navigator>
  );
}

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
        initialRouteName="SignIn"
        screenOptions={{
          headerShown: false,
        }}>
        <HomeStack.Screen name="SignIn" component={SignInStackScreen} />
        <HomeStack.Screen name="HomeStack" component={TabScreen} />
        <HomeStack.Screen name="AddListing" component={AddListingScreen} />
        <HomeStack.Screen name="Details" component={DetailsScreen} />
      </HomeStack.Navigator>
    </NavigationContainer>
  );
}

export default App;
