import {React, useCallback, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import FavoriteIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {GoBackButton, ProfileInformation} from '../components';
import {useFocusEffect} from '@react-navigation/native';
import {fetchDocumentById} from '../firebase/firebase';

export default function DetailsScreen({route, navigation}) {
  const item = route.params.item;
  const [uploader, setUploader] = useState('');
  const [isFavorite, setIsFavorite] = useState(false);

  const handleWishlistToggle = async () => {
    try {
      const wishlistItems = await AsyncStorage.getItem('wishlist');
      const parsedWishlistItems = JSON.parse(wishlistItems) || [];

      if (isFavorite) {
        // Remove item from wishlist
        const updatedWishlist = parsedWishlistItems.filter(
          wishlistItem => wishlistItem !== item.id,
        );
        await AsyncStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
      } else {
        // Add item to wishlist
        const updatedWishlist = [...parsedWishlistItems, item.id];
        await AsyncStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
      }

      setIsFavorite(!isFavorite);
    } catch (error) {
      console.log('Error toggling wishlist:', error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      const checkIsFavorite = async () => {
        try {
          const wishlistItems = await AsyncStorage.getItem('wishlist');
          const parsedWishlistItems = wishlistItems
            ? JSON.parse(wishlistItems)
            : [];

          const filteredWishlistItems = parsedWishlistItems.filter(
            wishlistItem => wishlistItem !== null,
          );

          const isInWishlist = filteredWishlistItems.some(
            wishlistItem => wishlistItem === item.id,
          );
          setIsFavorite(isInWishlist);
        } catch (error) {
          console.log('Error checking wishlist:', error);
        }
      };
      const fetchData = async () => {
        try {
          if (item && item.user_id) {
            let response = await fetchDocumentById('users', item.user_id);
            setUploader(response);
          }
        } catch (error) {
          console.log('Error fetching listing uploader:', error);
        }
      };
      checkIsFavorite();
      fetchData();
    }, [item]),
  );

  return (
    <View style={Styles.container}>
      <ScrollView style={Styles.scrollViewContent}>
        <SafeAreaView>
          <View style={Styles.pictureView}>
            <View style={Styles.topView}>
              <GoBackButton navigation={navigation} />
              <View style={Styles.topButtonView}>
                <TouchableOpacity
                  style={Styles.favoriteIconViewStyle}
                  onPress={handleWishlistToggle}>
                  <FavoriteIcon
                    name={isFavorite ? 'cards-heart' : 'cards-heart-outline'}
                    size={20}
                    color={'red'}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <Image
              style={Styles.pictureStyle}
              source={{uri: item.imageUrl}}
              resizeMode="cover"
            />
            <View style={Styles.details}>
              <Text style={Styles.title}>{item.name}</Text>
              <Text style={Styles.informationText}>
                Property Type:{'\n'}
                <Text style={Styles.innerText}>{item.propertyType}</Text>
              </Text>
              <Text style={Styles.informationText}>
                Address:{'\n'}
                <Text style={Styles.innerText}>{item.address}</Text>
              </Text>
              <Text style={Styles.informationText}>
                Amenities:{'\n'}
                <Text style={Styles.innerText}>
                  {item.facilities[0]}
                  {'\n'}
                  {item.facilities[1]}
                  {'\n'}
                  {item.facilities[2]}
                  {'\n'}
                  {item.facilities[3]}
                </Text>
              </Text>
              <Text style={Styles.informationText}>
                Details:{'\n'}
                <Text style={Styles.innerText}>{item.description}</Text>
              </Text>
              <Text style={Styles.informationText}>
                Bathrooms:
                <Text style={Styles.innerText}>{item.bathrooms}</Text>
              </Text>
              <Text style={Styles.informationText}>
                Bedrooms:
                <Text style={Styles.innerText}>{item.bedrooms}</Text>
              </Text>
              <Text style={Styles.informationText}>
                Beds:
                <Text style={Styles.innerText}>{item.beds}</Text>
              </Text>
            </View>
          </View>
          <View style={Styles.hostView}>
            <Text style={Styles.title}>Meet Your Host</Text>
            <View style={Styles.hostInnerView}>
              <View style={Styles.hostImageView}>
                <Image
                  style={Styles.hostImage}
                  source={{uri: uploader.photoUrl}}
                  resizeMode="cover"
                />
              </View>
              <View style={Styles.userNameView}>
                <Text style={Styles.title}>{uploader.firstName}</Text>
                <Text style={Styles.title}>{uploader.lastName}</Text>
              </View>
            </View>
            <View style={Styles.uploaderInfo}>
              <ProfileInformation
                title={'Email'}
                information={uploader.email}
              />
              <ProfileInformation
                title={'About'}
                information={uploader.about}
              />
              <ProfileInformation
                title={'Date of birth'}
                information={uploader.dob}
              />
              <ProfileInformation
                title={'Contact'}
                information={uploader.contact}
              />
              <ProfileInformation
                title={'Address'}
                information={uploader.address}
              />
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
      <View style={Styles.rentButtonView}>
        <Text style={Styles.priceText}>
          ${item.price}
          <Text style={Styles.priceTextPerDay}> /day</Text>
        </Text>
        <TouchableOpacity
          style={Styles.rentButton}
          onPress={() =>
            navigation.navigate('Booking', {item: item, uploader: uploader})
          }>
          <Text style={Styles.rentButtonText}>Reserve Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingBottom: 90,
  },
  pictureView: {
    height: 700,
    alignItems: 'center',
  },
  pictureStyle: {
    borderRadius: 20,
    height: 400,
    width: '100%',
  },
  topView: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    position: 'absolute',
    width: '90%',
    top: 15,
    zIndex: 1,
  },
  topButtonView: {
    borderWidth: 1,
    borderRadius: 15,
    backgroundColor: '#ffff',
    borderColor: '#fff',
    height: 28,
    width: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },
  details: {
    backgroundColor: '#F5FBFB',
    padding: 20,
    alignSelf: 'center',
    width: '90%',
    height: 530,
    borderRadius: 20,
    bottom: 230,
  },
  title: {
    fontFamily: 'Montserrat',
    fontWeight: '600',
    fontSize: 23,
    color: '#000',
    marginLeft: 10,
  },
  informationText: {
    fontFamily: 'Montserrat',
    fontWeight: '500',
    fontSize: 17,
    marginBottom: 10,
    color: '#000',
  },
  innerTextView: {
    marginLeft: 10,
  },
  innerText: {
    fontSize: 15,
    right: 0,
    color: '#707373',
  },
  rentButtonView: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 80,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#F5FBFB',
  },
  rentButton: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: 150,
    backgroundColor: '#3DA7AE',
    borderRadius: 20,
  },
  rentButtonText: {
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
  },
  priceText: {
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    fontSize: 25,
    color: '#3DA7AE',
  },
  priceTextPerDay: {
    fontFamily: 'Montserrat',
    fontWeight: '300',
    fontSize: 13,
    color: '#000',
  },
  hostView: {
    width: '100%',
    backgroundColor: '#F5FBFB',
    borderColor: '#3DA7AE',
    borderRadius: 10,
    padding: 20,
    marginTop: 20,
    marginBottom: 80,
    alignSelf: 'center',
  },
  hostInnerView: {
    alignSelf: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  hostImageView: {
    height: 250,
    width: 250,
    borderRadius: 150,
    marginBottom: 10,
  },
  hostImage: {
    height: 250,
    width: 250,
    borderRadius: 150,
  },
  userNameView: {
    flexDirection: 'row',
  },
  uploaderInfo: {
    width: '100%',
  },
  favoriteIconViewStyle: {
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
