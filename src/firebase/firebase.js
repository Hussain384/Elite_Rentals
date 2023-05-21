import firestore from '@react-native-firebase/firestore';
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
      wishlist: [],
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

export const addToWishlist = async listingId => {
  const userId = getCurrentUserId();
  const userRef = firestore().collection('users').doc(userId);

  try {
    const userDoc = await userRef.get();
    let wishlist = userDoc.data().wishlist || [];
    if (wishlist.includes(listingId)) {
      wishlist = wishlist.filter(id => id !== listingId);
    } else {
      wishlist.push(listingId);
    }
    await userRef.update('wishlist', wishlist);
    console.log('Wishlist updated successfully.');
  } catch (error) {
    console.error('Error updating wishlist:', error);
  }
};

export const fetchWishlistItems = async () => {
  const userId = getCurrentUserId();
  const userRef = firestore().collection('users').doc(userId);

  try {
    const userDoc = await userRef.get();
    const wishlist = userDoc.data().wishlist || [];
    const wishlistItems = await Promise.all(
      wishlist.map(async id => {
        const listingDoc = await firestore()
          .collection('listing')
          .doc(id)
          .get();
        return listingDoc.data();
      }),
    );

    return wishlistItems;
  } catch (error) {
    console.error('Error fetching wishlist items:', error);
    return [];
  }
};
