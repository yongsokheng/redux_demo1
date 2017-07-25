import React, {Component} from "react";
import {View, Text, TextInput} from "react-native";
import {connect} from "react-redux";
import {textInputHandleAction} from "../actions";

class List extends Component {

  textInputHandle(text) {
    this.props.textInputHandleAction(text);
  }

  render() {
    console.log(this.props)
    return(
      <View>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.textInputHandle(text)}
        />
        <Text>{this.props.data.text}</Text>
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    data: state.data
  }
};

export default connect(mapStateToProps, {textInputHandleAction})(List);
