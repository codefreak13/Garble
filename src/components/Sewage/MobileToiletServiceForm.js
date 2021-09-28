import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableNativeFeedback,
  KeyboardAvoidingView,
  Picker,
  Image,
} from 'react-native';
import Root from '../Utils/Root';
import { Divider } from 'react-native-elements';
import ServiceBar from '../ServiceBar';
import { rates } from './rates';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

class ServiceForm extends React.Component {
  static navigationOptions = { header: null };
  state = {
    selectedStartDate: null,
    visible2: false,
    single_economy_class: 0,
    single_economy_class_total: 0,
    double_economy_class: 0,
    single_vip_class: 0,
    double_vip_class: 0,
    subtotal: 0,
    single_economy_service_duration: 1,
    double_economy_service_duration: 1,
    single_vip_service_duration: 1,
    double_vip_service_duration: 1,
    single_economy_class_value: 0,
    double_economy_class_value: 0,
    single_vip_class_value: 0,
    double_vip_class_value: 0,
    address: null
  };

  toggle1 = () => {
    this.setState(prevState => {
      return {
        visible1: !prevState.visible1,
      };
    });
  };

  toggle2 = () => {
    this.setState(prevState => {
      return {
        visible2: !prevState.visible2,
      };
    });
  };
  handleDateChange = (date) => {
    this.setState({ selectedStartDate: date })
  }

  handleEndDateChange = (date) => {
    this.setState({ selectedEndDate: date })
  }

  handleAddressChange = (data) => {
    this.setState({ address:data})
  }

