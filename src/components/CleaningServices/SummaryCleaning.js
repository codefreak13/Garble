import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableNativeFeedback,
  StatusBar,
  Alert
} from "react-native";
import Root from "../Utils/Root";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { rates } from "./rates";
import { boolean } from "yup";
import { Mutation, Query } from "react-apollo";
import { CleanQuote } from "../QueryAndMutation";
import { Linking } from "react-native";
// import { PaystackPop } from './paystack-options';
class SummaryCleaning extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    return {
      title: "Cleaning Service Summary",
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
      standard_bedroom,
      standard_bathroom,
      post_standard_bedroom,
      post_standard_bathroom,
      Upholstery_qty,
      marble_rooms,
      tank_size,
      tank_qty,
      standard_size,
      large_size,
      largest_size,
      lawn_plots,
      bush_plots,
      selectedStartDate,
      subtotal,
      address
    } = item;

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
              {Number(standard_bedroom) || Number(standard_bathroom) ? (
                <View style={styles.cardView}>
                  <View style={styles.cardSide1}>
                    <Text style={styles.cardTitle}>Standard Cleaning</Text>
                    <View>
                      {Number(standard_bedroom) ? (
                        <View style={styles.itemFlex}>
                          <Text style={styles.cardItem}>No. of rooms</Text>
                          <Text style={styles.cardItemText2}>
                            {standard_bedroom}
                          </Text>
                        </View>
                      ) : null}
                      {Number(standard_bathroom) ? (
                        <View style={styles.itemFlex}>
                          <Text style={styles.cardItem}>No. of baths</Text>
                          <Text style={styles.cardItemText2}>
                            {standard_bathroom}
                          </Text>
                        </View>
                      ) : null}
                    </View>
                  </View>
                  <View style={styles.cardAmount}>
                    <Text style={styles.cardAmountText}>
                      {"\u20A6" +
                        Number(
                          standard_bedroom * rates.standard_bedroom_rate +
                            standard_bathroom * rates.standard_bathroom_rate
                        )}
                    </Text>
                  </View>
                </View>
              ) : null}

              {/* Card 2 */}
              {Number(post_standard_bedroom) ||
              Number(post_standard_bathroom) ? (
                <View style={styles.cardView}>
                  <View style={styles.cardSide1}>
                    <Text style={styles.cardTitle}>
                      Post construction/Moving Out/Renovation Cleaning
                    </Text>
                    <View>
                      {Number(post_standard_bedroom) ? (
                        <View style={styles.itemFlex}>
                          <Text style={styles.cardItem}>No. of rooms</Text>
                          <Text style={styles.cardItemText2}>
                            {post_standard_bedroom}
                          </Text>
                        </View>
                      ) : null}
                      {Number(post_standard_bathroom) ? (
                        <View style={styles.itemFlex}>
                          <Text style={styles.cardItem}>No. of baths</Text>
                          <Text style={styles.cardItemText2}>
                            {post_standard_bathroom}
                          </Text>
                        </View>
                      ) : null}
                    </View>
                  </View>
                  <View style={styles.cardAmount}>
                    <Text style={styles.cardAmountText}>
                      {"\u20A6" +
                        Number(
                          post_standard_bedroom *
                            rates.post_standard_bedroom_rate +
                            post_standard_bathroom *
                              rates.post_standard_bathroom_rate
                        )}
                    </Text>
                  </View>
                </View>
              ) : null}

              {/* Card 3 */}
              {Number(Upholstery_qty) ? (
                <View style={styles.cardView}>
                  <View style={styles.cardSide1}>
                    <Text style={styles.cardTitle}>Upholstery Cleaning</Text>
                    <View style={styles.itemFlex}>
                      <Text style={styles.cardItem}>Quantity </Text>
                      <Text style={styles.cardItemText2}>{Upholstery_qty}</Text>
                    </View>
                  </View>
                  <View style={styles.cardAmount}>
                    <Text style={styles.cardAmountText}>
                      {"\u20A6" + Upholstery_qty * rates.Upholstery_qty_rate}
                    </Text>
                  </View>
                </View>
              ) : null}

              {/* Card 4*/}
              {Number(marble_rooms) ? (
                <View style={styles.cardView}>
                  <View style={styles.cardSide1}>
                    <Text style={styles.cardTitle}>Marble Restoration</Text>
                    <View style={styles.itemFlex}>
                      <Text style={styles.cardItem}>No. of rooms </Text>
                      <Text style={styles.cardItemText2}>{marble_rooms}</Text>
                    </View>
                  </View>
                  <View style={styles.cardAmount}>
                    <Text style={styles.cardAmountText}>
                      {"\u20A6" + marble_rooms * rates.marble_rooms_rate}
                    </Text>
                  </View>
                </View>
              ) : null}

              {/* Card 5 */}
              {Number(standard_size) ||
              Number(large_size) ||
              Number(largest_size) ? (
                <View style={styles.cardView}>
                  <View style={styles.cardSide1}>
                    <Text style={styles.cardTitle}>Overhead Tank</Text>
                    <View style={{ justifyContent: "center" }}>
                      <View style={styles.itemFlex2}>
                        <Text style={styles.cardItemText3}>Tank Size</Text>
                        <Text style={styles.cardItemText3}>Quantity</Text>
                      </View>
                      {Number(standard_size) ? (
                        <View style={styles.itemFlex}>
                          <Text style={styles.cardItem}>Standard </Text>
                          <Text style={styles.cardItemText2}>
                            {standard_size}
                          </Text>
                        </View>
                      ) : null}
                      {Number(large_size) ? (
                        <View style={styles.itemFlex}>
                          <Text style={styles.cardItem}>Large </Text>
                          <Text style={styles.cardItemText2}>{large_size}</Text>
                        </View>
                      ) : null}
                      {Number(largest_size) ? (
                        <View style={styles.itemFlex}>
                          <Text style={styles.cardItem}>Largest </Text>
                          <Text style={styles.cardItemText2}>
                            {largest_size}
                          </Text>
                        </View>
                      ) : null}
                    </View>
                  </View>
                  <View style={styles.cardAmount1}>
                    {Number(standard_size) ? (
                      <Text style={styles.cardAmountText1}>
                        {"\u20A6" + standard_size * rates.standard_size_rate}
                      </Text>
                    ) : null}
                    {Number(large_size) ? (
                      <Text style={styles.cardAmountText1}>
                        {"\u20A6" + large_size * rates.large_size_rate}
                      </Text>
                    ) : null}
                    {Number(largest_size) ? (
                      <Text style={styles.cardAmountText1}>
                        {"\u20A6" + largest_size * rates.largest_size_rate}
                      </Text>
                    ) : null}
                  </View>
                </View>
              ) : null}

              {/* Card 6*/}
              {Number(lawn_plots) ? (
                <View style={styles.cardView}>
                  <View style={styles.cardSide1}>
                    <Text style={styles.cardTitle}>Lawn Mowing</Text>
                    <View style={styles.itemFlex}>
                      <Text style={styles.cardItem}>No. of plots </Text>
                      <Text style={styles.cardItemText2}>{lawn_plots}</Text>
                    </View>
                  </View>
                  <View style={styles.cardAmount}>
                    <Text style={styles.cardAmountText}>
                      {"\u20A6" + lawn_plots * rates.lawn_plots_rate}
                    </Text>
                  </View>
                </View>
              ) : null}

              {/* Card 7 */}
              {Number(bush_plots) ? (
                <View style={styles.cardView}>
                  <View style={styles.cardSide1}>
                    <Text style={styles.cardTitle}>Bush Clearing</Text>
                    <View style={styles.itemFlex}>
                      <Text style={styles.cardItem}>No. of plots </Text>
                      <Text style={styles.cardItemText2}>{bush_plots}</Text>
                    </View>
                  </View>
                  <View style={styles.cardAmount}>
                    <Text style={styles.cardAmountText}>
                      {"\u20A6" + bush_plots * rates.bush_plots_rate}
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
            onPress={() => {
              this.props.navigation.navigate("PayStack", { item: item });
            }}
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
  itemFlex: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "55%"
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
    width: "60%"
  },
  cardItem: {
    fontWeight: "normal",
    color: "#666"
  },
  cardItemText2: {
    fontSize: 16,
    color: "#0b8647"
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
  cardAmount1: {
    width: "25%",
    backgroundColor: "#0b8647",
    justifyContent: "flex-end",
    padding: 10
  },
  cardAmountText: {
    color: "white",
    fontSize: 18,
    alignSelf: "center",
    display: "flex"
  },
  cardAmountText1: {
    color: "white",
    alignSelf: "center",
    fontSize: 16,
    marginTop: -3
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
