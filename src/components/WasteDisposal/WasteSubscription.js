import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  Image,
  ScrollView,
  FlatList,
  ActivityIndicator
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Root from "../Utils/Root";
import { WASTE_COLLECTION_QUOTES } from "../QueryAndMutation";
import { Query } from "react-apollo";
import { Divider } from "react-native-elements";
import ListItem from "../Utils/ListItem";
import ActivityIndicatorPage from "../Utils/ActivityIndicator";
import ErrorPage from "../ErrorPage";

class Subscriptions extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    return {
      title: "Waste Subscriptions",
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
              source={require("../../assets/subscription.png")}
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

  render() {
    return (
      <Root navigation={this.props.navigation}>
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps={"handled"}
        >
          <Query query={WASTE_COLLECTION_QUOTES}>
            {({ loading, error, data }) => {
              if (loading) return <ActivityIndicatorPage />;
              if (error)
                return <ErrorPage navigation={this.props.navigation} />;
              const {
                getOfficeQuote,
                getHouseQuote,
                getIndustrialQuote,
                getMedicalQuote
              } = data;
              const result = [
                ...getOfficeQuote,
                ...getHouseQuote,
                ...getIndustrialQuote,
                ...getMedicalQuote
              ];
              console.log(result, "data");
              return (
                <>
                  <FlatList
                    data={result}
                    renderItem={({ item, index }) => (
                      <ListItem item={item} index={index} />
                    )}
                    keyExtractor={item => Math.random()}
                  />
                  {/* <View style={styles.main}>
                    <View style={styles.head}>
                      <Text>Subscription Type :</Text>
                      <Text>Waste Collection Service</Text>
                    </View>
                    <View style={styles.head}>
                      <Text>Category :</Text>
                      <Text>Office</Text>
                    </View>
                    <View style={styles.head}>
                      <Text>Amount :</Text>
                      <Text>{'\u20A6'}15000</Text>
                    </View>
                    <View style={styles.head}>
                      <Text>Service Start Date :</Text>
                      <Text>15/4/21</Text>
                    </View>
                    <View style={styles.head}>
                      <Text>Duration :</Text>
                      <Text>30 days</Text>
                    </View>
                    <View style={styles.head}>
                      <Text>Service End Date :</Text>
                      <Text>15/5/21</Text>
                    </View>
                  </View> */}
                </>
              );
            }}
          </Query>
        </ScrollView>
      </Root>
    );
  }
}

export default Subscriptions;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: "column",
    marginTop: 20,
    alignSelf: "center",
    padding: 10
  },
  head: {
    flexDirection: "row"
  }
});
