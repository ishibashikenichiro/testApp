import React, {Component} from 'react';
import {AppRegistry, StyleSheet,Text,Image,View,PanResponder,Alert,TouchableOpacity,Animated} from 'react-native';
import ActionButton from 'react-native-circular-action-menu';
import Icon from 'react-native-vector-icons/Ionicons';
import { FloatingAction } from 'react-native-floating-action';
//import FloatingAction from './component/FloatingAction';
import SwipeALot from 'react-native-swipe-a-lot';

export default class Reactions extends Component {
	
  render() {
    return (
    	//<Text>List of recent chats</Text>
    	<View style={styles.all}>
    		<View style={styles.container}>
		      <Text style={styles.example}>
		        Floating Action example
		      </Text>
		      <FloatingAction
		        actions={actions}
		        position={'center'}
		        onPressItem={
		          (name) => {
		            Alert.alert('Icon pressed', `the icon ${name} was pressed`);
		          }
		        }
		      />
		     </View>
	      <ActionButton buttonColor="rgba(231,76,60,1)">
	          <ActionButton.Item buttonColor='#9b59b6' title="New Task" onPress={() => console.log("notes tapped!")}>
	            <Icon name="android-create" style={styles.actionButtonIcon} />
	          </ActionButton.Item>
	          <ActionButton.Item buttonColor='#3498db' title="Notifications" onPress={() => {}}>
	            <Icon name="android-notifications-none" style={styles.actionButtonIcon} />
	          </ActionButton.Item>
	          <ActionButton.Item buttonColor='#1abc9c' title="All Tasks" onPress={() => {}}>
	            <Icon name="android-done-all" style={styles.actionButtonIcon} />
	          </ActionButton.Item>
	        </ActionButton>
		    
    </View>
    	);
  }
}

const actions = [{
    text: 'grad',
    icon: require('./assets/grad.png'),
    name: 'grad',
    position: 1
  }, {
    text: 'happy',
    icon: require('./assets/happy.png'),
    name: 'happy',
    position: 2
  }, {
    text: 'painful',
    icon: require('./assets/painful.png'),
    name: 'painful',
    position: 3
  }, {
    text: 'peaceful',
    icon: require('./assets/peaceful.png'),
    name: 'peaceful',
    position: 4
  }, {
    text: 'sorrow',
    icon: require('./assets/sorrow.png'),
    name: 'sorrow',
    position: 5
  }, {
    text: 'angry',
    icon: require('./assets/angry.png'),
    name: 'angry',
    position: 6
  }];

const styles = StyleSheet.create({
	all: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  example: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
});

AppRegistry.registerComponent('Reactions', () => Reactions);