import React, {Component} from 'react';
import {Text, View, TouchableOpacity, Image, TextInput} from 'react-native';
import styles from '../styles/search-web-screen-styles.js';
import LinearGradient from 'react-native-linear-gradient';
import {Surface} from 'gl-react-native';
import { Shaders, Node, GLSL } from 'gl-react';

const shaders = Shaders.create(
  {
          helloBlue: {
            frag: GLSL`
                  precision highp float;
                  varying vec2 uv;
                  uniform float blue;
                  void main() {
                    gl_FragColor = vec4(uv.x, uv.y, blue, 1.0);
                  }`
          }
  }
);

class HelloBlue extends React.Component
{
  render()
  {
    const { blue } = this.props;
    return <Node shader={shaders.helloBlue} uniforms={{ blue }} />;
  }
}


export default class WebSearchScreen extends Component
{
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

          <View style={styles.view_bottom_bg}>
                <LinearGradient start={{x: 1.0, y: 0.5}} end={{x: 0.5, y: 1.0}}
                                locations={[0.1,0.4,1.0]}
                                colors={['#66c6ff', '#68e3ff', '#ed89ff']}
                                style={styles.LinearGradientStyle} >
                    <TextInput
                        placeholder="Tap to type..."
                        placeholderTextColor="#dbdbdb"
                        underlineColorAndroid='transparent'
                        style={styles.TextInputStyleClass}/>
                </LinearGradient>
          </View> 

          <Surface style={styles.view_center_bg}>
              <HelloBlue blue={0.4} />
          </Surface>


      </View>
    )
  }
}
