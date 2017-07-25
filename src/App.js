import React, {Component} from "react";
import {View} from "react-native";
import {Provider} from "react-redux";
import {createStore} from "redux";
import reducers from "./reducers";
import Header from "./components/header";
import List from "./components/List";

const App = () => {
  return(
    <Provider store={createStore(reducers)}>
      <View>
        <Header />
        <List />
      </View>
    </Provider>
  )
}

export default App;
