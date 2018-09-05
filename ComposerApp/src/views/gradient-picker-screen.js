import React, {Component} from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import styles from '../styles/gradient-picker-screen-style.js';
import { WebGLView } from 'react-native-webgl';

export default class GradientPickerScreen  extends Component
{

  onContextCreate = (gl: WebGLRenderingContext) => {
    const rngl = gl.getExtension("RN");
    gl.clearColor(1, 0, 0, 1);
    gl.clear(gl.COLOR_BUFFER_BIT);
    rngl.endFrame();
  };

  render()
  {
    return(
      <View style={styles.container}>
          <View style={styles.view_top_bg}>
              <TouchableOpacity style={styles.cross_btn_bg}
                onPress = {() => this.props.navigation.goBack()}>
                  <Image source={require('../assets/icons/cross_1x.png')} />
              </TouchableOpacity>
          </View>

          <View style={styles.view_center_bg}>
              <WebGLView
              style={{ width: 100, height: 100 }}
              onContextCreate={this.onContextCreate}/>
          </View>
      </View>
    )
  }
}
