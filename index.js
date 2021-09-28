/**
 * @format
 */

import { AppRegistry } from "react-native";
import { name as appName } from "./app.json";
import AppContainer from "./AppContainer";
import React from "react";
import ApolloClient, { InMemoryCache } from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import ShowMessage, { type } from "./src/components/toster/ShowMessage";
import AsyncStorage from "@react-native-community/async-storage";
console.disableYellowBox = true;
const cache = new InMemoryCache();
const __DEV__ = process.env.NODE_ENV === "development";
const client = new ApolloClient({
  uri: __DEV__ ? "http://192.168.43.100:4000" : "",
  cache,
  request: async operation => {
    const token = await AsyncStorage.getItem("token");
    operation.setContext({
      headers: {
        token
      }
    });
  },
  onError({ graphQLErrors, networkError, operation }) {
    if (
      graphQLErrors &&
      operation.query.definitions[0].operation === "mutation"
    ) {
      graphQLErrors.map(({ message }) => {
        ShowMessage(type.ERROR, message);
      });
      return;
    }
    if (operation.query.definitions[0].operation === "mutation") {
      ShowMessage(type.ERROR, "Network error");
    }
  }
});

const GarbleApp = () => (
  <ApolloProvider client={client}>
    <AppContainer />
  </ApolloProvider>
);

AppRegistry.registerComponent(appName, () => GarbleApp);
