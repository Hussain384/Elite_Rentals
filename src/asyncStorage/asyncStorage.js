import AsyncStorage from '@react-native-async-storage/async-storage';
import {fetchDocumentById} from '../firebase/firebase';

const fetchWishlistItems = async () => {
  try {
    const wishlistItems = await AsyncStorage.getItem('wishlist');

    if (wishlistItems) {
      const wishlistItemIds = JSON.parse(wishlistItems);
      const wishlistItemsWithDocs = await Promise.all(
        wishlistItemIds.map(async itemId => {
          const item = await fetchDocumentById('listing', itemId);
          return item;
        }),
      );

      return wishlistItemsWithDocs.filter(Boolean);
    }

    return [];
  } catch (error) {
    console.log('Error fetching wishlist items:', error);
    return [];
  }
};

const handleWishlistToggle = async (isFavorite, item) => {
  // ...
};

export {fetchWishlistItems, handleWishlistToggle};
