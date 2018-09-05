  /**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './src/views/home-screen';
import ComposerScreen from './src/views/composer-screen';
import WebSearchScreen from './src/views/search-web-screen';
import GradientPickerScreen from './src/views/gradient-picker-screen';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return <RootStack />;
  }
}

const RootStack = createStackNavigator(
  {
    Home : { screen : HomeScreen },
    Composer : { screen : ComposerScreen },
    SearchWeb : { screen : WebSearchScreen },
    GradientPicker : { screen : GradientPickerScreen },
  },
  {
    mode:'card',
    headerMode:'none',
  }
);
