import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {
  Greeting,
  InputFieldWithIcon,
  InputFormTitle,
  SubmitButton,
  ChangeScreenButton,
} from '../components';

function SignUp({navigation}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');

  return (
    <View style={styles.container}>
      <Greeting greet="Hello!" discription="Regiter your self " />
      <View style={styles.signUpForm}>
        <InputFormTitle title="SignUp" />
        <View style={styles.inputCont}>
          <InputFieldWithIcon
            type="Name"
            iconType="Foundation"
            state={name}
            setState={setName}
          />
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
          <InputFieldWithIcon
            type="Confirm Password"
            iconType="Ionicons"
            state={confirmPass}
            setState={setConfirmPass}
          />
        </View>
        <SubmitButton name="SIGN UP" />
      </View>
      <ChangeScreenButton name="SIGN IN" changeTo="SignIn" />
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
    borderTopLeftRadius: 180,
    padding: 30,
  },
  inputCont: {
    marginVertical: 20,
  },
});
export default SignUp;
