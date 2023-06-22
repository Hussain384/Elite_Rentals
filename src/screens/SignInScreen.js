import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Alert,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import {InputField, SubmitButton} from '../components';
import auth from '@react-native-firebase/auth';
import {
  getCurrentUserId,
  getFCMToken,
  updateDocument,
} from '../firebase/firebase';
import ForgetPassScreen from './ForgetPassScreen';

function SignIn({navigation}) {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const LogInAccount = async () => {
    if (email === '') {
      Alert.alert('Please Enter Email');
    } else if (password === '') {
      Alert.alert('Please Enter Password');
    } else {
      setLoading(true);
      try {
        await auth().signInWithEmailAndPassword(email, password);
        const token = await getFCMToken();
        const user_id = getCurrentUserId();
        const value = {fcm_token: token};
        await updateDocument('users', user_id, value);
        navigation.navigate('Authenticated');
      } catch (error) {
        if (error.code === 'auth/email-already-in-use') {
          Alert.alert('Error! That email address is already in use!');
        } else if (error.code === 'auth/invalid-email') {
          Alert.alert('Error! That email address is invalid!');
        } else {
          Alert.alert('This email is not registered.');
        }
      }
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <>
          <View style={styles.title}>
            <Text style={styles.textSignIn}>Sign in</Text>
            <Text style={styles.textWelcome}>Welcome back</Text>
          </View>
          <View style={styles.inputCont}>
            <InputField type="Email" state={email} setState={setEmail} />
            <InputField
              type="Password"
              state={password}
              setState={setPassword}
            />
            <TouchableOpacity
              style={styles.forgetPassView}
              onPress={() => navigation.navigate(ForgetPassScreen)}>
              <Text style={styles.forgetPassText}>Forget Password? </Text>
            </TouchableOpacity>

            <SubmitButton type="SIGN IN" onPress={LogInAccount} />
          </View>
          <View style={styles.changeScreenView}>
            <Text style={styles.changeScreenText}>Don't have an account?</Text>
            <Text
              style={styles.signUpLink}
              onPress={() => navigation.navigate('SignUp')}>
              Sign up
            </Text>
          </View>
        </>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    height: '20%',
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
  forgetPassView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  forgetPassText: {
    fontFamily: 'Montserrat',
    fontWeight: '500',
    color: '#77C2C6',
  },
  changeScreenView: {
    height: '10%',
    alignItems: 'flex-end',
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
});
export default SignIn;
