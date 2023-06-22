import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
  Alert,
  TouchableOpacity,
} from 'react-native';
import {GoBackButton} from '../components';
import {sendResetLink} from '../firebase/firebase';

function PassResetScreen({route, navigation}) {
  const [loading, setLoading] = useState(false);
  const email = route.params.email;

  const HandleResetPassword = async () => {
    if (email !== '') {
      try {
        setLoading(true);
        await sendResetLink(email);
        Alert.alert(
          'Success',
          'Reset code has been sent to your email address.',
          [
            {
              text: 'OK',
              onPress: () => navigation.navigate('SignInStack'),
            },
          ],
        );
      } catch (error) {
        console.error('Error sending reset code:', error);
        if (error.code === 'auth/user-not-found') {
          Alert.alert(
            'Email Not Found',
            'The email address does not exist. Please check your email and try again.',
          );
        } else {
          Alert.alert(
            'Error',
            'Failed to send reset code. Please try again later.',
          );
        }
      } finally {
        setLoading(false);
      }
    } else {
      Alert.alert('Email should not be empty');
    }
  };

  return (
    <View style={styles.container}>
      <GoBackButton navigation={navigation} />
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <>
          <View style={styles.innerCont}>
            <View style={styles.title}>
              <Text style={styles.textForgetPass}>Check Inbox</Text>
              <Text style={styles.textForgetPassEmail}>
                Reset password Link will be send to this email
              </Text>
            </View>
            <Text>{email}</Text>
            <View style={styles.buttonView}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('ForgetPassScreen')}>
                <Text style={styles.buttonText}>Change Email</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={HandleResetPassword}>
                <Text style={styles.buttonText}>Done</Text>
              </TouchableOpacity>
            </View>
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
  innerCont: {
    justifyContent: 'center',
    height: '90%',
  },
  inputText: {
    color: '#000',
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    fontSize: 15,
  },
  title: {
    justifyContent: 'center',
    marginBottom: 20,
  },
  textForgetPass: {
    fontFamily: 'Montserrat',
    color: '#000',
    fontWeight: 'bold',
    fontSize: 24,
  },
  textForgetPassEmail: {
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    color: '#808080',
    fontSize: 13,
  },
  buttonView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#3DA7AE',
    height: 50,
    width: '49%',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: 'Montserrat',
  },
});
export default PassResetScreen;
