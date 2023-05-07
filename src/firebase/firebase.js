import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import moment from 'moment';
import {isNil, isNull} from 'lodash';

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
    .where(...query)
    .get();
  return response.docs.map(doc => doc.data());
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
  debugger;
  const firebaseUser = await findExistingUser(user.uid);
  if (isNil(firebaseUser._data)) {
    await firestore().collection('users').doc(user.uid).set({
      id: user.uid,
      name: data.name,
      created_at: moment().unix(),
      email: data.email,
    });
  }
  return user;
};
