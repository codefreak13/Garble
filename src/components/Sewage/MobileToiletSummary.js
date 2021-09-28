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

class MobileToiletSummary extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    return {
      title: "Mobile Toilet Rentals Summary",
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
      selectedStartDate,
      single_economy_class,
      double_economy_class,
      single_vip_class,
      double_vip_class,
      subtotal,
      single_economy_service_duration,
      double_economy_service_duration,
      single_vip_service_duration,
      double_vip_service_duration,
      single_economy_class_value,
      double_economy_class_value,
      single_vip_class_value,
      double_vip_class_value,
      address
    } = item;
    console.log(boolean.valueOf(single_economy_class), "kkkkkk");
    return (
      <Root navigation={this.props.navigation}>
        <ScrollView
          keyboardShouldPersistTaps={"handled"}
          contentContainerStyle={{ flexGrow: 1, backgroundColor: "#EFF0F1" }}
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
                    width: "25%",
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
                    Toilet type
                  </Text>
                </View>
                <View
                  style={{
                    width: "25%",
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
                    Quantity
                  </Text>
                </View>
                <View
                  style={{
                    width: "25%",
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
                    Duration
                  </Text>
                </View>
                <View style={{ width: "25%" }}>
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
              {Number(single_economy_class) &&
              Number(single_economy_service_duration) ? (
                <View style={styles.cardView}>
                  <View style={styles.cardSide1}>
                    <View>
                      <View style={styles.itemFlex}>
                        <Text style={styles.cardItem}>Single Economy</Text>
                        <View
                          style={{
                            flexDirection: "row",
                            width: "95%",
                            justifyContent: "space-around"
                          }}
                        >
                          <Text style={styles.cardItemText3}>
                            {single_economy_class}
                          </Text>
                          <Text style={styles.cardItemText3}>
                            {single_economy_service_duration === 1
                              ? single_economy_service_duration + " day"
                              : single_economy_service_duration + " days"}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                  <View style={styles.cardAmount}>
                    <Text style={styles.cardAmountText}>
                      {single_economy_class &&
                        "\u20A6" + Number(single_economy_class_value)}
                    </Text>
                  </View>
                </View>
              ) : null}

              {/* card 2 */}
              {Number(double_economy_class) &&
              Number(double_economy_service_duration) ? (
                <View style={styles.cardView}>
                  <View style={styles.cardSide1}>
                    <View>
                      <View style={styles.itemFlex}>
                        <Text style={styles.cardItem}>Double Economy</Text>
                        <View
                          style={{
                            flexDirection: "row",
                            width: "95%",
                            justifyContent: "space-around"
                          }}
                        >
                          <Text style={styles.cardItemText3}>
                            {double_economy_class}
                          </Text>
                          <Text style={styles.cardItemText3}>
                            {double_economy_service_duration === 1
                              ? double_economy_service_duration + " day"
                              : double_economy_service_duration + " days"}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                  <View style={styles.cardAmount}>
                    <Text style={styles.cardAmountText}>
                      {single_economy_class &&
                        "\u20A6" + Number(double_economy_class_value)}
                    </Text>
                  </View>
                </View>
              ) : null}

              {/* card 3 */}
              {Number(single_vip_class) &&
              Number(single_vip_service_duration) ? (
                <View style={styles.cardView}>
                  <View style={styles.cardSide1}>
                    <View>
                      <View style={styles.itemFlex}>
                        <Text style={styles.cardItem}>Single VIP</Text>
                        <View
                          style={{
                            flexDirection: "row",
                            width: "95%",
                            justifyContent: "space-around"
                          }}
                        >
                          <Text style={styles.cardItemText3}>
                            {single_vip_class}
                          </Text>
                          <Text style={styles.cardItemText3}>
                            {single_vip_service_duration === 1
                              ? single_vip_service_duration + " day"
                              : single_vip_service_duration + " days"}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                  <View style={styles.cardAmount}>
                    <Text style={styles.cardAmountText}>
                      {single_economy_class &&
                        "\u20A6" + Number(single_vip_class_value)}
                    </Text>
                  </View>
                </View>
              ) : null}

              {/* card 4 */}
              {Number(double_vip_class) &&
              Number(double_vip_service_duration) ? (
                <View style={styles.cardView}>
                  <View style={styles.cardSide1}>
                    <View>
                      <View style={styles.itemFlex}>
                        <Text style={styles.cardItem}>Double VIP</Text>
                        <View
                          style={{
                            flexDirection: "row",
                            width: "95%",
                            justifyContent: "space-around"
                          }}
                        >
                          <Text style={styles.cardItemText3}>
                            {double_vip_class}
                          </Text>
                          <Text style={styles.cardItemText3}>
                            {double_vip_service_duration === 1
                              ? double_vip_service_duration + " day"
                              : double_vip_service_duration + " days"}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                  <View style={styles.cardAmount}>
                    <Text style={styles.cardAmountText}>
                      {single_economy_class &&
                        "\u20A6" + Number(double_vip_class_value)}
                    </Text>
                  </View>
                </View>
              ) : null}
            </View>
          </View>
          <View style={{ width: "90%", alignSelf: "center" }}>
            <View style={styles.itemFlex1}>
              <Text style={styles.cardItemText3}>Service Address: </Text>
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
              <Text style={styles.cardItemText3}>Service Date: </Text>
              <Text style={{ fontSize: 16 }}>
                {selectedStartDate && selectedStartDate.toString().slice(0, 16)}
              </Text>
            </View>
            <View style={styles.itemFlex1}>
              <Text style={styles.cardItemText3}>Service Cost: </Text>
              <Text
                style={[{ marginRight: 0, fontWeight: "bold", fontSize: 22 }]}
              >
                {"\u20A6" + subtotal}
              </Text>
            </View>
          </View>
          <TouchableNativeFeedback
            onPress={() =>
              this.props.navigation.navigate("SewageToiletPay", {
                item: item
              })
            }
          >
            <View style={styles.subscribe}>
              <Text style={styles.subscribeTitle}>Subscribe</Text>
            </View>
          </TouchableNativeFeedback>
        </ScrollView>
      </Root>
    );
  }
}

export default MobileToiletSummary;

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
  itemFlex: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%"
  },
  itemFlex1: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "center",
    width: "100%"
  },
  cardItem: {
    fontWeight: "normal",
    color: "#666",
    fontSize: 14,
    width: "40%"
  },
  cardItemText2: {
    fontSize: 16
  },
  cardItemText3: {
    fontSize: 16,
    color: "#0b8647"
  },
  cardAmount: {
    width: "25%",
    backgroundColor: "#0b8647",
    justifyContent: "center",
    alignItems: "flex-end"
  },
  cardAmountText: {
    color: "white",
    fontSize: 18,
    alignSelf: "center",
    display: "flex"
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
