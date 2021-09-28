import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableNativeFeedback,
  Image,
  ActivityIndicator
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Divider } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import { Mutation, Query } from "react-apollo";
import { CleanQuote, CLEANING_QUOTES, CURRENT_USER } from "../QueryAndMutation";
import * as yup from "yup";
import { Formik } from "formik";
import ShowMessage, { type } from "../toster/ShowMessage";
import ActivityIndicatorPage from "../Utils/ActivityIndicator";
import ErrorPage from "../ErrorPage";
import RNPaystack from "react-native-paystack";
RNPaystack.init({
  publicKey: "pk_test_52f42e9470105baf2b67e8619b5f52dd6dfc61b4"
});

class ServiceForm extends React.Component {
  state = {
    cardNum: "",
    cardExpiryMonth: "",
    cardExpiryYear: "",
    cardCvc: "",
    loading: false
  };
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    return {
      title: "Pay with Card",
      headerStyle: {
        backgroundColor: "#E8E8E8"
      },
      headerTintColor: "#727272",
      headerTitleStyle: {
        fontSize: 17,
        flex: 1,
        fontWeight: "bold"
      },

      headerLeft: (
        <View
          style={{
            marginLeft: 20
          }}
        >
          <Image
            source={require("../../assets/atm.png")}
            style={{ width: 35, height: 35 }}
          />
        </View>
      )
    };
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value
    });
  };

  render() {
    const validationSchema = yup.object().shape({
      cardNum: yup.string().required("Enter Card Number"),
      cardExpiryMonth: yup.number().required("Enter Card Expiry Month"),
      cardExpiryYear: yup.number().required("Enter Card Expiry Year"),
      cardCvc: yup.number().required("Enter Card CVC Number")
    });
    const { item } = this.props.navigation.state.params;

    return (
      <Query query={CURRENT_USER}>
        {({ loading, error, data }) => {
          if (loading) return <ActivityIndicatorPage />;
          if (error) return <ErrorPage navigation={this.props.navigation} />;
          const user = data.getCurrentUser;
          return (
            <Mutation
              mutation={CleanQuote}
              awaitRefetchQueries={true}
              refetchQueries={[{ query: CLEANING_QUOTES }]}
            >
              {(cleaningQuote, { loading }) => (
                <Formik
                  initialValues={{
                    cardNum: "",
                    cardExpiryMonth: "",
                    cardExpiryYear: "",
                    cardCvc: ""
                  }}
                  onSubmit={values => {
                    this.setState({ loading: true });
                    RNPaystack.chargeCard({
                      cardNumber: values.cardNum,
                      expiryMonth: values.cardExpiryMonth,
                      expiryYear: values.cardExpiryYear,
                      cvc: values.cardCvc,
                      amountInKobo: item.subtotal * 100,
                      email: user.email
                    })
                      .then(res => {
                        cleaningQuote({
                          variables: {
                            subscriptionType: "Cleaning Service",
                            standard_bedroom: Number(item.standard_bedroom),
                            standard_bathroom: Number(item.standard_bathroom),
                            post_standard_bedroom: Number(
                              item.post_standard_bedroom
                            ),
                            post_standard_bathroom: Number(
                              item.post_standard_bathroom
                            ),
                            Upholstery_qty: Number(item.Upholstery_qty),
                            marble_rooms: Number(item.marble_rooms),
                            tank_size: Number(item.tank_size),
                            tank_qty: Number(item.tank_qty),
                            standard_size: Number(item.standard_size),
                            large_size: Number(item.large_size),
                            largest_size: Number(item.largest_size),
                            lawn_plots: Number(item.lawn_plots),
                            bush_plots: Number(item.bush_plots),
                            selectedStartDate: item.selectedStartDate
                              .toString()
                              .slice(0, 16),
                            reference: res.reference,
                            status: "Successful",
                            subtotal: Number(item.subtotal),
                            serviceAddress: item.address.address
                          }
                        });
                        this.setState({ loading: false });
                        ShowMessage(type.DONE, "Transaction Successful");
                        this.props.navigation.navigate("CleaningSubscriptions");
                        return res;
                      })
                      .catch(error => {
                        this.setState({ loading: false });
                        const e = error.toString().split(":")[1];
                        ShowMessage(type.ERROR, e);
                        console.log(error);
                        console.log(error.message);
                        console.log(error.code);
                      });
                  }}
                  validationSchema={validationSchema}
                >
                  {({
                    values,
                    handleChange,
                    errors,
                    setFieldValue,
                    setFieldTouched,
                    touched,
                    isValid,
                    handleBlur,
                    handleSubmit
                  }) => (
                    <ScrollView keyboardShouldPersistTaps={"handled"}>
                      <View style={styles.main}>
                        <View style={{ alignSelf: "flex-end" }}>
                          <Text style={{ color: "#6C6C6C" }}>{user.email}</Text>
                          <Text
                            style={{ color: "#6C6C6C", alignSelf: "flex-end" }}
                          >
                            Pay
                            <Text
                              style={{ color: "#0b8647", fontWeight: "700" }}
                            >
                              {" \u20A6" + item.subtotal}
                            </Text>
                          </Text>
                        </View>
                        <Divider
                          style={{
                            backgroundColor: "#cacaca",
                            width: "100%",
                            margin: 30
                          }}
                        ></Divider>
                        <Text
                          style={{
                            fontSize: 20,
                            fontWeight: "bold",
                            paddingBottom: 30,
                            color: "#353E45"
                          }}
                        >
                          Enter your card details to pay
                        </Text>
                        <View
                          style={{
                            borderWidth: 1,
                            borderColor: "#85AECC",
                            borderRadius: 5,
                            width: "100%"
                          }}
                        >
                          <Text style={{ color: "#85AECC", margin: 3 }}>
                            CARD NUMBER
                          </Text>
                          <TextInput
                            value={values.cardNum}
                            onChangeText={handleChange("cardNum")}
                            onBlur={handleBlur("cardNum")}
                            name="cardNum"
                            keyboardType="number-pad"
                            placeholder="0000 0000 0000 0000"
                          ></TextInput>
                          {touched.cardNum && errors.cardNum && (
                            <Text style={{ fontSize: 10, color: "red" }}>
                              {errors.cardNum}
                            </Text>
                          )}
                        </View>
                        <View
                          style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            width: "100%",
                            marginTop: 30
                          }}
                        >
                          <View
                            style={{
                              borderWidth: 1,
                              borderColor: "#cacaca",
                              borderRadius: 5,
                              width: "48%"
                            }}
                          >
                            <Text style={{ margin: 3, color: "#A5A5A5" }}>
                              CARD EXPIRY
                            </Text>
                            <View
                              style={{
                                alignItems: "center",
                                paddingLeft: 5
                              }}
                            >
                              <TextInput
                                value={values.cardExpiryMonth}
                                onChangeText={handleChange("cardExpiryMonth")}
                                onBlur={handleBlur("cardExpiryMonth")}
                                name="cardExpiryMonth"
                                keyboardType="number-pad"
                                placeholder="MM"
                                maxLength={2}
                              />
                              <Text style={{ color: "#A5A5A5" }}>/</Text>
                              <TextInput
                                value={values.cardExpiryYear}
                                onChangeText={handleChange("cardExpiryYear")}
                                onBlur={handleBlur("cardExpiryYear")}
                                name="cardExpiryYear"
                                keyboardType="number-pad"
                                placeholder="YY"
                                maxLength={2}
                              />
                            </View>
                            {touched.cardExpiryYear &&
                              errors.cardExpiryYear && (
                                <Text style={{ fontSize: 10, color: "red" }}>
                                  {errors.cardExpiryYear}
                                </Text>
                              )}
                            {touched.cardExpiryMonth &&
                              errors.cardExpiryMonth && (
                                <Text style={{ fontSize: 10, color: "red" }}>
                                  {errors.cardExpiryMonth}
                                </Text>
                              )}
                          </View>
                          <View
                            style={{
                              borderWidth: 1,
                              borderColor: "#cacaca",
                              borderRadius: 5,
                              width: "48%"
                            }}
                          >
                            <Text style={{ margin: 3, color: "#A5A5A5" }}>
                              CVC
                            </Text>
                            <TextInput
                              value={values.cardCvc}
                              onChangeText={handleChange("cardCvc")}
                              onBlur={handleBlur("cardCvc")}
                              name="cardCvc"
                              keyboardType="number-pad"
                              placeholder="123"
                              maxLength={3}
                            ></TextInput>
                            {touched.cardCvc && errors.cardCvc && (
                              <Text style={{ fontSize: 10, color: "red" }}>
                                {errors.cardCvc}
                              </Text>
                            )}
                          </View>
                        </View>
                        <TouchableNativeFeedback onPress={handleSubmit}>
                          <View
                            style={{
                              backgroundColor: "#0b8647",
                              marginTop: 30,
                              width: "100%",
                              borderRadius: 5
                            }}
                          >
                            {this.state.loading ? (
                              <ActivityIndicator
                                size="small"
                                color="white"
                                style={{ padding: 13 }}
                              />
                            ) : (
                              <Text
                                style={{
                                  padding: 13,
                                  color: "white",
                                  fontSize: 20,
                                  alignSelf: "center",
                                  fontWeight: "700"
                                }}
                              >
                                Pay {"\u20A6"}
                                {item.subtotal}
                              </Text>
                            )}
                          </View>
                        </TouchableNativeFeedback>
                        <TouchableNativeFeedback
                          onPress={() => this.props.navigation.goBack()}
                        >
                          <View
                            style={{
                              backgroundColor: "#E8E8E8",
                              justifyContent: "space-around",
                              flexDirection: "row",
                              width: "40%",
                              borderRadius: 4,
                              marginTop: 30
                            }}
                          >
                            <FontAwesome
                              name="close"
                              color="black"
                              size={15}
                              style={{ padding: 10 }}
                            />
                            <Text style={{ padding: 10, color: "#4C535B" }}>
                              Cancel Payment
                            </Text>
                          </View>
                        </TouchableNativeFeedback>
                        <View
                          style={{
                            flexDirection: "row",
                            marginTop: 20,
                            alignItems: "center"
                          }}
                        >
                          <FontAwesome name="lock" color="#001B33" size={15} />
                          <View style={{ padding: 10 }}>
                            <Text
                              style={{
                                color: "#4C535B",
                                flexDirection: "row",
                                fontSize: 16
                              }}
                            >
                              Secured by{" "}
                              <Text
                                style={{
                                  color: "#001B33",
                                  fontWeight: "700",
                                  fontSize: 16
                                }}
                              >
                                paystack
                              </Text>
                            </Text>
                          </View>
                        </View>
                      </View>
                    </ScrollView>
                  )}
                </Formik>
              )}
            </Mutation>
          );
        }}
      </Query>
    );
  }
}

export default ServiceForm;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: "center",
    width: "90%",
    alignSelf: "center",
    marginTop: 20
  },
  bar: {
    flexDirection: "row",
    width: "80%",
    alignSelf: "center",
    alignItems: "center",
    padding: 5,
    borderRadius: 10,
    elevation: 0.9
  }
});
