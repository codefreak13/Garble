import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableNativeFeedback,
  KeyboardAvoidingView,
  ActivityIndicator,
  Picker,
  Image
} from "react-native";
import { Mutation } from "react-apollo";
import { UPDATE_PROFILE } from "../../src/helpers/mutations";
import { CURRENT_USER } from "./QueryAndMutation";
import { Formik } from "formik";
import FontAwesome from "react-native-vector-icons/FontAwesome";

class UpdateProfile extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    return {
      title: "Update Profile",
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
              padding: 7
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
      ),

      headerRight: (
        <TouchableNativeFeedback onPress={() => navigation.goBack()}>
          <View
            style={{
              paddingRight: 20.8
            }}
          >
            <Image
              source={require("../assets/profile.png")}
              style={{
                tintColor: "white",
                width: 22,
                height: 22
              }}
            />
          </View>
        </TouchableNativeFeedback>
      )
    };
  };

  state = {
    surname: "",
    firstname: "",
    password: "",
    state: "",
    city: "",
    phone: "",
    address: "",
    loading: false
  };

  render() {
    const { loading } = this.state;

    const user = this.props.navigation.getParam("user");
    return (
      <Mutation
        mutation={UPDATE_PROFILE}
        awaitRefetchQueries={true}
        refetchQueries={[
          {
            query: CURRENT_USER
          }
        ]}
      >
        {updateClient => (
          <Formik
            initialValues={{
              firstname: user.firstname,
              surname: user.surname,
              state: user.state,
              city: user.city,
              phone: user.phone,
              address: user.address
            }}
            onSubmit={values => {
              this.setState({ loading: true });
              updateClient({
                variables: {
                  id: user.id,
                  firstname: values.firstname,
                  surname: values.surname,
                  phone: values.phone,
                  address: values.address,
                  city: values.city,
                  state: values.state
                }
              })
                .then(res => {
                  if (res) {
                    this.setState({ loading: false });
                    this.props.navigation.navigate("Profile");
                  }
                })
                .catch(err => {
                  this.setState({ loading: false });
                  return err;
                });
            }}
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
              handleSubmit,
              onValueChange
            }) => (
              <>
                <KeyboardAvoidingView style={{ flex: 1 }}>
                  <ScrollView
                    keyboardShouldPersistTaps={"handled"}
                    contentContainerStyle={{
                      flexGrow: 1
                    }}
                  >
                    <View style={styles.main}>
                      <View style={styles.bar}>
                        <Text style={styles.titles}>Personal Information</Text>
                        <View style={styles.barItem}>
                          <Text style={{ color: "#0b8647", fontSize: 17 }}>
                            Firstname
                          </Text>
                          <TextInput
                            onChangeText={handleChange("firstname")}
                            onBlur={handleBlur("firstname")}
                            name="firstname"
                            value={values.firstname}
                            style={styles.textInput}
                          ></TextInput>
                        </View>
                        <View style={styles.barItem}>
                          <Text style={{ color: "#0b8647", fontSize: 17 }}>
                            Surname
                          </Text>
                          <TextInput
                            onChangeText={handleChange("surname")}
                            onBlur={handleBlur("surname")}
                            value={values.surname}
                            name="surname"
                            style={styles.textInput}
                          ></TextInput>
                        </View>
                        <Text style={styles.titles}>Contact Information</Text>
                        <View style={styles.barItem}>
                          <Text style={{ color: "#0b8647", fontSize: 17 }}>
                            Phone Number
                          </Text>
                          <TextInput
                            keyboardType="phone-pad"
                            onChangeText={handleChange("phone")}
                            onBlur={handleBlur("phone")}
                            value={values.phone}
                            name="phone"
                            style={styles.textInput}
                          ></TextInput>
                        </View>
                        <View style={styles.barItem}>
                          <Text style={{ color: "#0b8647", fontSize: 17 }}>
                            Address
                          </Text>
                          <TextInput
                            onChangeText={handleChange("address")}
                            onBlur={handleBlur("address")}
                            value={values.address}
                            name="address"
                            style={styles.textInput}
                          ></TextInput>
                        </View>
                        <View style={styles.barItem}>
                          <Text style={{ color: "#0b8647", fontSize: 17 }}>
                            City
                          </Text>
                          <TextInput
                            onChangeText={handleChange("city")}
                            onBlur={handleBlur("city")}
                            value={values.city}
                            name="city"
                            style={styles.textInput}
                          ></TextInput>
                        </View>
                        <View style={styles.barItem}>
                          <Text style={{ color: "#0b8647", fontSize: 17 }}>
                            State
                          </Text>
                          <View style={styles.locationPicker}>
                            <Picker
                              style={{
                                color: "grey",
                                marginLeft: -5,
                                marginBottom: -5
                              }}
                              onChangeText={handleChange("state")}
                              selectedValue={values.state}
                              onBlur={handleBlur("state")}
                              onValueChange={(itemValue, itemIndex) =>
                                setFieldValue("state", itemValue)
                              }
                            >
                              <Picker.Item label="Abia" value="Abia" />
                              <Picker.Item label="Abuja" value="Abuja" />
                              <Picker.Item
                                label="Akwa Ibom"
                                value="Akwa Ibom"
                              />
                              <Picker.Item label="Anambra" value="Anambra" />
                              <Picker.Item
                                label="Cross River"
                                value="Cross River"
                              />
                              <Picker.Item label="Delta" value="Delta" />
                              <Picker.Item label="Edo" value="Edo" />
                              <Picker.Item label="Enugu" value="Enugu" />
                              <Picker.Item label="Imo" value="Imo" />
                              <Picker.Item label="Kano" value="Kano" />
                              <Picker.Item label="Lagos" value="Lagos" />
                              <Picker.Item label="Ogun" value="Ogun" />
                              <Picker.Item label="Oyo" value="Oyo" />
                            </Picker>
                          </View>
                        </View>
                      </View>
                      <View style={styles.nextBtnDiv}>
                        <TouchableNativeFeedback onPress={handleSubmit}>
                          <View style={styles.nextBtn}>
                            {loading ? (
                              <ActivityIndicator size="small" color="yellow" />
                            ) : (
                              <Text style={styles.nextBtnText}>Update</Text>
                            )}
                          </View>
                        </TouchableNativeFeedback>
                      </View>
                    </View>
                  </ScrollView>
                </KeyboardAvoidingView>
              </>
            )}
          </Formik>
        )}
      </Mutation>
    );
  }
}

