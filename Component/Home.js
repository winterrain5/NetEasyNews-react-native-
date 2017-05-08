import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ListView,
  PixelRatio,
  ScrollView
} from 'react-native';
import CustomSwiper from './CustomSwiper/CustomSwiper';
import NewDetail from './NewsDetail'
import SegmentView from './SegmentView'

export default class Home extends Component {
  static defaultProps = {
    api_url: 'http://c.m.163.com/nc/article/headline/T1348647853363/0-20.html?from=toutiao&fn=1&prog=LTitleA&passport=&devId=nTM86EPlcxZu09VdpTEh6aR3%2B%2FQX6x8vHBD3ne3k5bbgOrg%2FIP5DcguSDmtYyWbs&offset=0&size=20&version=14.0&spever=false&net=wifi&lat=DUH4Hf95lyIDaAI03C3RSA%3D%3D&lon=HJ4tj6FL5wRHQxcf5GLEcg%3D%3D&ts=1470728804&sign=1H8K3yy9bMXakmxAlZ9P86meraJtjKQFz5vJuwhjNyl48ErR02zJ6%2FKXOnxX046I&encryption=1&canal=appstore',
    key_word: 'T1348647853363'
  };

  constructor(props) {
    super(props);
    // 数据源
    var ds = new ListView.DataSource({
      rowHasChanged: (r1,r2) => r1 !== r2
    });

    //
    this.state = {
      dataSource: ds,
      // 轮播图数组
      headerAdArr: [],
      //
      flag: false
    };
  }
  render() {
    return (
        <ListView
          dataSource={this.state.dataSource}
          renderHeader={this._renderHeader.bind(this)}
          renderRow={this._renderRow.bind(this)}
          showsVerticalScrollIndicator={false}
          // automaticallyAdjustContentInsets={false}
        />
    );
  }

  // 数据请求
  componentDidMount() {
    fetch(this.props.api_url)
          .then((response)=> response.json())
          .then((responseJson) => {
              // 1. 取出数组
              const dataArr = responseJson[this.props.key_word];
              // 临时数组
              var tempListArr = [], adArr = [];

              // 2. 遍历数组
              dataArr.forEach((value, index)=>{
                  if(value.hasAD == 1 || value.hasHead == 1){
                      adArr = value.ads;
                  }else {
                      tempListArr.push(value);
                  }
              });
              // 3. 更新状态机,刷新UI
              this.setState({
                  dataSource:this.state.dataSource.cloneWithRows(tempListArr),
                  // 广告
                  headerAdArr:adArr,
                  flag:true
              });
          })
          .catch((error)=>{
              alert(error);
          })
  }

    // 返回具体的行
    _renderRow(rowData) {
      //  防止空数据
      if (!this.state.flag) return;
      return(
        <TouchableOpacity style={styles.cellStyle} onPress={()=>this._pushToNewsDetail(rowData.docid)}>
          <Image
              source={{uri: rowData.imgsrc}}
              // 占位图
              defaultSource={{uri: 'placeholder'}}
              style={styles.imgStyle}
            ></Image>
          <View style={styles.rightViewStyle}>
            <Text numberOfLines={2}>{rowData.title}</Text>
            <View style={styles.rightInnerViewStyle}>
              <Text style={{color: 'gray',fontSize: 12}}>{rowData.source}</Text>
              <View style={{flexDirection: 'row'}}>
                <Text style={{color: 'gray',fontSize: 12,backgroundColor: '#rgba(240,240,240,0.8)',borderRadius: 3,marginRight: 8}}>{rowData.replyCount}跟贴</Text>
                {this._renderTagView(rowData)}
              </View>

            </View>
          </View>
        </TouchableOpacity>
      );
    }
    _renderTagView(rowData) {
      if (rowData.TAG) {
        return(
          <Text style={{backgroundColor: 'blue',fontSize: 12,color: 'white',borderRadius: 3}}>{rowData.TAG}</Text>
        );
      }else {
        return(
          <TouchableOpacity>
            <Image source={{uri: 'icon_close'}} style={{width: 15,height: 15,backgroundColor: '#rgba(240,240,240,0.8)',borderRadius: 5}}></Image>
          </TouchableOpacity>
        );
      }
    }

    // 轮播图
    _renderHeader() {
      // 0. 防止空数据
        if(!this.state.flag) return;
        // 1.容错
        if(this.state.headerAdArr.length == 0) return;
        return(
            <CustomSwiper dataArr={this.state.headerAdArr}/>
        )
    }

    // 跳转到新闻详情
    _pushToNewsDetail(docid) {
      console.log(docid);
      this.props.navigator.push({
        component: NewDetail,
        passProps: {docid},
        title: '新闻详情'
      })
    }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  imgStyle: {
    width:100,
    height:70,
    marginRight:10
  },
  cellStyle: {
    borderBottomWidth: 1/PixelRatio.get(),
    borderBottomColor: '#e8e8e8',
    flexDirection:'row',
    padding:10
  },
  rightViewStyle: {
    flex:1,
    justifyContent:'space-around'
  },
  rightInnerViewStyle:{
    flexDirection:'row',
    justifyContent:'space-between',

  }

});
