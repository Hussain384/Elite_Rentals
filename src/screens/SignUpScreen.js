import React, {useState} from 'react';
import {StyleSheet, View, Alert} from 'react-native';
import {
  Greeting,
  InputFieldWithIcon,
  InputFormTitle,
  SubmitButton,
  ChangeScreenButton,
} from '../components';
import auth from '@react-native-firebase/auth';
import {isEmpty} from 'lodash';

function SignUp({navigation}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  function CheckValidity(valid) {
    if (isEmpty(name)) {
      Alert.alert('Error', 'Name cannot be empty');
      return false;
    } else if (isEmpty(email)) {
      Alert.alert('Error', 'Email cannot be empty');
      return false;
    } else if (isEmpty(password)) {
      Alert.alert('Error', 'password cannot be empty');
      return false;
    } else if (isEmpty(confirmPassword)) {
      Alert.alert('Error', 'confirm password cannot be empty');
      return false;
    } else if (password !== confirmPassword) {
      Alert.alert('Error', 'password and confirmPassword should be same');
      return false;
    } else {
      return true;
    }
  }

  const CreateAccount = () => {
    if (CheckValidity) {
      auth()
        .createUserWithEmailAndPassword(email, password)
        .then(response => {
          console.log('User account created!', response);
          navigation.goBack();
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            Alert.alert('Error', 'That email address is already in use!');
          }
          if (error.code === 'auth/weak-password') {
            Alert.alert(
              'Error',
              'The password should be atleast 6 charachters',
            );
          }
          if (error.code === 'auth/invalid-email') {
            Alert.alert('Error', 'That email address is invalid!');
          }
        });
    }
  };

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
            state={confirmPassword}
            setState={setConfirmPassword}
          />
        </View>
        <SubmitButton type="SIGN UP" onPress={CreateAccount} />
      </View>
      <ChangeScreenButton
        name="SIGN IN"
        changeTo="SignIn"
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
    borderTopLeftRadius: 180,
    padding: 30,
  },
  inputCont: {
    marginVertical: 20,
  },
});
export default SignUp;
