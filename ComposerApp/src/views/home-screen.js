import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import styles from '../styles/base-style.js';

export default class HomeScreen extends Component
{
  render()
  {
    return (
      <View style={styles.container}>
      <Text style={styles.home_title_style}>Welcome to Home Screen!</Text>
      <TouchableOpacity style={styles.home_btn_style}
      onPress={() =>this.props.navigation.navigate('Composer')}>
      <Text style={styles.home_btn_text_style}>Go to Composer Screen</Text>
      </TouchableOpacity>
      </View>
    )
  }
}
