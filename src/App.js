import React, {Component} from "react";
import {View} from "react-native";
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import reducers from "./reducers";
import Header from "./components/header";
import List from "./components/List";
import ReduxThunk from "redux-thunk";

const App = () => {
  return(
    <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
      <View>
        <Header />
        <List />
      </View>
    </Provider>
  )
}

export default App;
