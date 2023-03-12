import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Alert} from 'react-native';
import {InputField, SubmitButton} from '../components';
import BackIcon from 'react-native-vector-icons/Ionicons';
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
          Alert.alert('User account created Successfully');
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
      setName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.backButtonView}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <BackIcon name="chevron-back" size={30} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.title}>
        <Text style={styles.textSignIn}>Sign up</Text>
        <Text style={styles.textWelcome}>Welcome</Text>
      </View>
      <View style={styles.inputCont}>
        <InputField type="Name" state={name} setState={setName} />
        <InputField type="Email" state={email} setState={setEmail} />
        <InputField type="Password" state={password} setState={setPassword} />
        <InputField
          type="Confirm Password"
          state={confirmPassword}
          setState={setConfirmPassword}
        />

        <SubmitButton type="SIGN UP" onPress={CreateAccount} />
      </View>
      <View style={styles.changeScreenView}>
        <Text style={styles.changeScreenText}>
          Already have an account?
          <Text
            style={styles.signUpLink}
            onPress={() => navigation.navigate('SignIn')}>
            Sign in
          </Text>
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
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
export default SignUp;
