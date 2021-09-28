import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableNativeFeedback,
  KeyboardAvoidingView,
  Picker,
} from 'react-native';
import Root from '../../components/Utils/Root';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Divider } from 'react-native-elements';
import ServiceBar from '../ServiceBar'
import { rates } from './rates'

class ServiceForm extends React.Component {

  static navigationOptions = { header: null };
  state = {
    standard_bedroom: 0,
    standard_bathroom: 0,
    post_standard_bedroom: 0,
    post_standard_bathroom: 0,
    Upholstery_qty: 0,
    marble_rooms: 0,
    tank_size: '',
    tank_qty: 0,
    standard_size: 0,
    large_size: 0,
    largest_size: 0,
    lawn_plots: 0,
    bush_plots: 0,
    visible1: false,
    visible2: false,
    visible3: false,
    visible4: false,
    visible5: false,
    visible6: false,
    selectedStartDate: null,
    subtotal: 0,
    address: null,
  }

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

  toggle3 = () => {
    this.setState(prevState => {
      return {
        visible3: !prevState.visible3,
      };
    });
  };

  toggle4 = () => {
    this.setState(prevState => {
      return {
        visible4: !prevState.visible4,
      };
    });
  };

  toggle5 = () => {
    this.setState(prevState => {
      return {
        visible5: !prevState.visible5,
      };
    });
  };

  toggle6 = () => {
    this.setState(prevState => {
      return {
        visible6: !prevState.visible6,
      };
    });
  };

  onDateChange = date =>
    this.setState(prevState => {
      return {
        selectedStartDate: date,
        visible6: !prevState.visible6,
      };
    });

  handleSubtotalChange = ({ itemValue }) => {
    console.warn(itemValue, 'ggggg');
  };

  handleAddressChange = (data) => {
    this.setState({ address:data})
  }

