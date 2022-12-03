import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Greeting from '../components/Greeting';
import InputFormTitle from '../components/InputFormTitle';
import SubmitButton from '../components/SubmitButton';
import ChangeScreenButton from '../components/ChangeScreenButton';
import InputFieldWithIcon from '../components/InputFieldWIthIcon';

function SignIn({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
        <SubmitButton name="SIGN IN" />
      </View>
      <ChangeScreenButton name="SIGN UP" />
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