export default UpdateProfile;

const styles = StyleSheet.create({
  main: {
    alignSelf: "center",
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    width: "95%"
  },
  title: {
    width: "90%",
    fontSize: 16,
    color: "white",
    padding: 10
  },
  titles: {
    fontSize: 21,
    color: "#0b8647",
    padding: 10,
    fontWeight: "bold"
  },
  bar: {
    flexDirection: "column",
    justifyContent: "space-between",
    width: "100%"
  },
  barItem: {
    padding: 10
  },
  barText: {
    fontSize: 18
  },
  barText: {
    color: "#337044",
    fontWeight: "bold",
    fontSize: 18
  },
  textInput: {
    borderBottomWidth: 0.5,
    borderColor: "#c6c6d1",
    paddingBottom: 0,
    width: "100%",
    color: "grey",
    fontSize: 16
  },
  locationPicker: {
    borderBottomWidth: 0.5,
    borderBottomColor: "white"
  },
  nextBtnDiv: {
    marginTop: 10,
    width: "100%"
  },
  nextBtn: {
    backgroundColor: "#0b8647",
    width: "100%",
    alignSelf: "center",
    padding: 15,
    borderRadius: 5,
    marginBottom: 13
  },
  nextBtnText: {
    alignSelf: "center",
    fontSize: 22,
    color: "white",
    fontWeight: "bold"
  }
});
