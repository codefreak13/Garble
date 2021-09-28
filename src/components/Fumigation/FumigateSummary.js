import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableNativeFeedback,
  StatusBar
} from "react-native";
import Root from "../Utils/Root";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { rates } from "./rates";
import { boolean } from "yup";
import { Mutation } from "react-apollo";
import { FUMIGATION_QUOTE } from "../QueryAndMutation";
import { Linking } from "react-native";
import ShowMessage, { type } from "../toster/ShowMessage";

class SummaryCleaning extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    return {
      title: "Fumigation Service Summary",
      headerStyle: {
        backgroundColor: "#0b8647"
      },
      headerTintColor: "white",
      headerTitleStyle: {
        fontSize: 18,
        flex: 1
      },

      headerLeft: (
        <TouchableNativeFeedback
          onPress={() => navigation.goBack()}
          background={TouchableNativeFeedback.Ripple("#0b8647")}
        >
          <View
            style={{
              margin: 20,
              width: 35,
              height: 35,
              borderRadius: 35,
              backgroundColor: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <FontAwesome
              name="arrow-left"
              color="#0b8647"
              size={20}
              style={{ width: 20 }}
            />
          </View>
        </TouchableNativeFeedback>
      )
    };
  };
  render() {
    const { item } = this.props.navigation.state.params;
    const {
      house_type,
      land_plot,
      fumigation_type,
      isChecked_inter_bedBug,
      isChecked_inter_mosquito,
      isChecked_inter_termite,
      isChecked_inter_rats,
      isChecked_exter_mosquito,
      isChecked_exter_termite,
      isChecked_exter_rats,
      isChecked_exter_snakes,
      selectedStartDate,
      subtotal,
      address
    } = item;
    console.log(boolean.valueOf(house_type), "kkkkkk");
    return (
      <Mutation mutation={FUMIGATION_QUOTE}>
        {(fumigationQuote, { loading }) => (
          <Root navigation={this.props.navigation}>
            <ScrollView
              keyboardShouldPersistTaps={"handled"}
              contentContainerStyle={{
                flexGrow: 1,
                backgroundColor: "#EFF0F1"
              }}
            >
              <View style={styles.container}>
                <View
                  style={{
                    marginBottom: 20
                  }}
                >
                  {/* header */}
                  <View style={styles.title}>
                    <View
                      style={{
                        width: "50%",
                        borderRightColor: "white",
                        borderRightWidth: 0.3
                      }}
                    >
                      <Text
                        style={{
                          color: "yellow",
                          alignSelf: "center",
                          padding: 10
                        }}
                      >
                        Service type
                      </Text>
                    </View>
                    <View style={{ width: "50%" }}>
                      <Text
                        style={{
                          color: "yellow",
                          alignSelf: "center",
                          padding: 10
                        }}
                      >
                        Amount
                      </Text>
                    </View>
                  </View>
                  {/* Card 1 */}
                  {Number(house_type) ? (
                    <View style={styles.cardView}>
                      <View style={styles.cardSide1}>
                        <Text style={styles.cardTitle}>
                          Interior Fumigation
                        </Text>
                        <View>
                          {Number(house_type) ? (
                            <View style={styles.itemFlex2}>
                              <Text style={styles.cardItem}>No. of rooms</Text>
                              <Text style={styles.cardItemText2}>
                                {house_type}
                              </Text>
                            </View>
                          ) : null}
                          <Text style={styles.cardTitle1}>Fumigation Type</Text>
                          {isChecked_inter_bedBug ? (
                            <View style={styles.itemFlex}>
                              <Text style={styles.cardItemText3}>
                                Bed bug Extermination
                              </Text>
                              <Text style={styles.cardItemText2}>
                                {isChecked_inter_bedBug &&
                                  "\u20A6" +
                                    Number(
                                      house_type * rates.inter_bed_bug_rate
                                    )}
                              </Text>
                            </View>
                          ) : null}
                          {isChecked_inter_mosquito ? (
                            <View style={styles.itemFlex}>
                              <Text style={styles.cardItemText3}>
                                Mosquito Extermination
                              </Text>
                              <Text style={styles.cardItemText2}>
                                {isChecked_inter_mosquito &&
                                  "\u20A6" +
                                    Number(
                                      house_type * rates.inter_mosquito_rate
                                    )}
                              </Text>
                            </View>
                          ) : null}
                          {isChecked_inter_termite ? (
                            <View style={styles.itemFlex}>
                              <Text style={styles.cardItemText3}>
                                Termite Extermination
                              </Text>
                              <Text style={styles.cardItemText2}>
                                {isChecked_inter_termite &&
                                  "\u20A6" +
                                    Number(
                                      house_type * rates.inter_termite_rate
                                    )}
                              </Text>
                            </View>
                          ) : null}
                          {isChecked_inter_rats ? (
                            <View style={styles.itemFlex}>
                              <Text style={styles.cardItemText3}>
                                Rat Extermination
                              </Text>
                              <Text style={styles.cardItemText2}>
                                {isChecked_inter_rats &&
                                  "\u20A6" +
                                    Number(house_type * rates.inter_rats_rate)}
                              </Text>
                            </View>
                          ) : null}
                        </View>
                      </View>
                      {/* <View style={styles.cardAmount}>  
                  </View> */}
                    </View>
                  ) : null}

                  {/* Card 2 */}
                  {Number(land_plot) || Number(land_plot) ? (
                    <View style={styles.cardView}>
                      <View style={styles.cardSide1}>
                        <Text style={styles.cardTitle}>
                          EXTERIOR FUMIGATION
                        </Text>
                        <View>
                          {Number(land_plot) ? (
                            <View style={styles.itemFlex2}>
                              <Text style={styles.cardItem}>
                                Size of property:
                              </Text>
                              <Text style={styles.cardItemText2}>
                                {land_plot == 1
                                  ? land_plot + " plot"
                                  : land_plot + " plots"}
                              </Text>
                            </View>
                          ) : null}
                          <Text style={styles.cardTitle1}>Fumigation Type</Text>
                          {isChecked_exter_mosquito ? (
                            <View style={styles.itemFlex}>
                              <Text style={styles.cardItemText3}>
                                Mosquito Extermination
                              </Text>
                              <Text style={styles.cardItemText2}>
                                {isChecked_inter_mosquito &&
                                  "\u20A6" +
                                    Number(
                                      land_plot * rates.exter_mosquito_rate
                                    )}
                              </Text>
                            </View>
                          ) : null}
                          {isChecked_exter_termite ? (
                            <View style={styles.itemFlex}>
                              <Text style={styles.cardItemText3}>
                                Termite Extermination
                              </Text>
                              <Text style={styles.cardItemText2}>
                                {isChecked_exter_termite &&
                                  "\u20A6" +
                                    Number(
                                      land_plot * rates.exter_termite_rate
                                    )}
                              </Text>
                            </View>
                          ) : null}
                          {isChecked_exter_rats ? (
                            <View style={styles.itemFlex}>
                              <Text style={styles.cardItemText3}>
                                Rat Extermination
                              </Text>
                              <Text style={styles.cardItemText2}>
                                {isChecked_exter_rats &&
                                  "\u20A6" +
                                    Number(land_plot * rates.exter_rats_rate)}
                              </Text>
                            </View>
                          ) : null}
                          {isChecked_exter_snakes ? (
                            <View style={styles.itemFlex}>
                              <Text style={styles.cardItemText3}>
                                Snakes Extermination
                              </Text>
                              <Text style={styles.cardItemText2}>
                                {isChecked_exter_snakes &&
                                  "\u20A6" +
                                    Number(land_plot * rates.exter_snakes_rate)}
                              </Text>
                            </View>
                          ) : null}
                        </View>
                      </View>
                    </View>
                  ) : null}
                </View>
              </View>
              <View style={{ width: "90%", alignSelf: "center" }}>
                <View style={styles.itemFlex1}>
                  <Text style={styles.cardItemText}>Service Address: </Text>
                  <View
                    style={{
                      width: "70%",
                      alignSelf: "flex-end",
                      alignItems: "flex-end",
                      paddingRight: 10
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 16
                      }}
                    >
                      {address.address}
                    </Text>
                  </View>
                </View>
                <View style={styles.itemFlex1}>
                  <Text style={styles.cardItemText}>Service Date: </Text>
                  <Text style={{ fontSize: 16 }}>
                    {selectedStartDate &&
                      selectedStartDate.toString().slice(0, 16)}
                  </Text>
                </View>
                <View style={styles.itemFlex1}>
                  <Text style={styles.cardItemText}>Service Cost: </Text>
                  <Text
                    style={[
                      { marginRight: 0, fontWeight: "bold", fontSize: 22 }
                    ]}
                  >
                    {"\u20A6" + subtotal}
                  </Text>
                </View>
              </View>
              <TouchableNativeFeedback
                onPress={
                  () =>
                    this.props.navigation.navigate("FumiPay", { item: item })
                  // this.props.navigation.navigate('SummaryCleaning', {
                  //   item: this.state,
                  // })
                }
              >
                <View style={styles.subscribe}>
                  <Text style={styles.subscribeTitle}>Subscribe</Text>
                </View>
              </TouchableNativeFeedback>
            </ScrollView>
          </Root>
        )}
      </Mutation>
    );
  }
}

