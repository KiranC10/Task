import React from 'react';
import {
  StyleSheet, View, ActivityIndicator,
} from 'react-native';
import AppColor from '../../constants/AppColors';

const Loader = props => {

  const { loading
  } = props;

  return (
    <View style={{ flex: 1 }}>
      {loading ?
        <View style={styles.modalBackground}>
          <ActivityIndicator
            size='large'
            // color={AppColor.headerBg}
            color={AppColor.colorRed}
            animating={loading} />
        </View>
        : null}
    </View>

  )
}
const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
  }
});
export default Loader;