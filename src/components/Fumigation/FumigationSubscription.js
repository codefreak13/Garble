import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  Image,
  FlatList,
  ActivityIndicator
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Query } from "react-apollo";
import { FUMIGATION_QUOTES } from "../QueryAndMutation";
import Root from "../Utils/Root";
import ListItem from "../Utils/ListItem";
import ActivityIndicatorPage from "../Utils/ActivityIndicator";
import ErrorPage from "../ErrorPage";

class FumigationSubscriptions extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    return {
      title: "Fumigation Subscriptions",
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
        <View style={styles.main}>
          <Query query={FUMIGATION_QUOTES}>
            {({ loading, error, data }) => {
              if (loading) return <ActivityIndicatorPage />;
              if (error)
                return <ErrorPage navigation={this.props.navigation} />;
              const result = data.getfumigQuotes;
              return (
                <FlatList
                  data={result}
                  renderItem={({ item, index }) => (
                    <ListItem item={item} index={index} />
                  )}
                  keyExtractor={item => Math.random()}
                />
              );
            }}
          </Query>
        </View>
      </Root>
    );
  }
}
export default FumigationSubscriptions;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15
  }
});
