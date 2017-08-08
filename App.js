import React from 'react';
import {
  AppRegistry,
  Text,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { TabNavigator } from "react-navigation";
//import our class
import SliderTest from './Slider';
import Swipertest from './Swiper';
import Reactions from './Reactions';
import Free from './New';

class About extends React.Component {
  render() {
    return( 
     <Text style={{fontSize: 20}}>
        タスク：感情選択方式のテスト〜8/8{"\n"}
        タスク：swiperの非表示の問題の解決、reactionsの改善8/8〜
      </Text>
      );
  }
}

const testApp = TabNavigator({
  about: { screen: About },
  slider: { screen: SliderTest },
  swiper: { screen: Swipertest },
  reactions: { screen: Reactions },
  free: { screen: Free },
  //add tabs
},
{
tabBarPosition: 'bottom'
   });

AppRegistry.registerComponent('testApp', () => testApp);