import {StyleSheet, Platform} from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: '#FFFFFF',
    flexDirection:'column',
    paddingTop: (Platform.OS === 'ios') ? 20 : 0
  },

  home_title_style: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000',
    color: '#FFFFFF',
    textAlign: 'center',
  },

  home_btn_style: {
    flex: 0.1,
    justifyContent: 'center',
    alignItems : 'center',
    backgroundColor: '#C5F331',
    paddingLeft : 20,
    paddingRight : 20,
  },

  home_btn_text_style: {
    color: '#204060'
  },
});
