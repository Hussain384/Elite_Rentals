import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import IconEmail from 'react-native-vector-icons/Foundation';
import IconPassword from 'react-native-vector-icons/Ionicons';
import Greeting from '../components/Greeting';

function SignUp({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');

  function SubmitEnteredData() {
    console.log(
      'You tapped the button!',
      '>>Email:',
      {email},
      '>>Password:',
      {password},
      '>>Confirm Password:',
      {confirmPass},
    );
  }

  return (
    <View style={styles.container}>
      {/* <Text style={styles.greeting}>Hello!</Text>
      <Text style={styles.info}>Register your self</Text> */}
      <Greeting />
      <View style={styles.signUpForm}>
        <View style={styles.formTitleView}>
          <Text style={styles.formTitle}>Signup</Text>
          <View style={styles.dashLine} />
        </View>
        <View style={styles.outCont}>
          <View style={styles.inputCont}>
            <IconEmail
              style={styles.iconStyle}
              name="mail"
              size={20}
              color="blue"
            />
            <TextInput
              style={styles.input}
              placeholder="Email Address"
              value={email}
              onChangeText={setEmail}
              placeholderTextColor="#CDCDCD"
            />
          </View>
          <View style={styles.inputCont}>
            <IconPassword
              style={styles.iconStyle}
              name="eye-off"
              size={20}
              color="blue"
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              placeholderTextColor="#CDCDCD"
              secureTextEntry={true}
            />
          </View>

          <View style={styles.inputCont}>
            <IconPassword
              style={styles.iconStyle}
              name="eye-off"
              size={20}
              color="blue"
            />
            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              value={confirmPass}
              onChangeText={setConfirmPass}
              secureTextEntry={true}
              placeholderTextColor="#CDCDCD"
            />
          </View>
        </View>
        <TouchableOpacity
          style={styles.submitView}
          onPress={() => SubmitEnteredData()}>
          <Text style={styles.submitText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.signInButton}
        onPress={() => navigation.navigate('Home')}>
        <Text style={styles.signInButtonText}>SIGN IN</Text>
      </TouchableOpacity>
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
  //   greeting: {
  //     alignSelf: 'center',
  //     color: '#20ACF2',
  //     fontSize: 30,
  //     fontWeight: 'bold',
  //   },
  //   info: {
  //     alignSelf: 'center',
  //     color: '#20ACF2',
  //     marginBottom: 20,
  //   },

  formTitleView: {
    alignItems: 'flex-end',
  },
  formTitle: {
    color: '#000',
    fontSize: 30,
    fontWeight: '400',
  },
  dashLine: {
    height: 5,
    width: 93,
    backgroundColor: '#54CFEF',
    borderRadius: 5,
    marginVertical: 10,
  },
  signUpForm: {
    backgroundColor: '#fff',
    borderRadius: 50,
    borderTopLeftRadius: 200,
    padding: 15,
  },
  outCont: {
    marginBottom: 20,
    marginTop: 20,
  },
  inputCont: {
    marginTop: 20,
    marginBottom: 20,
    flexDirection: 'row',
    borderBottomWidth: 5,
    borderBottomColor: '#E6E6E6',
  },
  input: {
    width: '90%',
    height: '100%',
    color: '#000',
  },
  iconStyle: {
    alignSelf: 'center',
    width: '10%',
  },
  submitView: {
    backgroundColor: '#3BC8ED',
    height: '12%',
    width: '40%',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 92,
    bottom: -25,
  },
  submitText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '700',
  },
  forgetPassword: {
    color: '#90DFF4',
    fontSize: 11,
  },
  forgetPasswordView: {
    alignSelf: 'flex-end',
  },
  signInButtonText: {
    color: '#57D0EF',
    fontSize: 11,
    fontWeight: 'bold',
  },
  signInButton: {
    alignSelf: 'center',
    marginTop: 45,
  },
});

export default SignUp;