  render() {
    const { single_economy_class_rate, double_economy_class_rate, single_vip_class_rate, double_vip_class_rate, service_duration, single_economy_class_total } = rates;
    const {
      single_economy_class,
      double_economy_class,
      single_vip_class,
      double_vip_class,
      selectedStartDate,
      address
    } = this.state;
    return (
      <Root navigation={this.props.navigation}>
        <KeyboardAvoidingView style={{ flex: 1 }}>
          <View style={styles.headerMain}>
          <TouchableNativeFeedback
            onPress={() => this.props.navigation.goBack()}
          >
            <View style={styles.goBack}>
              <FontAwesome name="arrow-left" size={20} color="#0b8647" />
            </View>
          </TouchableNativeFeedback>
            <View style={styles.header}>
              <View style={{ flexDirection: 'column' }}>
                <Text style={{ fontSize: 18, color: 'white' }}>
                  Mobile Toilet Rentals
                </Text>
                <Text style={styles.headerTitle}>Quotation Form</Text>
              </View>
              <Text style={styles.quote}>
                {this.state.subtotal ? '\u20A6' + this.state.subtotal : (
                  <Text style={{ color: 'grey' }}>SUBTOTAL</Text>
                )}
              </Text>
            </View>
          </View>
          <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps={'handled'}>
            <View style={styles.main}>
              <View style={styles.body}>
                <View style={{ width: '95%', alignSelf: 'center' }}>
                  <View
                    style={{ backgroundColor: '#0b8647', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text
                      style={{
                        alignSelf: 'center',
                        color: 'white',
                        fontSize: 22,
                        padding: 10,
                      }}>
                      Toilet Type
                    </Text>
                    <Text
                      style={{
                        alignSelf: 'center',
                        color: 'white',
                        fontSize: 22,
                        padding: 10,
                        width: '28%'
                      }}>
                      Quantity
                    </Text>
                    <Text
                      style={{
                        alignSelf: 'center',
                        color: 'white',
                        fontSize: 22,
                        padding: 10,
                        width: '37%'
                      }}>
                      Duration
                    </Text>
                  </View>
                  <View
                    style={{
                      backgroundColor: '#edefee',
                      padding: 10,
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}>
                      <Text style={{ fontSize: 16, color: '#353535', width: '35%' }}>
                        Single Economy
                      </Text>
                      <View
                        style={{
                          marginTop: 10,
                          backgroundColor: 'white',
                          borderColor: 'white',
                          width: '27%',
                        }}>
                        <Picker
                          selectedValue={this.state.single_economy_class}
                          style={{
                            height: 50,
                            width: '100%',
                          }}
                          onValueChange={(itemValue, itemIndex) =>
                            this.setState(prevState => {
                              return {
                                subtotal:
                                  prevState.subtotal -
                                  Number(prevState.single_economy_class * single_economy_class_rate * prevState.single_economy_service_duration) +
                                  Number(itemValue * single_economy_class_rate * this.state.single_economy_service_duration),
                                single_economy_class_value: Number(itemValue * single_economy_class_rate) * prevState.single_economy_service_duration,
                                single_economy_class: itemValue,
                              };
                            })
                          }>
                          <Picker.Item
                            color="grey"
                            label="0"
                            value="0"
                          />
                          <Picker.Item
                            color="grey"
                            label="1"
                            value="1"
                          />
                          <Picker.Item
                            color="grey"
                            label="2"
                            value="2"
                          />
                          <Picker.Item
                            color="grey"
                            label="3"
                            value="3"
                          />
                          <Picker.Item
                            color="grey"
                            label="4"
                            value="4"
                          />
                          <Picker.Item
                            color="grey"
                            label="5"
                            value="5"
                          />
                          <Picker.Item
                            color="grey"
                            label="6"
                            value="6"
                          />
                          <Picker.Item
                            color="grey"
                            label="7"
                            value="7"
                          />
                          <Picker.Item
                            color="grey"
                            label="8"
                            value="8"
                          />
                          <Picker.Item
                            color="grey"
                            label="9"
                            value="9"
                          />
                          <Picker.Item
                            color="grey"
                            label="10"
                            value="10"
                          />
                          <Picker.Item
                            color="grey"
                            label="11"
                            value="11"
                          />
                          <Picker.Item
                            color="grey"
                            label="12"
                            value="12"
                          />
                        </Picker>
                      </View>
                      <View
                        style={{
                          marginTop: 10,
                          backgroundColor: 'white',
                          borderColor: 'white',
                          width: '35%',
                        }}>
                        <Picker
                          selectedValue={this.state.single_economy_service_duration}
                          style={{
                            height: 50,
                            width: '100%',
                            borderWidth: 0.5,
                            borderStyle: 'solid',
                          }}
                          onValueChange={(itemValue, itemIndex) =>
                            this.setState(prevState => {
                              return {
                                subtotal:
                                  prevState.subtotal -
                                  this.state.single_economy_class_value +
                                  Number(this.state.single_economy_class * itemValue * single_economy_class_rate),
                                single_economy_service_duration: itemValue,
                                single_economy_class_value: Number(prevState.single_economy_class * itemValue * single_economy_class_rate)
                              };
                            })
                          }>
                          <Picker.Item
                            color="grey"
                            label="0"
                            value='0'
                          />
                          <Picker.Item
                            color="grey"
                            label="1 day"
                            value="1"
                          />
                          <Picker.Item
                            color="grey"
                            label="2 days"
                            value="2"
                          />
                          <Picker.Item color="grey" label="3 days" value="3" />
                          <Picker.Item color="grey" label="4 days" value="4" />
                          <Picker.Item color="grey" label="5 days" value="5" />
                          <Picker.Item color="grey" label="6 days" value="6" />
                          <Picker.Item color="grey" label="7 days" value="7" />
                          <Picker.Item color="grey" label="8 days" value="8" />
                          <Picker.Item color="grey" label="9 days" value="9" />
                          <Picker.Item
                            color="grey"
                            label="10 days"
                            value="10"
                          />
                          <Picker.Item
                            color="grey"
                            label="11 days"
                            value="11"
                          />
                          <Picker.Item
                            color="grey"
                            label="12 days"
                            value="12"
                          />
                          <Picker.Item
                            color="grey"
                            label="13 days"
                            value="13"
                          />
                          <Picker.Item
                            color="grey"
                            label="14 days"
                            value="14"
                          />
                        </Picker>
                      </View>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}>
                      <Text style={{ fontSize: 16, color: '#353535', width: '35%' }}>
                        Double Economy
                      </Text>
                      <View
                        style={{
                          marginTop: 10,
                          backgroundColor: 'white',
                          borderColor: 'white',
                          width: '27%',
                          paddingLeft: 5,
                        }}>
                        <Picker
                          selectedValue={this.state.double_economy_class}
                          style={{
                            height: 50,
                            width: '100%',
                          }}
                          onValueChange={(itemValue, itemIndex) =>
                            this.setState(prevState => {
                              return {
                                subtotal:
                                  prevState.subtotal -
                                  Number(prevState.double_economy_class * double_economy_class_rate * prevState.double_economy_service_duration) +
                                  Number(itemValue * double_economy_class_rate * this.state.double_economy_service_duration),
                                double_economy_class_value: Number(itemValue * double_economy_class_rate) * prevState.double_economy_service_duration,
                                double_economy_class: itemValue,
                              };
                            })
                          }>
                          <Picker.Item
                            color="grey"
                            label="0"
                            value="0"
                          />
                          <Picker.Item
                            color="grey"
                            label="1"
                            value="1"
                          />
                          <Picker.Item
                            color="grey"
                            label="2"
                            value="2"
                          />
                          <Picker.Item
                            color="grey"
                            label="3"
                            value="3"
                          />
                          <Picker.Item
                            color="grey"
                            label="4"
                            value="4"
                          />
                          <Picker.Item
                            color="grey"
                            label="5"
                            value="5"
                          />
                          <Picker.Item
                            color="grey"
                            label="6"
                            value="6"
                          />
                          <Picker.Item
                            color="grey"
                            label="7"
                            value="7"
                          />
                          <Picker.Item
                            color="grey"
                            label="8"
                            value="8"
                          />
                          <Picker.Item
                            color="grey"
                            label="9"
                            value="9"
                          />
                          <Picker.Item
                            color="grey"
                            label="10"
                            value="10"
                          />
                          <Picker.Item
                            color="grey"
                            label="11"
                            value="11"
                          />
                          <Picker.Item
                            color="grey"
                            label="12"
                            value="12"
                          />
                        </Picker>
                      </View>
                      <View
                        style={{
                          marginTop: 10,
                          backgroundColor: 'white',
                          borderColor: 'white',
                          width: '35%',
                        }}>
                        <Picker
                          selectedValue={this.state.double_economy_service_duration}
                          style={{
                            height: 50,
                            width: '100%',
                            borderWidth: 0.5,
                            borderStyle: 'solid',
                          }}
                          onValueChange={(itemValue, itemIndex) =>
                            this.setState(prevState => {
                              return {
                                subtotal:
                                  prevState.subtotal -
                                  this.state.double_economy_class_value +
                                  Number(this.state.double_economy_class * itemValue * double_economy_class_rate),
                                double_economy_service_duration: itemValue,
                                double_economy_class_value: Number(prevState.double_economy_class * itemValue * double_economy_class_rate)
                              };
                            })
                          }>
                          <Picker.Item
                            color="grey"
                            label="0"
                            value="0"
                          />
                          <Picker.Item
                            color="grey"
                            label="1 day"
                            value="1"
                          />
                          <Picker.Item
                            color="grey"
                            label="2 days"
                            value="2"
                          />
                          <Picker.Item color="grey" label="3 days" value="3" />
                          <Picker.Item color="grey" label="4 days" value="4" />
                          <Picker.Item color="grey" label="5 days" value="5" />
                          <Picker.Item color="grey" label="6 days" value="6" />
                          <Picker.Item color="grey" label="7 days" value="7" />
                          <Picker.Item color="grey" label="8 days" value="8" />
                          <Picker.Item color="grey" label="9 days" value="9" />
                          <Picker.Item
                            color="grey"
                            label="10 days"
                            value="10"
                          />
                          <Picker.Item
                            color="grey"
                            label="11 days"
                            value="11"
                          />
                          <Picker.Item
                            color="grey"
                            label="12 days"
                            value="12"
                          />
                          <Picker.Item
                            color="grey"
                            label="13 days"
                            value="13"
                          />
                          <Picker.Item
                            color="grey"
                            label="14 days"
                            value="14"
                          />
                        </Picker>
                      </View>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}>
                      <Text style={{ fontSize: 16, color: '#353535', width: '35%' }}>
                        Single VIP
                      </Text>
                      <View
                        style={{
                          marginTop: 10,
                          backgroundColor: 'white',
                          borderColor: 'white',
                          width: '27%',
                          paddingLeft: 5,
                        }}>
                        <Picker
                          selectedValue={this.state.single_vip_class}
                          style={{
                            height: 50,
                            width: '100%',
                          }}
                          onValueChange={(itemValue, itemIndex) =>
                            this.setState(prevState => {
                              return {
                                subtotal:
                                  prevState.subtotal -
                                  Number(prevState.single_vip_class * single_vip_class_rate * prevState.single_vip_service_duration) +
                                  Number(itemValue * single_vip_class_rate * this.state.single_vip_service_duration),
                                single_vip_class_value: Number(itemValue * single_vip_class_rate) * prevState.single_vip_service_duration,
                                single_vip_class: itemValue,
                              };
                            })
                          }>
                          <Picker.Item
                            color="grey"
                            label="0"
                            value="0"
                          />
                          <Picker.Item
                            color="grey"
                            label="1"
                            value="1"
                          />
                          <Picker.Item
                            color="grey"
                            label="2"
                            value="2"
                          />
                          <Picker.Item
                            color="grey"
                            label="3"
                            value="3"
                          />
                          <Picker.Item
                            color="grey"
                            label="4"
                            value="4"
                          />
                          <Picker.Item
                            color="grey"
                            label="5"
                            value="5"
                          />
                          <Picker.Item
                            color="grey"
                            label="6"
                            value="6"
                          />
                          <Picker.Item
                            color="grey"
                            label="7"
                            value="7"
                          />
                          <Picker.Item
                            color="grey"
                            label="8"
                            value="8"
                          />
                          <Picker.Item
                            color="grey"
                            label="9"
                            value="9"
                          />
                          <Picker.Item
                            color="grey"
                            label="10"
                            value="10"
                          />
                          <Picker.Item
                            color="grey"
                            label="11"
                            value="11"
                          />
                          <Picker.Item
                            color="grey"
                            label="12"
                            value="12"
                          />
                        </Picker>
                      </View>
                      <View
                        style={{
                          marginTop: 10,
                          backgroundColor: 'white',
                          borderColor: 'white',
                          width: '35%',
                        }}>
                        <Picker
                          selectedValue={this.state.single_vip_service_duration}
                          style={{
                            height: 50,
                            width: '100%',
                            borderWidth: 0.5,
                            borderStyle: 'solid',
                          }}
                          onValueChange={(itemValue, itemIndex) =>
                            this.setState(prevState => {
                              return {
                                subtotal:
                                  prevState.subtotal -
                                  this.state.single_vip_class_value +
                                  Number(this.state.single_vip_class * itemValue * single_vip_class_rate),
                                single_vip_service_duration: itemValue,
                                single_vip_class_value: Number(prevState.single_vip_class * itemValue * single_vip_class_rate)
                              };
                            })
                          }>
                          <Picker.Item
                            color="grey"
                            label="0"
                            value="0"
                          />
                          <Picker.Item
                            color="grey"
                            label="1 day"
                            value="1"
                          />
                          <Picker.Item
                            color="grey"
                            label="2 days"
                            value="2"
                          />
                          <Picker.Item color="grey" label="3 days" value="3" />
                          <Picker.Item color="grey" label="4 days" value="4" />
                          <Picker.Item color="grey" label="5 days" value="5" />
                          <Picker.Item color="grey" label="6 days" value="6" />
                          <Picker.Item color="grey" label="7 days" value="7" />
                          <Picker.Item color="grey" label="8 days" value="8" />
                          <Picker.Item color="grey" label="9 days" value="9" />
                          <Picker.Item
                            color="grey"
                            label="10 days"
                            value="10"
                          />
                          <Picker.Item
                            color="grey"
                            label="11 days"
                            value="11"
                          />
                          <Picker.Item
                            color="grey"
                            label="12 days"
                            value="12"
                          />
                          <Picker.Item
                            color="grey"
                            label="13 days"
                            value="13"
                          />
                          <Picker.Item
                            color="grey"
                            label="14 days"
                            value="14"
                          />
                        </Picker>
                      </View>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}>
                      <Text style={{ fontSize: 16, color: '#353535', width: '35%' }}>
                        Double VIP
                      </Text>
                      <View
                        style={{
                          marginTop: 10,
                          backgroundColor: 'white',
                          borderColor: 'white',
                          width: '27%',
                          paddingLeft: 5,
                        }}>
                        <Picker
                          selectedValue={this.state.double_vip_class}
                          style={{
                            height: 50,
                            width: '100%',
                          }}
                          onValueChange={(itemValue, itemIndex) =>
                            this.setState(prevState => {
                              return {
                                subtotal:
                                  prevState.subtotal -
                                  Number(prevState.double_vip_class * double_vip_class_rate * prevState.double_vip_service_duration) +
                                  Number(itemValue * double_vip_class_rate * this.state.double_vip_service_duration),
                                double_vip_class_value: Number(itemValue * double_vip_class_rate) * prevState.double_vip_service_duration,
                                double_vip_class: itemValue,
                              };
                            })
                          }>
                          <Picker.Item
                            color="grey"
                            label="0"
                            value="0"
                          />
                          <Picker.Item
                            color="grey"
                            label="1"
                            value="1"
                          />
                          <Picker.Item
                            color="grey"
                            label="2"
                            value="2"
                          />
                          <Picker.Item
                            color="grey"
                            label="3"
                            value="3"
                          />
                          <Picker.Item
                            color="grey"
                            label="4"
                            value="4"
                          />
                          <Picker.Item
                            color="grey"
                            label="5"
                            value="5"
                          />
                          <Picker.Item
                            color="grey"
                            label="6"
                            value="6"
                          />
                          <Picker.Item
                            color="grey"
                            label="7"
                            value="7"
                          />
                          <Picker.Item
                            color="grey"
                            label="8"
                            value="8"
                          />
                          <Picker.Item
                            color="grey"
                            label="9"
                            value="9"
                          />
                          <Picker.Item
                            color="grey"
                            label="10"
                            value="10"
                          />
                          <Picker.Item
                            color="grey"
                            label="11"
                            value="11"
                          />
                          <Picker.Item
                            color="grey"
                            label="12"
                            value="12"
                          />
                        </Picker>
                      </View>
                      <View
                        style={{
                          marginTop: 10,
                          backgroundColor: 'white',
                          borderColor: 'white',
                          width: '35%',
                        }}>
                        <Picker
                          selectedValue={this.state.double_vip_service_duration}
                          style={{
                            height: 50,
                            width: '100%',
                            borderWidth: 0.5,
                            borderStyle: 'solid',
                          }}
                          onValueChange={(itemValue, itemIndex) =>
                            this.setState(prevState => {
                              return {
                                subtotal:
                                  prevState.subtotal -
                                  this.state.double_vip_class_value +
                                  Number(this.state.double_vip_class * itemValue * double_vip_class_rate),
                                double_vip_service_duration: itemValue,
                                double_vip_class_value: Number(prevState.double_vip_class * itemValue * double_vip_class_rate)
                              };
                            })
                          }>
                          <Picker.Item
                            color="grey"
                            label="0"
                            value="0"
                          />
                          <Picker.Item
                            color="grey"
                            label="1 day"
                            value="1"
                          />
                          <Picker.Item
                            color="grey"
                            label="2 days"
                            value="2"
                          />
                          <Picker.Item color="grey" label="3 days" value="3" />
                          <Picker.Item color="grey" label="4 days" value="4" />
                          <Picker.Item color="grey" label="5 days" value="5" />
                          <Picker.Item color="grey" label="6 days" value="6" />
                          <Picker.Item color="grey" label="7 days" value="7" />
                          <Picker.Item color="grey" label="8 days" value="8" />
                          <Picker.Item color="grey" label="9 days" value="9" />
                          <Picker.Item
                            color="grey"
                            label="10 days"
                            value="10"
                          />
                          <Picker.Item
                            color="grey"
                            label="11 days"
                            value="11"
                          />
                          <Picker.Item
                            color="grey"
                            label="12 days"
                            value="12"
                          />
                          <Picker.Item
                            color="grey"
                            label="13 days"
                            value="13"
                          />
                          <Picker.Item
                            color="grey"
                            label="14 days"
                            value="14"
                          />
                        </Picker>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <Divider
                style={{
                  backgroundColor: '#ddd',
                  elevation: 0.3,
                  width: '95%',
                  alignSelf: 'center',
                  margin: 30,
                }}></Divider>
              <ServiceBar getDate={this.handleDateChange} navigation={this.props.navigation} Address={this.handleAddressChange}/>
              {
                Number(single_economy_class) || Number(double_economy_class) ||
                  Number(single_vip_class) || Number(double_vip_class) ? (
                    selectedStartDate && address ? (
                      <TouchableNativeFeedback
                        onPress={() =>
                          this.props.navigation.navigate('MobileToiletSummary', {
                            item: this.state,
                          })
                        }>
                        <View style={styles.subscribe}>
                          <Text style={styles.subscribeTitle}>Proceed</Text>
                        </View>
                      </TouchableNativeFeedback>
                    ) : <Text style={{ color: "red", marginBottom: 30 }}>Please fill in the service address and date
                    </Text>
                  ) : null
              }
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </Root>
    );
  }
}

