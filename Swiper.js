import React, { Component } from 'react'
import {AppRegistry,View,Text,Image,StyleSheet,ScrollView,Dimensions} from 'react-native'
import Swiper from 'react-native-swiper'
const screen={
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
}

const styles=StyleSheet.create({
    container:{
        flex:1,
    },
    scrollwrap:{
        backgroundColor:'#f3f3f3',
    },
    wrapper:{
    },
    slider:{
        backgroundColor:'#97cae5',
        width:screen.width,
        height:screen.width/2,
    },
    image: {
    width:screen.width,
    flex: 1
  },
  text: {
    color: 'red',
    fontSize: 100,
    fontWeight: 'bold'
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
}) 


export default class Swipertest extends Component {
    render(){
        return (
            <View style={styles.container}>
                <ScrollView style={styles.scrollwrap}>
                    <Swiper dotColor={'white'} activeDotColor={'blue'} height={500} horizontal={true} loop={false} bounces={true} removeClippedSubviews={false}>
			          <View style={styles.slide1}>
			            <Text style={styles.text}>Hello Swiper</Text>
			          </View>
			          <View style={styles.slide2}>
			            <Text style={styles.text}>Beautiful</Text>
			          </View>
			          <View style={styles.slide3}>
			            <Text style={styles.text}>And simple</Text>
			          </View>
                    </Swiper>
                </ScrollView>
            </View>
        );
    }
}

AppRegistry.registerComponent('Swipertest', () => Swipertest);