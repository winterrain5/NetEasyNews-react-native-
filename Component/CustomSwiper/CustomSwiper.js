import React, { Component } from 'react'
import {
  Text,
  View,
  Image,
  Dimensions
} from 'react-native'

import Swiper from 'react-native-swiper'
const { width } = Dimensions.get('window');

const styles = {
  wrapper: {
  },

  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },

  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },

  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },

  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },

  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },

  image: {
    width,
    flex: 1
  },

  indicatorViewStyle:{
     width,
     height:36,
     backgroundColor:'rgba(0,0,0, 0.4)',
     position:'absolute',
     left:0,
     bottom:0,

     justifyContent:'center',
     paddingLeft:5
  },
  dotStyle: {
    backgroundColor: 'rgba(255,255,255,1)',
    width: 5,
    height: 5,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3
  },
  activeDotStyle: {
    backgroundColor: 'orange',
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3
  }
};

export default class extends Component {
   static defaultProps = {
      dataArr: []
   };

   // 构造
     constructor(props) {
       super(props);
       // 初始状态
       this.state = {
           currentTitle: ''
       };
     }

  render () {
    return (
        <View>
          <Swiper
              style={styles.wrapper}
              height={170}
              onMomentumScrollEnd={(e, state, context) => this.setState({
                 // currentTitle: dataArr[state.index].title
              })}
              dot={<View style={styles.dotStyle} />}
              activeDot={<View style={styles.activeDotStyle} />}
              paginationStyle={{
            bottom: 10, left: null, right: 10
            }}
              loop={true}
              autoplay={true}
              showButtons={true}
          >
              {this._renderImage()}
          </Swiper>
        </View>
    )
  }

  _renderImage(){
     // 1. 组件数组
     var itemArr = [];

     const dataArr = this.props.dataArr;
     dataArr.forEach((value, index)=>{
         itemArr.push(
             <View key={index} style={styles.slide}>
                 <Image
                     resizeMode='stretch'
                     style={styles.image}
                     source={{uri: value.imgsrc}}
                     defaultSource={{uri: 'placeholder'}}
                 />
                 <View style={styles.indicatorViewStyle}>
                     <Text style={{color:'#fff'}}>{value.title}</Text>
                 </View>
             </View>
         )
     });

     // 2. 返回组件
     return itemArr;
  }
}
