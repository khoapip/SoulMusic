import React from 'react';
import {Text, TouchableOpacity, View, Dimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export const width_screen = Dimensions.get('window').width;

const BasicGenres = ['V-Pop', 'K-Pop', 'Pop', 'Rock'];

const Genre = () => {
  const navigation = useNavigation();
  let backgroundColor = '';

  return (
    <View
      style={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 20,
      }}>
      {BasicGenres.map((item, index) => {
        if (index === 0) {
          backgroundColor = '#666EF7';
        } else if (index === 1) {
          backgroundColor = '#F57A8E';
        } else if (index === 2) {
          backgroundColor = '#F7A602';
        } else {
          backgroundColor = '#41D5A8';
        }
        return (
          <TouchableOpacity
            key={item}
            style={{
              width: '42%',
              height: 87,
              marginHorizontal: 10,
              marginVertical: 10,
              backgroundColor: backgroundColor,
              borderRadius: 10,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={() => navigation.navigate('Playlist', item)}>
            <Text
              style={{
                fontSize: 28,
                fontFamily: 'Monoton-Regular',
                textShadowColor: 'rgba(0,0,0,0.25)',
                textShadowOffset: {width: 1, height: 4},
                textShadowRadius: 5,
                textTransform: 'uppercase',
              }}>
              {item}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
export default Genre;
