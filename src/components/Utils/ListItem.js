import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableNativeFeedback,
} from 'react-native';
import {date4} from '../Utils/DateFormat';
import {withNavigation} from 'react-navigation';

import {CurrencyFormat} from '../Utils/CurrencyFormat';
const ListItem = ({item, navigation, index}) => (
  <TouchableNativeFeedback
    onPress={() => navigation.navigate('DetailsCard', item)}>
    <View style={styles.cardContainer}>
      <View style={styles.captionContainer}>
        <Text style={styles.captionText}>{index + 1}</Text>
      </View>
      <View style={styles.cardMain}>
        <View style={styles.cardBody}>
          <View style={styles.subInfos}>
            <Text style={styles.subText1}>Address:</Text>
            <Text>{item.serviceAddress}</Text>
          </View>
          <View style={styles.subInfos}>
            <Text style={styles.subText1}>Amount Paid:</Text>

            <Text>
              {'\u20A6'}{' '}
              {CurrencyFormat(item.subtotal ? item.subtotal : item.amount)}
            </Text>
          </View>
          <View style={styles.subInfos}>
            <Text style={styles.subText1}>Date:</Text>
            <Text>{date4(item.selectedStartDate)}</Text>
          </View>
        </View>
      </View>
    </View>
  </TouchableNativeFeedback>
);

export default withNavigation(ListItem);
const styles = StyleSheet.create({
  cardContainer: {flex: 1, marginTop: 10, flexDirection: 'row'},
  captionContainer: {
    paddingTop: 7,
    paddingBottom: 7,
    backgroundColor: '#0b8647',
    width: '15%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  captionText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '700',
    color: 'white',
  },
  cardMain: {width: '85%'},
  cardBody: {
    padding: 10,
    borderWidth: 1,
    borderTopWidth: 0,
    shadowColor: '#bfbfbf',
    borderColor: '#bfbfbf',
  },
  subInfos: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  subText1: {fontSize: 15, fontWeight: '700', color: '#0b8647'},
});
