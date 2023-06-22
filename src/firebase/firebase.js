import firestore from '@react-native-firebase/firestore';
import messaging from '@react-native-firebase/messaging';
import auth from '@react-native-firebase/auth';
import moment from 'moment';
import {isNil} from 'lodash';
import {StackActions} from '@react-navigation/native';

export const insertIntoDocument = (
  collection,
  values,
  created_at = moment().unix(),
) => {
  const id = getNewUniqueId(collection);
  const user_id = getCurrentUserId();
  return firestore()
    .collection(collection)
    .doc(id)
    .set({
      id,
      user_id,
      created_at,
      ...values,
    });
};

export const updateDocument = async (collection, docId, values) => {
  await firestore()
    .collection(collection)
    .doc(docId)
    .update({
      ...values,
    });
};

export const fetchDocument = (collection, query) => {
  return firestore()
    .collection(collection)
    .where(...query)
    .get();
};

export const fetchCollectionByCondition = async (collection, query) => {
  let response = await firestore()
    .collection(collection)
    .where(query.field, query.operator, query.value)
    .get();
  return response.docs.map(doc => doc.data());
};

export const fetchCollectionByConditionWithMultiQuery = async (
  collection,
  queries,
) => {
  let query = firestore().collection(collection);

  queries.forEach(({field, operator, value}) => {
    query = query.where(field, operator, value);
  });

  const snapshot = await query.get();
  const response = [];
  snapshot.forEach(doc => {
    response.push(doc.data());
  });

  return response;
};

export const getNewUniqueId = collection =>
  firestore().collection(collection).doc().id;

export const getCurrentUserId = () => {
  try {
    return auth().currentUser.uid;
  } catch (error) {
    return null;
  }
};

export const fetchCollection = async collection => {
  let response = await firestore().collection(collection).get();
  return response.docs.map(doc => doc.data());
};

export const findExistingUser = async userId => {
  return await firestore().collection('users').doc(userId).get();
};

export const createNewUser = async (user, data) => {
  const token = getFCMToken();
  const firebaseUser = await findExistingUser(user.uid);
  if (isNil(firebaseUser._data)) {
    await firestore().collection('users').doc(user.uid).set({
      id: user.uid,
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      dob: data.dob,
      about: '',
      address: '',
      photoUrl: '',
      fcm_token: token,
      created_at: moment().unix(),
    });
  }
  return user;
};

export const fetchDocumentById = async (collectionName, documentId) => {
  try {
    const document = await firestore()
      .collection(collectionName)
      .doc(documentId)
      .get();
    return {id: document.id, ...document.data()};
  } catch (error) {
    console.log('Error fetching document: ', error);
    return null;
  }
};

export const signOut = async navigation => {
  try {
    await auth().signOut();
    navigation.dispatch(StackActions.replace('SignIn')); // navigate to SignIn screen
  } catch (error) {
    console.error(error);
  }
};

export const deleteDocument = async (collection, documentId) => {
  try {
    const documentRef = firestore().collection(collection).doc(documentId);
    await documentRef.delete();
    console.log('Document deleted successfully.');
  } catch (error) {
    console.error('Error deleting document:', error);
  }
};

// Function to get the FCM token
export const getFCMToken = async () => {
  try {
    const token = await messaging().getToken();
    return token;
  } catch (error) {
    console.log('Error retrieving FCM token:', error);
  }
};

export const createBookingRequest = async bookingData => {
  const bookingRequestCollection = firestore().collection('booking_request');

  try {
    const bookingRef = await bookingRequestCollection.add(bookingData);
    const bookingId = bookingRef.id;

    await bookingRef.update({id: bookingId});

    console.log('Booking request created with ID:', bookingId);
  } catch (error) {
    console.error('Error creating booking request:', error);
  }
};

export const sendResetLink = async email => {
  try {
    await auth().sendPasswordResetEmail(email);
    console.log('Reset Link sent successfully');
  } catch (error) {
    console.error('Error sending reset link:', error);
    throw error;
  }
};
