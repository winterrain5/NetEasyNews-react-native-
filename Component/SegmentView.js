import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  ScrollView
} from 'react-native';

var Dimensions = require('Dimensions');
var {width,height} = Dimensions.get('window');

export default class SegmentView extends Component {
  static defaultProps = {
    dataArr: ['头条','娱乐','体育','网易号','本地','视屏','财经','科技']
  };
  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({
      rowHasChanged: (r1,r2) => r1 !== r2
    });
    this.state = {
      dataSource: ds.cloneWithRows(this.props.dataArr)
    }
  }
  render() {
    return (
      <View style={styles.container}>
        {/* <ListView
            dataSource={this.state.dataSource}
            renderRow={this._renderRow.bind(this)}
            contentContainerStyle={{flexDirection: 'row',height: 44}}
            // automaticallyAdjustContentInsets={true}
            // horizontal={true}
          >

        </ListView> */}
        {/* {this._renderItem.bind(this)} */}
      </View>

    );
  }
  _renderItem() {
    var itemArr = [];
    for (var i = 0; i < this.props.dataArr.length; i++) {
      itemArr.push(
        <Text>{this.props.dataArr[i]}</Text>
      );
    }
    return itemArr;

  }

  _renderRow(rowData) {
    return(
      <Text style={{color: 'gray',fontSize: 16}}>{rowData}</Text>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
    width: width,
    height: 44,
    marginTop: 64,
    flexDirection: 'row'
  },

});
