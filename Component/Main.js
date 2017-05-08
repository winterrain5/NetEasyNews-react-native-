import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TabBarIOS,
  NavigatorIOS,
  AlertIOS
} from 'react-native';

import Home from './Home'
import Find from './Find'
import Message from './Message'
import Mine from './Mine'

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // 默认选中的tabbarItem
      currentSelectedItem: 'home'
    };
  }
  render() {
    return (
      <TabBarIOS
        tintColor='rgba(255,130,1,1)'
        >
          {/* 首页 */}
          <TabBarIOS.Item
            // 设置tabbarItem
              icon={{uri: 'tabbar_home'}}
              title="首页"
              selectedIcon={{uri: 'tabbar_home_highlighted'}}
              onPress={() => this.setState({currentSelectedItem: 'home'})}
              selected={this.state.currentSelectedItem == 'home'}
            >
              {/* 设置路由（导航栏） */}
              <NavigatorIOS
                initialRoute={{
                  component: Home, // 内容组件
                  title: '网易新闻',
                  leftButtonIcon:{uri:'navigationbar_friendattention_highlighted'},
                  onLeftButtonPress: () => this.clickNavLeftBtn(),
                  rightButtonIcon:{uri:'navigationbar_pop_highlighted'},
                  onRightButtonPress:() => this.clickNavRightBtn(),
                }}
                style={{flex: 1}}
                tintColor='rgba(255,130,1,1)'
              />
          </TabBarIOS.Item>

          {/* 消息 */}
          <TabBarIOS.Item
              icon={{uri: 'tabbar_message_center'}}
              title="消息"
              selectedIcon={{uri: 'tabbar_message_center_highlighted'}}
              onPress={()=>this.setState({currentSelectedItem: 'message'})}
              selected={this.state.currentSelectedItem == 'message'}
            >
              <NavigatorIOS
                  initialRoute={{
                      // 设置初始路由下面的初始板块
                      component:Message,
                      title:'消息'
                  }}
                  style={{flex:1}}
              />
          </TabBarIOS.Item>

          {/* 发现 */}
          <TabBarIOS.Item
              icon={{uri: 'tabbar_discover'}}
              title="发现"
              selectedIcon={{uri: 'tabbar_discover_highlighted'}}
              onPress={()=>this.setState({currentSelectedItem: 'Find'})}
              selected={this.state.currentSelectedItem == 'Find'}
            >
              <NavigatorIOS
                  initialRoute={{
                      // 设置初始路由下面的初始板块
                      component:Find,
                      title:'发现'
                  }}
                  style={{flex:1}}
              />

          </TabBarIOS.Item>

          {/* 我的 */}
          <TabBarIOS.Item
              icon={{uri: 'tabbar_profile'}}
              title="我的"
              selectedIcon={{uri: 'tabbar_profile_highlighted'}}
              onPress={()=>this.setState({currentSelectedItem: 'mine'})}
              selected={this.state.currentSelectedItem == 'mine'}
            >
              <NavigatorIOS
                  initialRoute={{
                      // 设置初始路由下面的初始板块
                      component:Mine,
                      title:'个人中心'
                  }}
                  style={{flex:1}}
              />
          </TabBarIOS.Item>

      </TabBarIOS>
    );
  }

  clickNavLeftBtn() {
    AlertIOS.alert('点击了左边');
  }

  clickNavRightBtn() {
    AlertIOS.alert('点击了左边');
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
