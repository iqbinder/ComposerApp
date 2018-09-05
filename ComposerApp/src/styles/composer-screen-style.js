import {StyleSheet, Platform} from 'react-native';

export default styles = StyleSheet.create(
  {
    container: {
      flex : 1,
      justifyContent : 'space-evenly',
      alignItems : 'stretch',
      flexDirection : 'column',
      paddingTop: (Platform.OS === 'ios') ? 20 : 0,
      backgroundColor : '#1a1a1a',
    },

    view_top_bg : {
      flex : 0.6,
      justifyContent : 'flex-start',
    },

    cross_btn_bg : {
      padding : 15,
      marginTop : 15,
      justifyContent : 'center',
    },

    text_style : {
      color : '#e6e6e6',
      fontSize : 22,
    },

    search_text_style : {
      color : '#bcbcbc',
      fontSize : 14,
      marginLeft : 8,
      marginRight : 8,
    },

    view_center_bg: {
      flex : 1,
      width : '100%',
      height : '100%',
    },

    TextInputStyleClass:{
    textAlign: 'center',
    fontSize : 28,
    fontWeight: 'bold',
    height : '80%',
    width : '80%',
    color : '#FFFFFF',
    },

    view_bottom_bg: {
      flex : 0.6,
      justifyContent : 'space-evenly',
      alignItems : 'stretch',
      flexDirection : 'column',
    },

    search_view_style: {
      flex : 0.5,
      justifyContent : 'center',
      alignItems : 'stretch',
    },

    search_btn_bg: {
      backgroundColor : '#4c4c4c',
      marginLeft : 20,
      marginRight : 20,
      marginTop : 20,
      padding : 10,
      borderRadius : 20,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
    },

    below_search_btn_view_style: {
      flex : 0.5,
      justifyContent : 'space-evenly',
      alignItems : 'center',
      flexDirection : 'row',
    },

    gallery_btn_style : {
      padding : 5,
      justifyContent : 'center',
      marginRight : 10,
    },

    btn_icon_style : {
      height : 20,
      width : 20,
    },

    options_btn_view_style: {
      flex : 1,
      justifyContent : 'center',
      alignItems : 'center',
    },

    forward_btn_style_bg: {
      backgroundColor : '#FFFFFF',
      borderRadius : 50,
      padding : 5,
    },

    background_picker_btn_style: {
      padding : 5,
      justifyContent : 'center',
      marginLeft : 10,
    },

    color_picker_btn_style: {
      backgroundColor : '#37ad86',
      margin : 1,
      width : 16,
      height : 16,
      borderColor : '#FFFFFF',
      borderWidth : 1,
      borderRadius : 16/2,
    },



    LinearGradientStyle: {
      flex: 1,
      justifyContent : 'center',
      alignItems : 'center',
      width : '100%',
      height : '100%',
    },

  }
);
