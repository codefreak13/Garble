import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableNativeFeedback,
  KeyboardAvoidingView,
  Picker,
  Image
} from "react-native";
import Root from "../Utils/Root";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import CheckBox from "react-native-check-box";
import { Divider } from "react-native-elements";
import ServiceBar from "../ServiceBar";
import { rates } from "./rates";

const {
  inter_bed_bug_rate,
  inter_mosquito_rate,
  inter_termite_rate,
  inter_rats_rate,
  house_type_rate,
  land_plot_rate,
  exter_snakes_rate,
  exter_mosquito_rate,
  exter_termite_rate,
  exter_rats_rate
} = rates;

class ServiceForm extends React.Component {
  static navigationOptions = { header: null };
  state = {
    house_type: 0,
    land_plot: 0,
    fumigation_type: ["0", "1", "2", "3", "4", "5", "6"],
    selectedStartDate: null,
    visible6: false,
    isChecked_inter_bedBug: false,
    isChecked_inter_mosquito: false,
    isChecked_inter_termite: false,
    isChecked_inter_rats: false,
    isChecked_exter_mosquito: false,
    isChecked_exter_termite: false,
    isChecked_exter_rats: false,
    isChecked_exter_snakes: false,
    visible1: false,
    visible2: false,
    subtotal: 0,
    selectedStartDate: null,
    address: null
  };

  toggle1 = () => {
    this.setState(prevState => {
      return {
        visible1: !prevState.visible1
      };
    });
  };

  toggle2 = () => {
    this.setState(prevState => {
      return {
        visible2: !prevState.visible2
      };
    });
  };

  // HANDLERS FOR INTERIOR
  handle_inter_bedBug = () => {
    this.state.isChecked_inter_bedBug
      ? this.setState(prevState => {
          return {
            subtotal:
              prevState.subtotal + prevState.house_type * inter_bed_bug_rate
          };
        })
      : !this.state.isChecked_inter_bedBug
      ? this.setState(prevState => {
          return {
            subtotal:
              prevState.subtotal - prevState.house_type * inter_bed_bug_rate
          };
        })
      : null;
  };

  handle_inter_mosquito = () => {
    this.state.isChecked_inter_mosquito
      ? this.setState(prevState => {
          return {
            subtotal:
              prevState.subtotal + prevState.house_type * inter_mosquito_rate
          };
        })
      : !this.state.isChecked_inter_mosquito
      ? this.setState(prevState => {
          return {
            subtotal:
              prevState.subtotal - prevState.house_type * inter_mosquito_rate
          };
        })
      : null;
  };

  handle_inter_termite = () => {
    this.state.isChecked_inter_termite
      ? this.setState(prevState => {
          return {
            subtotal:
              prevState.subtotal + prevState.house_type * inter_termite_rate
          };
        })
      : !this.state.isChecked_inter_termite
      ? this.setState(prevState => {
          return {
            subtotal:
              prevState.subtotal - prevState.house_type * inter_termite_rate
          };
        })
      : null;
  };

  handle_inter_rats = () => {
    this.state.isChecked_inter_rats
      ? this.setState(prevState => {
          return {
            subtotal:
              prevState.subtotal + prevState.house_type * inter_rats_rate
          };
        })
      : !this.state.isChecked_inter_rats
      ? this.setState(prevState => {
          return {
            subtotal:
              prevState.subtotal - prevState.house_type * inter_rats_rate
          };
        })
      : null;
  };

  // HANDLERS FOR EXTERIOR
  handle_exter_mosquito = () => {
    this.state.isChecked_exter_mosquito
      ? this.setState(prevState => {
          return {
            subtotal:
              prevState.subtotal + prevState.land_plot * exter_mosquito_rate
          };
        })
      : !this.state.isChecked_exter_mosquito
      ? this.setState(prevState => {
          return {
            subtotal:
              prevState.subtotal - prevState.land_plot * exter_mosquito_rate
          };
        })
      : null;
  };

  handle_exter_termite = () => {
    this.state.isChecked_exter_termite
      ? this.setState(prevState => {
          return {
            subtotal:
              prevState.subtotal + prevState.land_plot * exter_termite_rate
          };
        })
      : !this.state.isChecked_exter_termite
      ? this.setState(prevState => {
          return {
            subtotal:
              prevState.subtotal - prevState.land_plot * exter_termite_rate
          };
        })
      : null;
  };

  handle_exter_rats = () => {
    this.state.isChecked_exter_rats
      ? this.setState(prevState => {
          return {
            subtotal: prevState.subtotal + prevState.land_plot * exter_rats_rate
          };
        })
      : !this.state.isChecked_exter_rats
      ? this.setState(prevState => {
          return {
            subtotal: prevState.subtotal - prevState.land_plot * exter_rats_rate
          };
        })
      : null;
  };

