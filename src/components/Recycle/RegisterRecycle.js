import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableNativeFeedback,
  KeyboardAvoidingView,
  ActivityIndicator
} from "react-native";
import Root from "../../components/Utils/Root";
import { RECYCLER, GET_RECYCLE_MEMBER } from "../QueryAndMutation";
import { Mutation } from "react-apollo";
import * as yup from "yup";
import { Formik } from "formik";
import ShowMessage, { type } from "../toster/ShowMessage";
import FontAwesome from "react-native-vector-icons/FontAwesome";

class RegisterRecycle extends React.Component {
  static navigationOptions = { header: null };

  render() {
    const validationSchema = yup.object().shape({
      name: yup.string().required("Name is required"),
      surname: yup.string().required("Surname is required"),
      email: yup.string().required("Email is required"),
      phone: yup.string().required("Phone Number is required"),
      address: yup.string().required("Address is required"),
      city: yup.string().required("City is required"),
      state: yup.string().required("State is required")
    });

    const user = this.props.navigation.getParam("user");

    return (
      <Mutation
        mutation={RECYCLER}
        awaitRefetchQueries={true}
        refetchQueries={[{ query: GET_RECYCLE_MEMBER }]}
      >
        {(addRdecycleMember, { loading }) => (
          <Formik
            initialValues={{
              name: user.firstname,
              surname: user.surname,
              email: user.email,
              phone: user.phone,
              address: user.address,
              city: user.city,
              state: user.state
            }}
            onSubmit={values => {
              addRdecycleMember({
                variables: {
                  subscriptionType: "Mobile Toilet Service",
                  name: values.name,
                  surname: values.surname,
                  email: values.email,
                  phone: values.phone,
                  address: values.address,
                  city: values.city,
                  state: values.state
                }
              })
                .then(res => {
                  if (res) {
                    alert(type.DONE, res.data.addRdecycleMember);
                    this.props.navigation.navigate("NotVerifiedPage");
                  }
                })
                .catch(err => {
                  return err;
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
              <Root navigation={this.props.navigation}>
                <KeyboardAvoidingView style={{ flex: 1 }}>
                  <View style={styles.headerMain}>
                    <TouchableNativeFeedback
                      onPress={() => this.props.navigation.goBack()}
                    >
                      <View style={styles.goBack}>
                        <FontAwesome
                          name="arrow-left"
                          size={20}
                          color="#0b8647"
                        />
                      </View>
                    </TouchableNativeFeedback>
                    <Text style={styles.headerTitle}>
                      RECYCLE MEMBERSHIP FORM
                    </Text>
                  </View>
                  <ScrollView
                    contentContainerStyle={{ flexGrow: 1 }}
                    keyboardShouldPersistTaps={"handled"}
                  >
                    <View style={styles.main}>
                      <View
                        style={{
                          width: "90%",
                          alignSelf: "center",
                          paddingTop: 25
                        }}
                      >
                        <View
                          style={{
                            width: "100%",
                            flexDirection: "row",
                            justifyContent: "space-around"
                          }}
                        >
                          <View style={{ width: "45%" }}>
                            <Text style={styles.title}>Name</Text>
                            <TextInput
                              style={{
                                marginTop: 10,
                                borderWidth: 0.5,
                                backgroundColor: "#edefee",
                                borderColor: "#edefee",
                                width: "100%",
                                paddingLeft: 5,
                                borderRadius: 5
                              }}
                              name="name"
                              value={values.name}
                              onChangeText={handleChange("name")}
                              onBlur={handleBlur("name")}
                            />
                            {touched.name && errors.name && (
                              <Text style={{ fontSize: 10, color: "red" }}>
                                {errors.name}
                              </Text>
                            )}
                          </View>

                          <View style={{ width: "45%" }}>
                            <Text style={styles.title}>Surname</Text>
                            <TextInput
                              style={{
                                marginTop: 10,
                                borderWidth: 0.5,
                                backgroundColor: "#edefee",
                                borderColor: "#edefee",
                                width: "100%",
                                paddingLeft: 5,
                                borderRadius: 5
                              }}
                              name="surname"
                              value={values.surname}
                              onChangeText={handleChange("surname")}
                              onBlur={handleBlur("surname")}
                            />
                            {touched.surname && errors.surname && (
                              <Text style={{ fontSize: 10, color: "red" }}>
                                {errors.surname}
                              </Text>
                            )}
                          </View>
                        </View>
                        <View
                          style={{
                            width: "95%",
                            alignSelf: "center",
                            marginTop: 15
                          }}
                        >
                          <Text style={styles.title}>Email</Text>
                          <TextInput
                            style={{
                              marginTop: 10,
                              borderWidth: 0.5,
                              backgroundColor: "#edefee",
                              borderColor: "#edefee",
                              width: "100%",
                              paddingLeft: 5,
                              borderRadius: 5
                            }}
                            name="email"
                            value={values.email}
                            onChangeText={handleChange("email")}
                            onBlur={handleBlur("email")}
                          />
                          {touched.email && errors.email && (
                            <Text style={{ fontSize: 10, color: "red" }}>
                              {errors.email}
                            </Text>
                          )}
                        </View>

                        <View
                          style={{
                            width: "95%",
                            alignSelf: "center",
                            marginTop: 15
                          }}
                        >
                          <Text style={styles.title}>Phone no.</Text>
                          <TextInput
                            style={{
                              marginTop: 10,
                              borderWidth: 0.5,
                              backgroundColor: "#edefee",
                              borderColor: "#edefee",
                              width: "100%",
                              paddingLeft: 5,
                              borderRadius: 5
                            }}
                            name="phone"
                            value={values.phone}
                            onChangeText={handleChange("phone")}
                            onBlur={handleBlur("phone")}
                          />
                          {touched.phone && errors.phone && (
                            <Text style={{ fontSize: 10, color: "red" }}>
                              {errors.phone}
                            </Text>
                          )}
                        </View>

                        <View
                          style={{
                            width: "95%",
                            alignSelf: "center",
                            marginTop: 15
                          }}
                        >
                          <Text style={styles.title}>Address</Text>
                          <TextInput
                            style={{
                              marginTop: 10,
                              borderWidth: 0.5,
                              backgroundColor: "#edefee",
                              borderColor: "#edefee",
                              width: "100%",
                              paddingLeft: 5,
                              borderRadius: 5
                            }}
                            name="address"
                            value={values.address}
                            onChangeText={handleChange("address")}
                            onBlur={handleBlur("address")}
                          />
                          {touched.address && errors.address && (
                            <Text style={{ fontSize: 10, color: "red" }}>
                              {errors.address}
                            </Text>
                          )}
                        </View>

                        <View
                          style={{
                            width: "95%",
                            alignSelf: "center",
                            marginTop: 15
                          }}
                        >
                          <Text style={styles.title}>City</Text>
                          <TextInput
                            style={{
                              marginTop: 10,
                              borderWidth: 0.5,
                              backgroundColor: "#edefee",
                              borderColor: "#edefee",
                              width: "100%",
                              paddingLeft: 5,
                              borderRadius: 5
                            }}
                            name="city"
                            value={values.city}
                            onChangeText={handleChange("city")}
                            onBlur={handleBlur("city")}
                          />
                          {touched.city && errors.city && (
                            <Text style={{ fontSize: 10, color: "red" }}>
                              {errors.city}
                            </Text>
                          )}
                        </View>

                        <View
                          style={{
                            width: "95%",
                            alignSelf: "center",
                            marginTop: 15
                          }}
                        >
                          <Text style={styles.title}>State</Text>
                          <TextInput
                            style={{
                              marginTop: 10,
                              borderWidth: 0.5,
                              backgroundColor: "#edefee",
                              borderColor: "#edefee",
                              width: "100%",
                              paddingLeft: 5,
                              borderRadius: 5
                            }}
                            name="state"
                            value={values.state}
                            onChangeText={handleChange("state")}
                            onBlur={handleBlur("state")}
                          />
                          {touched.state && errors.state && (
                            <Text style={{ fontSize: 10, color: "red" }}>
                              {errors.state}
                            </Text>
                          )}
                        </View>
                      </View>
                      <TouchableNativeFeedback onPress={handleSubmit}>
                        <View style={styles.subscribe}>
                          {loading ? (
                            <ActivityIndicator
                              style={{ padding: 15 }}
                              color="white"
                            />
                          ) : (
                            <Text style={styles.subscribeTitle}>Submit</Text>
                          )}
                        </View>
                      </TouchableNativeFeedback>
                    </View>
                  </ScrollView>
                </KeyboardAvoidingView>
              </Root>
            )}
          </Formik>
        )}
      </Mutation>
    );
  }
}

export default RegisterRecycle;

const styles = StyleSheet.create({
  headerMain: {
    width: "100%",
    backgroundColor: "#0b8647",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20
  },
  headerTitle: {
    fontSize: 22,
    color: "white"
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
  main: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center"
  },
  title: {
    fontSize: 18,
    color: "#0b8647"
  },
  subscribe: {
    marginTop: 15,
    borderRadius: 10,
    backgroundColor: "#0b8647",
    fontSize: 20,
    width: "85%",
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
