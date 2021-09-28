import React from 'react';
import {View, Text, Image} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

function SocialMedia() {
  return (
    <View style={{alignSelf: 'center', width: '60%', margin: 15}}>
      <Text
        style={{
          alignSelf: 'center',
          fontWeight: 'bold',
          color: '#0b8647',
          paddingBottom: 10,
        }}>
        For more Information, Contact Garble
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          width: '100%',
        }}>
        <FontAwesome name="phone" color="green" size={22} />
        <FontAwesome name="whatsapp" color="#22D366" size={22} />
        <FontAwesome name="facebook" color="#3b5998" size={22} />
        <Image
          source={require('../../assets/twitter-2.png')}
          style={{width: 22, height: 22}}
        />
        <Image
          source={require('../../assets/instagram.png')}
          style={{width: 22, height: 22}}
        />
      </View>
    </View>
  );
}

export default SocialMedia;