  handle_exter_snakes = () => {
    this.state.isChecked_exter_snakes
      ? this.setState(prevState => {
          return {
            subtotal:
              prevState.subtotal + prevState.land_plot * exter_snakes_rate
          };
        })
      : !this.state.isChecked_exter_snakes
      ? this.setState(prevState => {
          return {
            subtotal:
              prevState.subtotal - prevState.land_plot * exter_snakes_rate
          };
        })
      : null;
  };

  handleAddressChange = data => {
    this.setState({ address: data });
  };

  handleDateChange = date => {
    this.setState({ selectedStartDate: date });
  };
  render() {
    const {
      isChecked_inter_bedBug,
      isChecked_inter_mosquito,
      isChecked_inter_termite,
      isChecked_inter_rats,
      isChecked_exter_snakes,
      isChecked_exter_mosquito,
      isChecked_exter_termite,
      isChecked_exter_rats,
      house_type,
      land_plot,
      selectedStartDate,
      address
    } = this.state;
    console.log(isChecked_inter_bedBug, "sssss");
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
              <View style={{ flexDirection: "column" }}>
                <Text style={{ fontSize: 18, color: "white" }}>
                  Fumigation Service
                </Text>
                <Text style={styles.headerTitle}>Quotation Form</Text>
              </View>
              <Text style={styles.quote}>
                {this.state.subtotal ? (
                  "\u20A6" + this.state.subtotal
                ) : (
                  <Text style={{ color: "grey" }}>SUBTOTAL</Text>
                )}
              </Text>
            </View>
          </View>
          <ScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            keyboardShouldPersistTaps={"handled"}
          >
            <View style={styles.main}>
              <View style={styles.body}>
                <View style={{ alignSelf: "center", width: "90%" }}>
                  <Text
                    style={{
                      color: "#0b8647",
                      fontSize: 21,
                      alignSelf: "flex-start",
                      marginTop: 30,
                      fontWeight: "bold",
                      marginBottom: 10
                    }}
                  >
                    Interior Fumigation
                  </Text>
                  <View
                    style={{
                      alignSelf: "center",
                      width: "100%"
                    }}
                  >
                    <Picker
                      selectedValue={this.state.house_type}
                      style={{
                        height: 50,
                        width: "100%",
                        borderWidth: 0.5,
                        borderStyle: "solid"
                      }}
                      onValueChange={(itemValue, itemIndex) =>
                        this.setState({ house_type: itemValue })
                      }
                    >
                      <Picker.Item color="grey" label="House Type" value="0" />
                      <Picker.Item
                        color="grey"
                        label="1 bedroom flat"
                        value="1"
                      />
                      <Picker.Item
                        color="grey"
                        label="2 bedroom flat"
                        value="2"
                      />
                      <Picker.Item
                        color="grey"
                        label="3 bedroom flat"
                        value="3"
                      />
                      <Picker.Item
                        color="grey"
                        label="4 bedroom flat"
                        value="4"
                      />
                      <Picker.Item
                        color="grey"
                        label="5 bedroom flat"
                        value="5"
                      />
                      <Picker.Item
                        color="grey"
                        label="6 bedroom flat"
                        value="6"
                      />
                      <Picker.Item
                        color="grey"
                        label="7 bedroom flat"
                        value="7"
                      />
                      <Picker.Item
                        color="grey"
                        label="8 bedroom flat"
                        value="8"
                      />
                      <Picker.Item
                        color="grey"
                        label="9 bedroom flat"
                        value="9"
                      />
                      <Picker.Item
                        color="grey"
                        label="10 bedroom flat"
                        value="10"
                      />
                      <Picker.Item
                        color="grey"
                        label="11 bedroom flat"
                        value="11"
                      />
                      <Picker.Item
                        color="grey"
                        label="12 bedroom flat"
                        value="12"
                      />
                    </Picker>
                  </View>
                  {Number(house_type) ? (
                    <TouchableNativeFeedback onPress={this.toggle1}>
                      <View style={styles.btn}>
                        <Text
                          style={{
                            color: "grey",
                            fontSize: 18
                            // fontWeight: 'bold',
                          }}
                        >
                          Fumigation Type
                        </Text>
                        {this.state.visible1 ? (
                          <FontAwesome
                            name="chevron-up"
                            color="grey"
                            size={12}
                            style={styles.delete}
                          />
                        ) : (
                          <FontAwesome
                            name="chevron-down"
                            color="grey"
                            size={12}
                            style={styles.delete}
                          />
                        )}
                      </View>
                    </TouchableNativeFeedback>
                  ) : (
                    <Text style={{ color: "grey", marginLeft: 10 }}>
                      Please select a house type to load services...
                    </Text>
                  )}

                  {this.state.visible1 && (
                    <View style={{ width: "100%", alignSelf: "center" }}>
                      <CheckBox
                        style={styles.checkbox}
                        onClick={() => {
                          this.setState(
                            {
                              isChecked_inter_bedBug: !isChecked_inter_bedBug
                            },
                            () => this.handle_inter_bedBug()
                          );
                        }}
                        isChecked={isChecked_inter_bedBug}
                        leftText={"Bed bug"}
                      />
                      <CheckBox
                        style={styles.checkbox}
                        onClick={() => {
                          this.setState(
                            {
                              isChecked_inter_mosquito: !isChecked_inter_mosquito
                            },
                            () => this.handle_inter_mosquito()
                          );
                        }}
                        isChecked={isChecked_inter_mosquito}
                        leftText={"Mosquito"}
                      />
                      <CheckBox
                        style={styles.checkbox}
                        onClick={() => {
                          this.setState({
                            isChecked2: !this.state.isChecked2
                          });
                        }}
                        onClick={() => {
                          this.setState(
                            {
                              isChecked_inter_termite: !isChecked_inter_termite
                            },
                            () => this.handle_inter_termite()
                          );
                        }}
                        isChecked={isChecked_inter_termite}
                        leftText={"Termite"}
                      />
                      <CheckBox
                        style={styles.checkbox}
                        onClick={() => {
                          this.setState({
                            isChecked3: !this.state.isChecked3
                          });
                        }}
                        onClick={() => {
                          this.setState(
                            {
                              isChecked_inter_rats: !isChecked_inter_rats
                            },
                            () => this.handle_inter_rats()
                          );
                        }}
                        isChecked={isChecked_inter_rats}
                        leftText={"Rats"}
                      />
                    </View>
                  )}
                </View>
                <Divider
                  style={{
                    backgroundColor: "#ddd",
                    elevation: 0.3,
                    width: "95%",
                    alignSelf: "center",
                    margin: 30
                  }}
                ></Divider>
                <View style={{ alignSelf: "center", width: "90%" }}>
                  <Text
                    style={{
                      color: "#0b8647",
                      fontSize: 21,
                      alignSelf: "flex-start",
                      fontWeight: "bold",
                      marginBottom: 10
                    }}
                  >
                    Exterior Fumigation
                  </Text>
                  <View
                    style={{
                      alignSelf: "center",
                      width: "100%"
                      // borderWidth: 0.75,
                      // borderColor: '#0b8467',
                    }}
                  >
                    <Picker
                      selectedValue={this.state.land_plot}
                      style={{
                        height: 50,
                        width: "100%"
                      }}
                      onValueChange={(itemValue, itemIndex) =>
                        this.setState({ land_plot: itemValue })
                      }
                    >
                      <Picker.Item color="grey" label="Land Plot" value="0" />
                      <Picker.Item color="grey" label="1 plot" value="1" />
                      <Picker.Item color="grey" label="2 plots" value="2" />
                      <Picker.Item color="grey" label="3 plots" value="3" />
                      <Picker.Item color="grey" label="4 plots" value="4" />
                      <Picker.Item color="grey" label="5 plots" value="5" />
                      <Picker.Item color="grey" label="6 plots" value="6" />
                      <Picker.Item color="grey" label="7 plots" value="7" />
                      <Picker.Item color="grey" label="8 plots" value="8" />
                      <Picker.Item color="grey" label="9 plots" value="9" />
                      <Picker.Item color="grey" label="10 plots" value="10" />
                      <Picker.Item color="grey" label="11 plots" value="11" />
                      <Picker.Item color="grey" label="12 plots" value="12" />
                    </Picker>
                  </View>
                  {Number(land_plot) ? (
                    <TouchableNativeFeedback onPress={this.toggle2}>
                      <View style={styles.btn}>
                        <Text
                          style={{
                            color: "grey",
                            fontSize: 18
                            // fontWeight: 'bold',
                          }}
                        >
                          Fumigation Type
                        </Text>
                        {this.state.visible2 ? (
                          <FontAwesome
                            name="chevron-up"
                            color="grey"
                            size={12}
                            style={styles.delete}
                          />
                        ) : (
                          <FontAwesome
                            name="chevron-down"
                            color="grey"
                            size={12}
                            style={styles.delete}
                          />
                        )}
                      </View>
                    </TouchableNativeFeedback>
                  ) : (
                    <Text style={{ color: "grey", marginLeft: 10 }}>
                      Please select land Plot to load services...
                    </Text>
                  )}

                  {this.state.visible2 && (
                    <View style={{ width: "100%", alignSelf: "center" }}>
                      <CheckBox
                        style={styles.checkbox}
                        onClick={() => {
                          this.setState(
                            {
                              isChecked_exter_mosquito: !isChecked_exter_mosquito
                            },
                            () => this.handle_exter_mosquito()
                          );
                        }}
                        isChecked={isChecked_exter_mosquito}
                        leftText={"Mosquito"}
                      />
                      <CheckBox
                        style={styles.checkbox}
                        onClick={() => {
                          this.setState(
                            {
                              isChecked_exter_termite: !isChecked_exter_termite
                            },
                            () => this.handle_exter_termite()
                          );
                        }}
                        isChecked={isChecked_exter_termite}
                        leftText={"Termite"}
                      />
                      <CheckBox
                        style={styles.checkbox}
                        onClick={() => {
                          this.setState(
                            {
                              isChecked_exter_rats: !isChecked_exter_rats
                            },
                            () => this.handle_exter_rats()
                          );
                        }}
                        isChecked={isChecked_exter_rats}
                        leftText={"Rats"}
                      />
                      <CheckBox
                        style={styles.checkbox}
                        onClick={() => {
                          this.setState(
                            {
                              isChecked_exter_snakes: !isChecked_exter_snakes
                            },
                            () => this.handle_exter_snakes()
                          );
                        }}
                        isChecked={isChecked_exter_snakes}
                        leftText={"Snakes"}
                      />
                    </View>
                  )}
                </View>
                <Divider
                  style={{
                    backgroundColor: "#ddd",
                    elevation: 0.3,
                    width: "95%",
                    alignSelf: "center",
                    margin: 30
                  }}
                ></Divider>
                <ServiceBar
                  getDate={this.handleDateChange}
                  navigation={this.props.navigation}
                  Address={this.handleAddressChange}
                />
                {Number(isChecked_inter_bedBug) ||
                Number(isChecked_inter_mosquito) ||
                Number(isChecked_inter_termite) ||
                Number(isChecked_inter_rats) ||
                Number(isChecked_exter_snakes) ||
                Number(isChecked_exter_mosquito) ||
                Number(isChecked_exter_termite) ||
                Number(isChecked_exter_rats) ? (
                  selectedStartDate && address ? (
                    <TouchableNativeFeedback
                      onPress={() =>
                        this.props.navigation.navigate("FumigateSummary", {
                          item: this.state
                        })
                      }
                    >
                      <View style={styles.subscribe}>
                        <Text style={styles.subscribeTitle}>Proceed</Text>
                      </View>
                    </TouchableNativeFeedback>
                  ) : (
                    <Text
                      style={{
                        color: "red",
                        marginBottom: 10,
                        textAlign: "center"
                      }}
                    >
                      Please fill in the service address and date
                    </Text>
                  )
                ) : null}
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </Root>
    );
  }
}

