import {StyleSheet, Platform} from 'react-native';

export default styles = StyleSheet.create(
  {
    container: {
      flex : 1,
      justifyContent : 'flex-start',
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

  view_center_bg: {
    flex : 1,
    justifyContent : 'center',
    alignItems : 'center',
    backgroundColor : '#f2f2f2',
  },
}
);
