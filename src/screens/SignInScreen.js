import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Alert} from 'react-native';
import {
  Greeting,
  InputField,
  InputFormTitle,
  SubmitButton,
  ChangeScreenButton,
} from '../components';
import BackIcon from 'react-native-vector-icons/Ionicons';
import auth from '@react-native-firebase/auth';

function SignIn({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const LogInAccount = async () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        navigation.navigate('Authenticated');
        console.log('User account signed in!');
        Alert.alert('You are Successfully Login to your account');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
          Alert.alert('Error! That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
          Alert.alert('Error! That email address is invalid!');
        }

        console.error(error);
      });
    setEmail('');
    setPassword('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.backButtonView}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <BackIcon name="chevron-back" size={30} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.title}>
        <Text style={styles.textSignIn}>Sign in</Text>
        <Text style={styles.textWelcome}>Welcome back</Text>
      </View>
      <View style={styles.inputCont}>
        <InputField type="Email" state={email} setState={setEmail} />
        <InputField type="Password" state={password} setState={setPassword} />
        <View style={styles.forgetPassView}>
          <Text style={styles.forgetPassText}>Forget Password?</Text>
        </View>

        <SubmitButton type="SIGN IN" onPress={LogInAccount} />
      </View>
      <View style={styles.changeScreenView}>
        <Text style={styles.changeScreenText}>
          Don't have an account?
          <Text
            style={styles.signUpLink}
            onPress={() => navigation.navigate('SignUp')}>
            Sign up
          </Text>
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    flex: 1,
    padding: 20,
  },
  backButtonView: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#D9D9D9',
    height: 36,
    width: 36,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 35,
  },
  title: {
    marginBottom: 35,
  },
  textSignIn: {
    fontFamily: 'Montserrat',
    color: '#000',
    fontWeight: 'bold',
    fontSize: 24,
  },
  textWelcome: {
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    color: '#808080',
    fontSize: 13,
  },
  inputCont: {
    flex: 0.5,
  },
  forgetPassView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 15,
  },
  forgetPassText: {
    fontFamily: 'Montserrat',
    fontWeight: '500',
    color: '#77C2C6',
  },
  changeScreenView: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  changeScreenText: {
    fontFamily: 'Montserrat',
    fontWeight: '500',
    fontSize: 14,
  },
  signUpLink: {
    color: '#3DA7AE',
    fontWeight: 'bold',
    marginLeft: 5,
  },
});
export default SignIn;