export default ServiceForm;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center"
  },
  headerMain: {
    width: "100%",
    backgroundColor: "#0b8647",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20
  },
  header: {
    width: "95%",
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around"
  },
  goBack: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 35,
    height: 35,
    width: 35
  },
  headerTitle: {
    fontSize: 25,
    marginTop: -5,
    color: "white",
    fontWeight: "bold"
  },
  quote: {
    padding: 10,
    backgroundColor: "white",
    fontSize: 18
  },
  body: {
    flex: 1,
    width: "100%",
    flexDirection: "column",
    justifyContent: "space-around"
  },
  delete: {
    padding: 8
  },
  bath: {
    height: 50,
    width: "20%",
    borderWidth: 2,
    borderColor: "blue"
  },
  title: {
    fontSize: 16,
    color: "white",
    paddingTop: 10
  },
  title1: {
    fontSize: 25,
    color: "white"
  },
  checkbox: {
    flex: 1,
    padding: 10,
    width: "100%",
    alignSelf: "center"
  },
  subscribe: {
    marginTop: 15,
    borderRadius: 10,
    backgroundColor: "#0b8647",
    fontSize: 20,
    width: "80%",
    alignSelf: "center",
    marginBottom: 20
  },
  subscribeTitle: {
    fontSize: 20,
    padding: 15,
    fontWeight: "bold",
    color: "white",
    alignSelf: "center"
  },
  delete: {
    padding: 8
  },
  btn: {
    width: "95%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
    alignSelf: "center"
  }
});