export default ServiceForm;

const styles = StyleSheet.create({
  imageBackgroundStyle: {
    flex: 1,
    borderRadius: 5,
  },
  main: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  headerMain: {
    width: '100%',
    backgroundColor: '#0b8647',
    alignItems: 'center',
    flexDirection:'row',
    justifyContent:'space-between',
    padding: 20,
  },
  header: {
    width: '95%',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
 goBack: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 35,
    height: 35,
    width: 35,
  },
  headerTitle: {
    fontSize: 25,
    marginTop: -5,
    color: 'white',
    fontWeight: 'bold',
  },
  quote: {
    padding: 10,
    backgroundColor: 'white',
    fontSize: 18
  },
  body: {
    flex: 1,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'space-around',
    paddingTop: 25,
  },
  delete: {
    padding: 8,
  },
  bath: {
    height: 50,
    width: '20%',
    borderWidth: 2,
    borderColor: 'blue',
  },
  title: {
    fontSize: 16,
    color: 'white',
    paddingTop: 10,
  },
  title1: {
    fontSize: 25,
    color: 'white',
  },
  checkbox: {
    flex: 1,
    padding: 10,
    width: '100%',
    alignSelf: 'center',
  },
  subscribe: {
    marginTop: 15,
    borderRadius: 10,
    backgroundColor: '#0b8647',
    fontSize: 20,
    width: '80%',
    alignSelf: 'center',
    marginBottom: 20,
  },
  subscribeTitle: {
    fontSize: 20,
    padding: 15,
    fontWeight: 'bold',
    color: 'white',
    alignSelf: 'center',
  },
  delete: {
    padding: 8,
  },
  btn: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    alignSelf: 'center',
  },
});