export default SummaryCleaning;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginTop: 10
  },
  title: {
    flexDirection: "row",
    backgroundColor: "#0b8647",
    marginBottom: 10
  },
  cardView: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
    borderBottomWidth: 2.5,
    borderBottomColor: "#EFF0F1"
  },
  cardSide1: {
    padding: 10,
    flex: 4
  },
  cardTitle: {
    letterSpacing: 0.3,
    fontSize: 18,
    textDecorationStyle: "solid",
    marginBottom: 5,
    color: "#0b8647",
    fontWeight: "bold"
  },
  cardTitle1: {
    letterSpacing: 0.7,
    fontSize: 16,
    textDecorationStyle: "solid",
    marginBottom: 5,
    color: "#0b8647",
    fontWeight: "bold",
    marginTop: 5
  },
  itemFlex: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "center",
    width: "100%"
  },
  itemFlex1: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "center",
    width: "100%"
  },
  itemFlex2: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "50%"
  },
  cardItem: {
    fontWeight: "normal",
    color: "#666"
  },
  cardItemText: {
    fontSize: 16,
    color: "#0b8647"
  },
  cardItemText2: {
    fontSize: 16,
    color: "#0b8647"
  },
  cardItemText3: {
    fontSize: 16,
    color: "#666"
  },
  cardAmount: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "flex-end",
    alignItems: "flex-end"
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
  }
});
