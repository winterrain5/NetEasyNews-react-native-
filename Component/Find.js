import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  UIManager
} from 'react-native';
import {CustomSegmentedControl} from 'react-native-custom-segmented-control'

export default class Find extends Component {
  constructor(props) {
     super(props);
     this.state = {
       segmentedText: [
         ['FIRST','SECOND', 'THIRD'],
         ['ORDERS','HOTELS', 'OPTIONS'],
         ['TOP FREE','TOP PAID', 'TOP GROSSING'],
         ['ORDERS','HOTELS', 'OPTIONS','TOP FREE','TOP PAID'],
         ['ORDERS','HOTELS', 'OPTIONS','TOP FREE','TOP PAID']
       ],
       selectedArray: [0,2,1,4,3]
     };
   }
  render() {
    return (
      <View style={styles.container}>
       <CustomSegmentedControl
         style={{
           flex:1,
           backgroundColor: 'red',
           width: 375,
           height: 50,
           marginTop: 104
         }}
         textValues={['ORDERS','PRODUCTS' ]}
    selected={0}
    segmentedStyle={{
        selectedLineHeight: 2,
        fontSize:17,
        fontWeight: 'bold', // bold, italic, regular (default)
        segmentBackgroundColor: 'transparent',
        segmentTextColor: '#7a92a5',
        segmentHighlightTextColor: '#7a92a599',
        selectedLineColor: '#00adf5',
        selectedLineAlign: 'bottom', // top/bottom/text
        selectedLineMode: 'text', // full/text
        selectedTextColor: 'black',
        selectedLinePaddingWidth: 30,
        segmentFontFamily: 'system-font-bold'
    }}
    animation={{
        duration: 0.7,
        damping: 0.5,
        animationType: 'middle-line',
        initialDampingVelocity: 0.4
    }}
    onSelectedWillChange={(event)=> {
    }}
    onSelectedDidChange={(event)=> {
    }}

       />

   </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
    height: 50
  },

});
