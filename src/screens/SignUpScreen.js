import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Alert,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';
import {GoBackButton, InputField, SubmitButton} from '../components';
import auth from '@react-native-firebase/auth';
import {isEmpty} from 'lodash';
import {createNewUser} from '../firebase/firebase';

function SignUp({navigation}) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  function CheckValidity() {
    let validate = true;
    if (isEmpty(firstName)) {
      Alert.alert('Error', 'First Name cannot be empty');
      validate = false;
    } else if (isEmpty(lastName)) {
      Alert.alert('Error', 'Last Name cannot be empty');
      validate = false;
    } else if (isEmpty(email)) {
      Alert.alert('Error', 'Email cannot be empty');
      validate = false;
    } else if (isEmpty(dob)) {
      Alert.alert('Error', 'Date of birth cannot be empty');
      validate = false;
    } else if (isEmpty(password)) {
      Alert.alert('Error', 'password cannot be empty');
      validate = false;
    } else if (isEmpty(confirmPassword)) {
      Alert.alert('Error', 'confirm password cannot be empty');
      validate = false;
    } else if (password !== confirmPassword) {
      Alert.alert('Error', 'password and confirmPassword should be same');
      validate = false;
    }
    return validate;
  }

  const CreateAccount = async () => {
    try {
      if (CheckValidity()) {
        let response = await auth().createUserWithEmailAndPassword(
          email,
          password,
        );
        let data = {
          email,
          firstName,
          lastName,
          dob,
        };
        await createNewUser(response.user, data);
        Alert.alert('User account created Successfully');
        navigation.goBack();
      }
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        Alert.alert('Error', 'That email address is already in use!');
      }
      if (error.code === 'auth/weak-password') {
        Alert.alert('Error', 'The password should be at least 6 characters');
      }
      if (error.code === 'auth/invalid-email') {
        Alert.alert('Error', 'That email address is invalid!');
      }
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.keyboardAvoidingView}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View style={styles.container}>
        <GoBackButton navigation={navigation} />
        <View style={styles.title}>
          <Text style={styles.textSignIn}>Sign up</Text>
          <Text style={styles.textWelcome}>Welcome</Text>
        </View>
        <View style={styles.inputCont}>
          <View style={styles.nameViewStyle}>
            <InputField
              type="firstName"
              state={firstName}
              setState={setFirstName}
            />
            <InputField
              type="lastName"
              state={lastName}
              setState={setLastName}
            />
          </View>
          <InputField type="Email" state={email} setState={setEmail} />
          <InputField type="DOB" state={dob} setState={setDob} />
          <InputField type="Password" state={password} setState={setPassword} />
          <InputField
            type="Confirm Password"
            state={confirmPassword}
            setState={setConfirmPassword}
          />

          <SubmitButton type="SIGN UP" onPress={CreateAccount} />
        </View>
        <View style={styles.changeScreenView}>
          <Text style={styles.changeScreenText}>Already have an account?</Text>
          <Text
            style={styles.signUpLink}
            onPress={() => navigation.navigate('SignIn')}>
            Sign in
          </Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  keyboardAvoidingView: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    height: '15%',
    justifyContent: 'center',
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
    height: '70%',
  },
  changeScreenView: {
    height: '10%',
    alignItems: 'flex-end',
    alignContent: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  changeScreenText: {
    color: '#000',
    fontFamily: 'Montserrat',
    fontWeight: '500',
    fontSize: 14,
  },
  signUpLink: {
    color: '#3DA7AE',
    fontWeight: 'bold',
    marginLeft: 5,
  },
  nameViewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
export default SignUp;
