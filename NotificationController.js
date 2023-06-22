import {useEffect} from 'react';
import {Alert} from 'react-native';
import messaging from '@react-native-firebase/messaging';
import {FIRE_BASE_SERVICE_KEY} from './src/Constants';
import axios from 'axios';

export async function sendRemoteNotification(fcm, title, body = '', data = {}) {
  try {
    let {data: res} = await axios.post(
      'https://fcm.googleapis.com/fcm/send',
      {
        to: fcm,
        notification: {
          title,
          body,
        },
        data,
      },
      {
        headers: {
          Authorization: `key=${FIRE_BASE_SERVICE_KEY}`,
        },
      },
    );
    return Boolean(res.success);
  } catch (error) {
    console.log(error);
  }
}

async function requestUserPermission() {
  return new Promise((resolve, reject) => {
    messaging()
      .requestPermission()
      .then(authStatus => {
        const enabled =
          authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
          authStatus === messaging.AuthorizationStatus.PROVISIONAL;

        if (enabled) {
          resolve(true);
        } else {
          reject({denied: true, error: 'Notification Permission Denied'});
        }
      })
      .catch(error => {
        reject({denied: false, error});
      });
  });
}

export default function NotificationController() {
  useEffect(() => {
    // Used to display notification when app is in foreground
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      //   PushNotificationIos.addNotificationRequest({
      //     id: remoteMessage.messageId,
      //     body: remoteMessage.notification.body,
      //     title: remoteMessage.notification.title,
      //     userInfo: remoteMessage.data,
      //   });
      Alert.alert(
        remoteMessage.notification.title,
        remoteMessage.notification.body,
      );
    });

    messaging().setBackgroundMessageHandler(async remoteMessage => {
      console.log('Message handled in the background!', remoteMessage);

      Alert.alert(
        remoteMessage.notification.title,
        remoteMessage.notification.body,
      );
    });

    try {
      requestUserPermission();
    } catch (error) {
      console.log(error);
    }
    return unsubscribe;
  }, []);
}
