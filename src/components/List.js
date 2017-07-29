import React, {Component} from "react";
import {View, Text, TextInput, FlatList} from "react-native";
import {connect} from "react-redux";
import {textInputHandleAction, fetchDataAction} from "../actions";

class List extends Component {

  textInputHandle(text) {
    this.props.textInputHandleAction(text);
  }

  componentDidMount() {
    this.props.fetchDataAction();
  }

  renderListData() {
    console.log(this.props.data.loading)
    if(this.props.data.loading) {
      return(<Text> Loading ... </Text>)
    } else {
      return(
        <FlatList data={this.props.data.data}
          renderItem={({item}) => <Text>{item.title}</Text>}
          keyExtractor={(item, index) => item.id}
        />
      )
    }
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
        {this.renderListData()}
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    data: state.data
  }
};

export default connect(mapStateToProps, {textInputHandleAction, fetchDataAction})(List);
