import React, {Component} from 'react';
import PropTypes from "prop-types";
import {Text, View, TouchableOpacity, Image, TextInput} from 'react-native';
import styles from '../styles/composer-screen-style.js';
import LinearGradient from 'react-native-linear-gradient';
import {Surface} from 'gl-react-native';
import { Shaders, Node, GLSL} from 'gl-react';
import JSON2D from "react-json2d";

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



const shaders2 = Shaders.create({
  funky: {
    frag: GLSL`
precision highp float;
varying vec2 uv;
uniform sampler2D t;
void main() {
  gl_FragColor = texture2D(t, uv) * vec4(
    0.5 + 0.5 * cos(uv.x * 30.0),
    0.5 + 0.5 * sin(uv.y * 20.0),
    0.7 + 0.3 * sin(uv.y * 8.0),
    1.0);
}
` }
});

const Funky = ({children: t}) => <Node shader={shaders2.funky} uniforms={{t}} />;





export default class ComposerScreen extends Component
{
  render()
  {
    return (
      <View style={styles.container}>

          <View style={styles.view_top_bg}>
              <TouchableOpacity style={styles.cross_btn_bg}
                onPress = {() => this.props.navigation.goBack()}>
                  <Image source={require('../assets/icons/cross_1x.png')} />
              </TouchableOpacity>

          </View>


          <Surface style={styles.view_center_bg}>
              <HelloBlue blue={0.4} />
              
          </Surface>


          <View style={styles.view_bottom_bg}>
              <View style={styles.search_view_style}>
                  <TouchableOpacity style={styles.search_btn_bg}
                    onPress = {() => this.props.navigation.navigate('SearchWeb')}>
                      <Image source={require('../assets/icons/search_icon_1x.png')} />
                      <Text style={styles.search_text_style}>Search web for background...</Text>
                  </TouchableOpacity>
              </View>

              <View style={styles.below_search_btn_view_style}>
                  <View style={styles.options_btn_view_style}>
                      <TouchableOpacity style={styles.background_picker_btn_style}
                        onPress = {() => this.props.navigation.navigate('GradientPicker')}>
                        <LinearGradient start={{x: 1.0, y: 0.5}} end={{x: 0.5, y: 1.0}}
                                        locations={[0.1,0.4,1.0]}
                                        colors={['#66c6ff', '#68e3ff', '#ed89ff']}
                                        style={styles.color_picker_btn_style} >
                        </LinearGradient>
                      </TouchableOpacity>
                  </View>
                  <View style={styles.options_btn_view_style}>
                      <TouchableOpacity style={styles.forward_btn_style_bg}
                        onPress = {() => this.props.navigation.navigate('SearchWeb')}>
                          <Image
                                 source={require('../assets/icons/right_arrow_2x.png')} />
                      </TouchableOpacity>
                  </View>
                  <View style={styles.options_btn_view_style}>
                      <TouchableOpacity style={styles.gallery_btn_style}
                        onPress = {() => this.props.navigation.navigate('SearchWeb')}>
                          <Image style={styles.btn_icon_style}
                                 source={require('../assets/icons/gallery_2x.png')} />
                      </TouchableOpacity>
                  </View>
              </View>
          </View>
      </View>
    )
  }
}