  handleDateChange = (date) => {
    this.setState({ selectedStartDate: date })
  }
  render() {
    const startDate = this.state.selectedStartDate
      ? this.state.selectedStartDate.toString().slice(0, 16)
      : '';
    const {
      standard_bedroom, standard_bathroom, post_standard_bedroom, post_standard_bathroom, Upholstery_qty, marble_rooms, standard_size, large_size, largest_size, lawn_plots, bush_plots, selectedStartDate, address
    } = this.state;
    const {
      standard_bedroom_rate,
      standard_bathroom_rate,
      Upholstery_qty_rate,
      marble_rooms_rate,
      standard_size_rate,
      large_size_rate,
      largest_size_rate,
      lawn_plots_rate,
      bush_plots_rate,
      post_standard_bedroom_rate,
      post_standard_bathroom_rate
    } = rates
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
                  Cleaning Service
                  </Text>
                <Text style={styles.headerTitle}>Quotation Form</Text>
              </View>
              <Text style={styles.quote}>
                {this.state.subtotal ? '\u20A6' + this.state.subtotal : (
                  <Text style={{ color: 'grey', fontSize: 18 }}>SUBTOTAL</Text>
                )}
              </Text>
            </View>
          </View>
          <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps={'handled'}>
            <View style={styles.main}>
              {/* Standard cleaning */}
              {
                Number(post_standard_bedroom) || Number(post_standard_bathroom) ? null : (
                  <>
                    <Text style={styles.serviceTitle}>Standard Cleaning</Text>
                    <View style={{ alignSelf: 'center' }}>
                      <View
                        style={{
                          flexDirection: 'row',
                          width: '90%',
                          alignSelf: 'center',
                          borderColor: '#0b8647',
                          margin: 5,
                        }}>
                        <Picker
                          selectedValue={this.state.standard_bedroom}
                          style={{
                            height: 50,
                            width: '100%',
                            borderWidth: 0.5,
                            borderStyle: 'solid',
                          }}
                          onValueChange={(itemValue, itemIndex) => {
                            this.setState(prevState => {
                              return {
                                subtotal:
                                  prevState.subtotal -
                                  Number(prevState.standard_bedroom * standard_bedroom_rate) +
                                  Number(itemValue) * standard_bedroom_rate,
                                standard_bedroom: itemValue,
                              };
                            });
                          }}>
                          <Picker.Item color="grey" label="No. of Bedrooms" value="0" />
                          <Picker.Item color="grey" label="1 bedroom flat" value="1" />
                          <Picker.Item color="grey" label="2 bedroom flat" value="2" />
                          <Picker.Item color="grey" label="3 bedroom flat" value="3" />
                          <Picker.Item color="grey" label="4 bedroom flat" value="4" />
                          <Picker.Item color="grey" label="5 bedroom flat" value="5" />
                          <Picker.Item color="grey" label="6 bedroom flat" value="6" />
                          <Picker.Item color="grey" label="7 bedroom flat" value="7" />
                          <Picker.Item color="grey" label="8 bedroom flat" value="8" />
                          <Picker.Item color="grey" label="9 bedroom flat" value="9" />
                          <Picker.Item color="grey" label="10 bedroom flat" value='10'/>
                          <Picker.Item color="grey" label="11 bedroom flat" value='11'/>
                          <Picker.Item color="grey" label="12 bedroom flat" value='12'/>
                        </Picker>
                      </View>
                      <View
                        style={{
                          flexDirection: 'row',
                          width: '90%',
                          borderColor: '#0b8647',
                          alignSelf: 'center',
                          margin: 5,
                        }}>
                        <Picker
                          selectedValue={this.state.standard_bathroom}
                          style={{
                            height: 50,
                            width: '100%',
                          }}
                          onValueChange={(itemValue, itemIndex) =>
                            // this.setState({ standard_bathroom: itemValue })
                            this.setState(prevState => {
                              return {
                                subtotal:
                                  prevState.subtotal -
                                  Number(prevState.standard_bathroom * standard_bathroom_rate) +
                                  Number(itemValue) * standard_bathroom_rate,
                                standard_bathroom: itemValue,
                              };
                            })
                          }>
                          <Picker.Item color="grey" label="No. of Bathrooms" value="0" />
                          <Picker.Item color="grey" label="1 bath" value="1" />
                          <Picker.Item color="grey" label="2 baths" value="2" />
                          <Picker.Item color="grey" label="3 baths" value="3" />
                          <Picker.Item color="grey" label="4 baths" value="4" />
                          <Picker.Item color="grey" label="5 baths" value="5" />
                          <Picker.Item color="grey" label="6 baths" value="6" />
                          <Picker.Item color="grey" label="7 baths" value="7" />
                          <Picker.Item color="grey" label="8 baths" value="8" />
                          <Picker.Item color="grey" label="9 baths" value="9" />
                          <Picker.Item color="grey" label="10 baths" value="10" />
                          <Picker.Item color="grey" label="11 baths" value="11" />
                          <Picker.Item color="grey" label="12 baths" value="12" />
                        </Picker>
                      </View>
                    </View>
                  </>
                )
              }

              {/* Post Construction/Renovation/Moving-In Cleaning */}
              {
                Number(standard_bedroom) || Number(standard_bathroom) ? null : (
                  <>
                    <Text style={styles.serviceTitle}>Post Construction/Renovation/Moving-In Cleaning</Text>
                    <View style={{ alignSelf: 'center' }}>
                      <View
                        style={{
                          flexDirection: 'row',
                          width: '90%',
                          alignSelf: 'center',
                          borderColor: '#0b8647',
                          margin: 5,
                        }}>
                        <Picker
                          selectedValue={this.state.post_standard_bedroom}
                          style={{
                            height: 50,
                            width: '100%',
                            borderWidth: 0.5,
                            borderStyle: 'solid',
                          }}
                          onValueChange={(itemValue, itemIndex) => {
                            this.setState(prevState => {
                              return {
                                subtotal:
                                  prevState.subtotal -
                                  Number(prevState.post_standard_bedroom * post_standard_bedroom_rate) +
                                  Number(itemValue) * post_standard_bedroom_rate,
                                post_standard_bedroom: itemValue,
                              };
                            });
                          }}>
                          <Picker.Item color="grey" label="No. of Bedrooms" value="0" />
                          <Picker.Item color="grey" label="1 bedroom flat" value="1" />
                          <Picker.Item color="grey" label="2 bedroom flat" value="2" />
                          <Picker.Item color="grey" label="3 bedroom flat" value="3" />
                          <Picker.Item color="grey" label="4 bedroom flat" value="4" />
                          <Picker.Item color="grey" label="5 bedroom flat" value="5" />
                          <Picker.Item color="grey" label="6 bedroom flat" value="6" />
                          <Picker.Item color="grey" label="7 bedroom flat" value="7" />
                          <Picker.Item color="grey" label="8 bedroom flat" value="8" />
                          <Picker.Item color="grey" label="9 bedroom flat" value="9" />
                          <Picker.Item color="grey" label="10 bedroom flat" value="10" />
                          <Picker.Item color="grey" label="11 bedroom flat" value="11" />
                          <Picker.Item color="grey" label="12 bedroom flat" value="12" />
                        </Picker>
                      </View>
                      <View
                        style={{
                          flexDirection: 'row',
                          width: '90%',
                          borderColor: '#0b8647',
                          alignSelf: 'center',
                          margin: 5,
                        }}>
                        <Picker
                          selectedValue={this.state.post_standard_bathroom}
                          style={{
                            height: 50,
                            width: '100%',
                          }}
                          onValueChange={(itemValue, itemIndex) =>
                            // this.setState({ standard_bathroom: itemValue })
                            this.setState(prevState => {
                              return {
                                subtotal:
                                  prevState.subtotal -
                                  Number(prevState.post_standard_bathroom * post_standard_bathroom_rate) +
                                  Number(itemValue) * post_standard_bathroom_rate,
                                post_standard_bathroom: itemValue,
                              };
                            })
                          }>
                          <Picker.Item color="grey" label="No. of Bathrooms" value="0" />
                          <Picker.Item color="grey" label="1 bath" value="1" />
                          <Picker.Item color="grey" label="2 baths" value="2" />
                          <Picker.Item color="grey" label="3 baths" value="3" />
                          <Picker.Item color="grey" label="4 baths" value="4" />
                          <Picker.Item color="grey" label="5 baths" value="5" />
                          <Picker.Item color="grey" label="6 baths" value="6" />
                          <Picker.Item color="grey" label="7 baths" value="7" />
                          <Picker.Item color="grey" label="8 baths" value="8" />
                          <Picker.Item color="grey" label="9 baths" value="9" />
                          <Picker.Item color="grey" label="10 baths" value="10" />
                          <Picker.Item color="grey" label="11 baths" value="11" />
                          <Picker.Item color="grey" label="12 baths" value="12" />
                        </Picker>
                      </View>
                    </View>
                  </>
                )
              }

              <Text style={styles.serviceTitle}>Specialized Cleaning</Text>
              <TouchableNativeFeedback onPress={this.toggle1}>
                <View style={styles.btn}>
                  <Text style={{ color: 'grey', fontSize: 18 }}>Upholstery Cleaning</Text>
                  {this.state.visible1 ? (
                    <FontAwesome
                      name="chevron-up"
                      color="#0b8647"
                      size={12}
                      style={styles.delete}
                    />
                  ) : (
                      <FontAwesome
                        name="chevron-down"
                        color="#0b8647"
                        size={12}
                        style={styles.delete}
                      />
                    )}
                </View>
              </TouchableNativeFeedback>
              {this.state.visible1 && (
                <View style={styles.menuItem}>
                  <Picker
                    selectedValue={this.state.Upholstery_qty}
                    style={{
                      height: 50,
                      width: '100%',
                    }}
                    onValueChange={(itemValue, itemIndex) =>
                      this.setState(prevState => {
                        return {
                          subtotal:
                            prevState.subtotal -
                            Number(prevState.Upholstery_qty * Upholstery_qty_rate) +
                            Number(itemValue) * Upholstery_qty_rate,
                          Upholstery_qty: itemValue,
                        };
                      })
                    }>
                    <Picker.Item color="#0b8647" label="Quantity" value="0" />
                    <Picker.Item color="#0b8647" label="1 piece" value="1" />
                    <Picker.Item color="#0b8647" label="2 pieces" value="2" />
                    <Picker.Item color="#0b8647" label="3 pieces" value="3" />
                    <Picker.Item color="#0b8647" label="4 pieces" value="4" />
                    <Picker.Item color="#0b8647" label="5 pieces" value="5" />
                    <Picker.Item color="#0b8647" label="6 pieces" value="6" />
                    <Picker.Item color="#0b8647" label="7 pieces" value="7" />
                    <Picker.Item color="#0b8647" label="8 pieces" value="8" />
                    <Picker.Item color="#0b8647" label="9 pieces" value="9" />
                    <Picker.Item color="#0b8647" label="10 pieces" value="10" />
                    <Picker.Item color="#0b8647" label="11 pieces" value="11" />
                    <Picker.Item color="#0b8647" label="12 pieces" value="12" />
                    <Picker.Item color="#0b8647" label="13 pieces" value="13" />
                    <Picker.Item color="#0b8647" label="14 pieces" value="14" />
                    <Picker.Item color="#0b8647" label="15 pieces" value="15" />
                    <Picker.Item color="#0b8647" label="16 pieces" value="16" />
                    <Picker.Item color="#0b8647" label="17 pieces" value="17" />
                    <Picker.Item color="#0b8647" label="18 pieces" value="18" />
                    <Picker.Item color="#0b8647" label="19 pieces" value="19" />
                    <Picker.Item color="#0b8647" label="20 pieces" value="20" />
                    <Picker.Item color="#0b8647" label="21 pieces" value="21" />
                    <Picker.Item color="#0b8647" label="22 pieces" value="22" />
                    <Picker.Item color="#0b8647" label="23 pieces" value="23" />
                    <Picker.Item color="#0b8647" label="24 pieces" value="24" />
                  </Picker>
                </View>
              )}
              <TouchableNativeFeedback onPress={this.toggle2}>
                <View style={styles.btn}>
                  <Text style={{ color: 'grey', fontSize: 18 }}>Marble Restoration</Text>
                  {this.state.visible2 ? (
                    <FontAwesome
                      name="chevron-up"
                      color="#0b8647"
                      size={12}
                      style={styles.delete}
                    />
                  ) : (
                      <FontAwesome
                        name="chevron-down"
                        color="#0b8647"
                        size={12}
                        style={styles.delete}
                      />
                    )}
                </View>
              </TouchableNativeFeedback>
              {this.state.visible2 && (
                <View style={styles.menuItem}>
                  <Picker
                    selectedValue={this.state.marble_rooms}
                    style={{
                      height: 50,
                      width: '100%',
                    }}
                    onValueChange={(itemValue, itemIndex) =>
                      this.setState(prevState => {
                        return {
                          subtotal:
                            prevState.subtotal -
                            Number(prevState.marble_rooms * marble_rooms_rate) +
                            Number(itemValue) * marble_rooms_rate,
                          marble_rooms: itemValue,
                        };
                      })
                    }>
                    <Picker.Item color="#0b8647" label="No. of rooms" value="0" />
                    <Picker.Item color="#0b8647" label="1 bedroom flat" value="1" />
                    <Picker.Item color="#0b8647" label="2 bedroom flat" value="2" />
                    <Picker.Item color="#0b8647" label="3 bedroom flat" value="3" />
                    <Picker.Item color="#0b8647" label="4 bedroom flat" value="4" />
                    <Picker.Item color="#0b8647" label="5 bedroom flat" value="5" />
                    <Picker.Item color="#0b8647" label="6 bedroom flat" value="6" />
                    <Picker.Item color="#0b8647" label="7 bedroom flat" value="7" />
                    <Picker.Item color="#0b8647" label="8 bedroom flat" value="8" />
                    <Picker.Item color="#0b8647" label="9 bedroom flat" value="9" />
                    <Picker.Item color="#0b8647" label="10 bedroom flat" value="10" />
                    <Picker.Item color="#0b8647" label="11 bedroom flat" value="11" />
                    <Picker.Item color="#0b8647" label="12 bedroom flat" value="12" />
                  </Picker>
                </View>
              )}
              <TouchableNativeFeedback onPress={this.toggle3}>
                <View style={styles.btn}>
                  <Text style={{ color: 'grey', fontSize: 18 }}>Overhead Tank Washing</Text>
                  {this.state.visible3 ? (
                    <FontAwesome
                      name="chevron-up"
                      color="#0b8647"
                      size={12}
                      style={styles.delete}
                    />
                  ) : (
                      <FontAwesome
                        name="chevron-down"
                        color="#0b8647"
                        size={12}
                        style={styles.delete}
                      />
                    )}
                </View>
              </TouchableNativeFeedback>
              {this.state.visible3 && (
                <View
                  style={{
                    alignSelf: 'flex-start',
                    width: '90%',
                    alignSelf: 'center',
                  }}>
                  <View
                    style={{
                      alignSelf: 'center',
                      width: '90%',
                      borderBottomWidth: 0,
                      borderColor: '#0b8467',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                    <Text style={{ color: '#7D7D82', padding: 5 }}>
                      Standard Tank Size
                        </Text>
                    <View
                      style={{
                        width: '30%',
                        // borderLeftWidth: 0.75,
                        borderColor: '#0b8467',
                      }}>
                      <Picker
                        selectedValue={this.state.standard_size}
                        style={{
                          height: 50,
                          width: '100%',
                        }}
                        onValueChange={(itemValue, itemIndex) =>
                          // this.setState({qty: itemValue});
                          this.setState(prevState => {
                            return {
                              subtotal:
                                prevState.subtotal -
                                Number(prevState.standard_size * standard_size_rate) +
                                Number(itemValue) * standard_size_rate,
                              standard_size: itemValue,
                            };
                          })
                        }>
                        <Picker.Item
                          color="#0b8647"
                          label="Qty"
                          value="0"
                        />
                        <Picker.Item
                          color="#0b8647"
                          label="1"
                          value="1"
                        />
                        <Picker.Item
                          color="#0b8647"
                          label="2"
                          value="2"
                        />
                        <Picker.Item
                          color="#0b8647"
                          label="3"
                          value="3"
                        />
                        <Picker.Item
                          color="#0b8647"
                          label="4"
                          value="4"
                        />
                        <Picker.Item
                          color="#0b8647"
                          label="5"
                          value="5"
                        />
                        <Picker.Item
                          color="#0b8647"
                          label="6"
                          value="6"
                        />
                        <Picker.Item
                          color="#0b8647"
                          label="7"
                          value="7"
                        />
                        <Picker.Item
                          color="#0b8647"
                          label="8"
                          value="8"
                        />
                        <Picker.Item
                          color="#0b8647"
                          label="9"
                          value="9"
                        />
                        <Picker.Item
                          color="#0b8647"
                          label="10"
                          value="10"
                        />
                        <Picker.Item
                          color="#0b8647"
                          label="11"
                          value="11"
                        />
                        <Picker.Item
                          color="#0b8647"
                          label="12"
                          value="12"
                        />
                      </Picker>
                    </View>
                  </View>
                  <View
                    style={{
                      alignSelf: 'center',
                      width: '90%',
                      borderBottomWidth: 0,
                      borderColor: '#0b8467',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                    <Text style={{ color: '#7D7D82', padding: 5 }}>
                      Large Tank Size
                        </Text>
                    <View
                      style={{
                        width: '30%',
                        // borderLeftWidth: 0.75,
                        borderColor: '#0b8467',
                      }}>
                      <Picker
                        selectedValue={this.state.large_size}
                        style={{
                          height: 50,
                          width: '100%',
                        }}
                        onValueChange={(itemValue, itemIndex) =>
                          this.setState(prevState => {
                            return {
                              subtotal:
                                prevState.subtotal -
                                Number(prevState.large_size * large_size_rate) +
                                Number(itemValue) * large_size_rate,
                              large_size: itemValue,
                            };
                          })
                        }>
                        <Picker.Item
                          color="#0b8647"
                          label="Qty"
                          value="0"
                        />
                        <Picker.Item
                          color="#0b8647"
                          label="1"
                          value="1"
                        />
                        <Picker.Item
                          color="#0b8647"
                          label="2"
                          value="2"
                        />
                        <Picker.Item
                          color="#0b8647"
                          label="3"
                          value="3"
                        />
                        <Picker.Item
                          color="#0b8647"
                          label="4"
                          value="4"
                        />
                        <Picker.Item
                          color="#0b8647"
                          label="5"
                          value="5"
                        />
                        <Picker.Item
                          color="#0b8647"
                          label="6"
                          value="6"
                        />
                        <Picker.Item
                          color="#0b8647"
                          label="7"
                          value="7"
                        />
                        <Picker.Item
                          color="#0b8647"
                          label="8"
                          value="8"
                        />
                        <Picker.Item
                          color="#0b8647"
                          label="9"
                          value="9"
                        />
                        <Picker.Item
                          color="#0b8647"
                          label="10"
                          value="10"
                        />
                        <Picker.Item
                          color="#0b8647"
                          label="11"
                          value="11"
                        />
                        <Picker.Item
                          color="#0b8647"
                          label="12"
                          value="12"
                        />
                      </Picker>
                    </View>
                  </View>
                  <View
                    style={{
                      alignSelf: 'center',
                      width: '90%',
                      borderColor: '#0b8467',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                    <Text style={{ color: '#7D7D82', padding: 5 }}>
                      Largest Tank Size
                        </Text>
                    <View
                      style={{
                        width: '30%',
                        borderColor: '#0b8467',
                      }}>
                      <Picker
                        selectedValue={this.state.largest_size}
                        style={{
                          height: 50,
                          width: '100%',
                        }}
                        onValueChange={(itemValue, itemIndex) =>
                          this.setState(prevState => {
                            return {
                              subtotal:
                                prevState.subtotal -
                                Number(prevState.largest_size * largest_size_rate) +
                                Number(itemValue) * largest_size_rate,
                              largest_size: itemValue,
                            };
                          })
                        }>
                        <Picker.Item
                          color="#0b8647"
                          label="Qty"
                          value="0"
                        />
                        <Picker.Item
                          color="#0b8647"
                          label="1"
                          value="1"
                        />
                        <Picker.Item
                          color="#0b8647"
                          label="2"
                          value="2"
                        />
                        <Picker.Item
                          color="#0b8647"
                          label="3"
                          value="3"
                        />
                        <Picker.Item
                          color="#0b8647"
                          label="4"
                          value="4"
                        />
                        <Picker.Item
                          color="#0b8647"
                          label="5"
                          value="5"
                        />
                        <Picker.Item
                          color="#0b8647"
                          label="6"
                          value="6"
                        />
                        <Picker.Item
                          color="#0b8647"
                          label="7"
                          value="7"
                        />
                        <Picker.Item
                          color="#0b8647"
                          label="8"
                          value="8"
                        />
                        <Picker.Item
                          color="#0b8647"
                          label="9"
                          value="9"
                        />
                        <Picker.Item
                          color="#0b8647"
                          label="10"
                          value="10"
                        />
                        <Picker.Item
                          color="#0b8647"
                          label="11"
                          value="11"
                        />
                        <Picker.Item
                          color="#0b8647"
                          label="12"
                          value="12"
                        />
                      </Picker>
                    </View>
                  </View>
                </View>
              )}
              <TouchableNativeFeedback onPress={this.toggle4}>
                <View style={styles.btn}>
                  <Text style={{ color: 'grey', fontSize: 18 }}>Lawn Mowing</Text>
                  {this.state.visible4 ? (
                    <FontAwesome
                      name="chevron-up"
                      color="#0b8647"
                      size={12}
                      style={styles.delete}
                    />
                  ) : (
                      <FontAwesome
                        name="chevron-down"
                        color="#0b8647"
                        size={12}
                        style={styles.delete}
                      />
                    )}
                </View>
              </TouchableNativeFeedback>
              {this.state.visible4 && (
                <View style={styles.menuItem}>
                  <Picker
                    selectedValue={this.state.lawn_plots}
                    style={{
                      height: 50,
                      width: '100%',
                    }}
                    onValueChange={(itemValue, itemIndex) =>
                      this.setState(prevState => {
                        return {
                          subtotal:
                            prevState.subtotal -
                            Number(prevState.lawn_plots * lawn_plots_rate) +
                            Number(itemValue) * lawn_plots_rate,
                          lawn_plots: itemValue,
                        };
                      })
                    }>
                    <Picker.Item color="#0b8647" label="No. of plots" value="0" />
                    <Picker.Item color="#0b8647" label="1 plot" value="1" />
                    <Picker.Item color="#0b8647" label="2 plots" value="2" />
                    <Picker.Item color="#0b8647" label="3 plots" value="3" />
                    <Picker.Item color="#0b8647" label="4 plots" value="4" />
                    <Picker.Item color="#0b8647" label="5 plots" value="5" />
                    <Picker.Item color="#0b8647" label="6 plots" value="6" />
                  </Picker>
                </View>
              )}
              <TouchableNativeFeedback onPress={this.toggle5}>
                <View style={styles.btn}>
                  <Text style={{ color: 'grey', fontSize: 18 }}>Bush Clearing</Text>
                  {this.state.visible5 ? (
                    <FontAwesome
                      name="chevron-up"
                      color="#0b8647"
                      size={12}
                      style={styles.delete}
                    />
                  ) : (
                      <FontAwesome
                        name="chevron-down"
                        color="#0b8647"
                        size={12}
                        style={styles.delete}
                      />
                    )}
                </View>
              </TouchableNativeFeedback>
              {this.state.visible5 && (
                <View style={styles.menuItem}>
                  <Picker
                    selectedValue={this.state.bush_plots}
                    style={{
                      height: 50,
                      width: '100%',
                    }}
                    onValueChange={(itemValue, itemIndex) =>
                      this.setState(prevState => {
                        return {
                          subtotal:
                            prevState.subtotal -
                            Number(prevState.bush_plots * bush_plots_rate) +
                            Number(itemValue) * bush_plots_rate,
                          bush_plots: itemValue,
                        };
                      })
                    }>
                    <Picker.Item color="#0b8647" fontSize={14} label="No. of plots" value="0" />
                    <Picker.Item color="#0b8647" fontSize={14} label="1 plot" value="1" />
                    <Picker.Item color="#0b8647" fontSize={14} label="2 plots" value="2" />
                    <Picker.Item color="#0b8647" fontSize={14} label="3 plots" value="3" />
                    <Picker.Item color="#0b8647" fontSize={14} label="4 plots" value="4" />
                    <Picker.Item color="#0b8647" fontSize={14} label="5 plots" value="5" />
                    <Picker.Item color="#0b8647" fontSize={14} label="6 plots" value="6" />
                    <Picker.Item color="#0b8647" fontSize={14} label="7 plots" value="7" />
                    <Picker.Item color="#0b8647" fontSize={14} label="8 plots" value="8" />
                  </Picker>
                </View>
              )}
              <Divider
                style={{
                  backgroundColor: '#ddd',
                  elevation: .3,
                  width: '95%',
                  alignSelf: 'center',
                  margin: 30,
                }}></Divider>
              <ServiceBar getDate={this.handleDateChange} navigation={this.props.navigation} Address={this.handleAddressChange}/>
              {
                Number(standard_bedroom) || Number(standard_bathroom) || Number(post_standard_bedroom) || Number(post_standard_bathroom) || Number(Upholstery_qty) || Number(marble_rooms) || Number(standard_size) || Number(large_size) || Number(largest_size) || Number(lawn_plots) || Number(bush_plots) ? (
                  selectedStartDate && address ? (
                    <TouchableNativeFeedback
                      onPress={() => this.props.navigation.navigate('SummaryCleaning', {
                        item: this.state
                      })}
                    >
                      <View style={styles.subscribe}>
                        <Text style={styles.subscribeTitle}>Proceed</Text>
                      </View>
                    </TouchableNativeFeedback>
                  ) : <Text style={{ color: "red", marginBottom: 30 }}>Please fill in the service address and date</Text>
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
  btn: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  main: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
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
  serviceTitle: {
    color: '#0b8647',
    fontSize: 20,
    alignSelf: 'flex-start',
    marginLeft: 20,
    marginTop: 30,
    fontWeight: 'bold',
  },
  nextBtn: {
    width: '75%',
    alignSelf: 'center',
    marginTop: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  barItem: {
    padding: 10,
  },
  textInput: {
    borderBottomWidth: 0.5,
    borderColor: 'white',
    paddingBottom: 0,
    width: '100%',
    color: 'white',
  },
  price1: {
    backgroundColor: '#ffe304',
    flexDirection: 'column',
    width: '49.8%',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    alignItems: 'center',
  },
  price2: {
    backgroundColor: '#ffe304',
    width: '49.8%',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: 'center',
  },
  subtitleText: {
    alignSelf: 'center',
    fontSize: 25,
    color: '#0b8647',
    padding: 5,
    fontWeight: 'bold',
  },
  menuItem: {
    flexDirection: 'row',
    width: '90%',
    borderColor: '#0b8647',
    alignSelf: 'flex-start',
    alignSelf: 'center',
  },
  bodyText: {
    alignSelf: 'center',
    textAlign: 'center',
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
});
