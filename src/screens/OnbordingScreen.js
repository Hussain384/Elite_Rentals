import * as React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {ChangeScreenButton} from '../components';
import Picture from '../utilz/images/OnbordingPicture.png';
import Logo from '../utilz/images/Vector.png';

export default function OnbordingScreen({navigation}) {
  return (
    <View style={Styles.container}>
      <View style={Styles.pictureView}>
        <View style={Styles.logoView}>
          <View style={Styles.logoInnerView}>
            <Image style={Styles.logoStyle} source={Logo} />
          </View>
          <Text style={Styles.logoText}>Elite Rentals</Text>
        </View>
        <Image style={Styles.pictureStyle} source={Picture} />
      </View>
      <View style={Styles.welcomeTextView}>
        <Text style={Styles.welcomeTextBold}>Welcome to our app</Text>
        <Text style={Styles.welcomeTextSmall}>
          Congratulations you are going to avail mojor oportunity
        </Text>
      </View>
      <View style={Styles.buttonsView}>
        <ChangeScreenButton
          name={'Sign Up'}
          changeTo={'SignUpFromOnbording'}
          navigation={navigation}
        />
        <ChangeScreenButton
          name={'Sign In'}
          changeTo={'SignInFromOnbording'}
          navigation={navigation}
        />
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  pictureView: {
    flex: 0.56,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pictureStyle: {
    borderRadius: 20,
    position: 'absolute',
    height: '100%',
    width: '100%',
  },
  logoView: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    position: 'absolute',
    width: 90,
    top: 10,
    zIndex: 1,
  },
  logoInnerView: {
    borderRadius: 6,
    height: 25,
    width: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#CCCCD4',
  },
  logoStyle: {
    height: 17,
    width: 17,
  },
  logoText: {
    fontFamily: 'Montserrat',
    fontSize: 10,
    alignSelf: 'center',
    color: '#9295A9',
  },
  welcomeTextView: {
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeTextBold: {
    fontWeight: 'bold',
    fontSize: 24,
    fontFamily: 'Montserrat',
    color: '#000',
  },
  welcomeTextSmall: {
    fontSize: 12,
    fontFamily: 'Montserrat',
    color: '#000',
  },
  buttonsView: {
    flex: 0.2,
  },
});
