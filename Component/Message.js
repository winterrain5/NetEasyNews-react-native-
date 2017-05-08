import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  ListView,
  TouchableOpacity
} from 'react-native';

const dataArr = ['头条','娱乐','体育','网易号','本地','视屏','财经','科技'];
export default class Message extends Component {
  static defaultProps = {

  };
  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({
      rowHasChanged: (r1,r2) => r1 !== r2
    });
    this.state = {
      dataSource: ds.cloneWithRows(dataArr),
      isSelected: false
    }
  }
  render() {
    return (

       <ListView
          dataSource={this.state.dataSource}
          renderRow={this._renderRow.bind(this)}
          contentContainerStyle={styles.containerStyle}
          // automaticallyAdjustContentInsets={true}
          horizontal={true}
        />
    );
  }
  _renderItem() {
    var itemArr = [];
    for (var i = 0; i < dataArr.length; i++) {
      itemArr.push(
        <Text key={i} style={{color: 'red'}}>{dataArr[i]}</Text>
      );
    }
    return itemArr;
}
_renderRow(rowData) {

    return(
      <TouchableOpacity onPress={() => this.setState({isSelected: true})}>
        <Text style={{color: this.state.isSelected ? 'red' : 'gray',fontSize:  this.state.isSelected ? 16 : 14}}>{rowData}</Text>
      </TouchableOpacity>

    );
}

}



const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
  },
  containerStyle: {
    width: 375,
    height: 44,
    alignItems: 'center',
    justifyContent: 'space-around'
  },


});
