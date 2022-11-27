import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

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
      <Text style={styles.greeting}>Hello!</Text>
      <Text style={styles.info}>Register your self</Text>
      <View style={styles.signUpForm}>
        <Text style={styles.formTitle}>Signup</Text>
        <View style={styles.dashLine} />
        <View style={styles.outCont}>
          <View style={styles.inputCont}>
            {/* <IconEmail
              style={styles.iconStyle}
              name="mail"
              size={20}
              color="blue"
            /> */}
            <TextInput
              style={styles.input}
              placeholder="Email Address"
              value={email}
              onChangeText={setEmail}
              placeholderTextColor="#CDCDCD"
            />
          </View>
          <View style={styles.inputCont}>
            {/* <IconPassword
              style={styles.iconStyle}
              name="eye-off"
              size={20}
              color="blue"
            /> */}
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
            {/* <IconPassword
              style={styles.iconStyle}
              name="eye-off"
              size={20}
              color="blue"
            /> */}
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
    padding: 20,
  },
  outCont: {
    marginBottom: 20,
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
});

export default SignUp;
