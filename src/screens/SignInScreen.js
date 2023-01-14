import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {
  Greeting,
  InputFieldWithIcon,
  InputFormTitle,
  SubmitButton,
  ChangeScreenButton,
} from '../components';
import auth from '@react-native-firebase/auth';

function SignIn({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const LogInAccount = async () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        navigation.navigate('Home');
        console.log('User account signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };

  return (
    <View style={styles.container}>
      <Greeting greet="Welcome!" discription="Login to your Account" />
      <View style={styles.signUpForm}>
        <InputFormTitle title="SignIn" />
        <View style={styles.inputCont}>
          <InputFieldWithIcon
            type="Email"
            iconType="Foundation"
            state={email}
            setState={setEmail}
          />
          <InputFieldWithIcon
            type="Password"
            iconType="Ionicons"
            state={password}
            setState={setPassword}
          />
        </View>
        <SubmitButton type="SIGN IN" onPress={LogInAccount} />
      </View>
      <ChangeScreenButton
        name="SIGN UP"
        changeTo="SignUp"
        navigation={navigation}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#DFF8FF',
    flex: 1,
    justifyContent: 'center',
    padding: 40,
  },
  greeting: {
    alignSelf: 'center',
    color: '#20ACF2',
    fontSize: 40,
    fontWeight: 'bold',
  },
  info: {
    alignSelf: 'center',
    color: '#20ACF2',
    marginBottom: 20,
  },
  signUpForm: {
    backgroundColor: '#fff',
    borderRadius: 50,
    borderTopRightRadius: 180,
    padding: 30,
  },
  inputCont: {
    marginVertical: 20,
  },
});
export default SignIn;
