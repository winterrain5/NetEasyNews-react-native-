import Dimensions from 'Dimensions';
import React, { Component } from 'react';
import {
    PixelRatio,
    ActivityIndicatorIOS
} from 'react-native';

export default class   {
  constructor() {

  }
}

module.export = {
  navigationHeight: 44,
    navigationBarBGColor:'#3497FF',
    statusBarHeight: 20,
    /*最小线宽*/
    pixel: 1 / PixelRatio.get(),

    /*屏幕尺寸*/
    size: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },

    get: function(url,successCallBack,failCallBack) {
      fetch(url)
        .then((response) => response.json())
        .then((responseJson) => {
          successCallBack(responseJson)
        })
        .catch((err) => {
          failCallBack(err);
        })
    },
    /*loading效果*/
    loading: <ActivityIndicatorIOS color="#3E00FF" style={{marginTop:40}}/>
};
