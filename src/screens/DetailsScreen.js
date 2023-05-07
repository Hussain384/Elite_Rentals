import {React} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import Picture from '../utilz/images/OnbordingPicture.png';
import BackIcon from 'react-native-vector-icons/Ionicons';
import FavouriteIcon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function DetailsScreen({route, navigation}) {
  const item = route.params.item;
  return (
    <View style={Styles.container}>
      <View style={Styles.pictureView}>
        <View style={Styles.topView}>
          <View style={Styles.topButtonView}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <BackIcon name="chevron-back" size={25} color="black" />
            </TouchableOpacity>
          </View>
          <View style={Styles.topButtonView}>
            <TouchableOpacity style={Styles.favouriteIconViewStyle}>
              <FavouriteIcon
                name="cards-heart-outline"
                size={20}
                color={'black'}
              />
            </TouchableOpacity>
          </View>
        </View>
        <Image style={Styles.pictureStyle} source={{uri: item.imageUrl}} />

        <View style={Styles.details}>
          <Text style={{}}>{item.name}</Text>
          <Text style={{}}>{item.address}</Text>
          <Text style={{}}>{item.description}</Text>
          {/* <Text style={{}}>{item.facilities}</Text> */}
          <Text style={{}}>{item.price}</Text>
          <Text style={{}}>{item.bathrooms}</Text>
          <Text style={{}}>{item.bedrooms}</Text>
          <Text style={{}}>{item.beds}</Text>
          {/* <Text style={{}}>{item.propertyType}</Text> */}
        </View>
      </View>
      <View style={Styles.rentButtonView}>
        <Text style={Styles.priceText}>
          ${item.price}
          <Text style={Styles.priceTextPerDay}> /day</Text>
        </Text>
        <TouchableOpacity style={Styles.rentButton}>
          <Text style={Styles.rentButtonText}>Rent Now</Text>
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
  pictureView: {
    flex: 0.56,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pictureStyle: {
    borderRadius: 20,
    position: 'absolute',
    height: '100%',
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
    height: 450,
    borderRadius: 20,
    flex: 0.46,
    position: 'absolute',
    bottom: -315,
    zIndex: 1,
  },
  rentButtonView: {
    height: 100,
    width: '100%',
    bottom: -315,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  rentButton: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: 130,
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
});
