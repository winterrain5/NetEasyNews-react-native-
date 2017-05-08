import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  WebView
} from 'react-native';

import Util from './Util'

export default class NewDetail extends Component {
  static defaultProps = {
    docid: ''
  };
  constructor(props) {
    super(props);
    this.state = {
      html: ''
    };
  }
  render() {
    return (
      <WebView
        automaticallyAdjustContentInsets={true}
        source={{html: this.state.html, baseUrl: ''}}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        startInLoadingState={true}
      />
    );
  }
  componentDidMount() {
    var url_api = 'http://c.m.163.com/nc/article/'+this.props.docid+'/full.html';

    fetch(url_api)
      .then((response) => response.json())
      .then((responseJson) => {
          // 取出所有的数据
          var allData = responseJson[this.props.docid];
          // 取出body中的数据
          var body = allData['body'];
          // 取出图片数组
          var img = allData['img'];
          for(var i=0; i<img.length; i++){
              var item = img[i];
              var ref = item.ref;
              var src = item.src;
              var newImg = '<img src="'+ src +'" width="100%">';
              body = body.replace(ref, newImg);
              console.log(ref, src);

          }
          // 更新UI
          this.setState({
              html: body
          });
      })

  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

});
