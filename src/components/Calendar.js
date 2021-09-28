import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';


const Calendar = (props) => {
  const [endDate, setEndDate] = useState(null)
  const [visible1, setVisible1] = useState(false)
  const toggle1 = () => {
    setVisible1(!visible1)
  };
  const onDateChange = date => {
    // console.log(date, 'DDDD')
    // setEndDate(date)
    return props.selectedEndDate(date)
  }
  const endDate1 = endDate
    ? endDate.toString().slice(0, 16)
    : '';
  console.log(props, 'ffffffffff')
  return (
    <View style={styles.main}>
      <TouchableWithoutFeedback onPress={toggle1}>
        <View style={styles.bar}>
          <Image
            source={require('../assets/date.png')}
            style={{ width: 50, height: 50 }}
          />
          {endDate ? (
            <Text
              style={{
                fontSize: 18,
                color: 'grey',
                paddingLeft: 20,
              }}>
              {endDate}
            </Text>
          ) : (
              <Text
                style={{
                  fontSize: 18,
                  color: 'grey',
                  paddingLeft: 20,
                }}>
                Select Service End Date
              </Text>
            )}
        </View>
      </TouchableWithoutFeedback>
      {visible1 && (
        <View>
          <CalendarPicker
            onDateChange={onDateChange}
            minDate={new Date()}
            todayBackgroundColor="#0b8647"
          // selectedDayColor="#7300e6"
          // selectedDayTextColor="#FFFFFF"
          />
        </View>
      )}
    </View>
  );
}

export default Calendar;


const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
  },
  bar: {
    flexDirection: 'row',
    width: '80%',
    alignSelf: 'center',
    alignItems: 'center',
    padding: 5,
    borderRadius: 10,
    marginTop: 20,
    elevation: 1.3,
  },
});
