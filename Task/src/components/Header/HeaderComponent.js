import React from 'react';
import {
  View, Text, TouchableOpacity, Image
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

import HeaderStyle from './HeaderStyle';
import AppImage from '../../constants/AppImages';

const HeaderComponent = props => {
  return (
    <View style={[HeaderStyle.container, {
      height: props.backEnabled ? '10%' : '8%',
      backgroundColor: props.backEnabled ? 'rgb(46,189,195)' : 'rgb(228,226,251)'
    }]}>
      {props.menu ? (
        <TouchableOpacity onPress={props.handleDrawer}>
          <Image
            source={AppImage.menuBlack}
            style={{ width: 25, height: 25, marginLeft: 15 }}
          />
        </TouchableOpacity>
      ) : props.backEnabled ? (

        <TouchableOpacity onPress={props.handleBackpress}>
          <Image
            source={AppImage.whiteBackArrow}
            style={{ width: 15, height: 15, marginLeft: 10 }}
          />
        </TouchableOpacity>

      ) : (
            <Image source={null} style={{ width: 25, height: 25, marginLeft: 5 }} />
          )}

      <Text style={HeaderStyle.title}>{props.title}</Text>

      {props.calendarYes ? (
        <View style={{
          flexDirection: 'row',
          alignItems: 'flex-end',
          width: '20%',
          marginHorizontal: 10,
          justifyContent: 'space-between',
          position: 'absolute',
          right: 5
        }}>
          <TouchableOpacity style={{ position: 'absolute', right: 10 }}
            onPress={props.handleBackpress}>
            <Image
              source={AppImage.calendar}
              style={{ width: 25, height: 25, }}
            />
          </TouchableOpacity>
          <TouchableOpacity style={{}}
            onPress={props.handleBackpress}>
            <Image
              source={AppImage.calendarNo}
              style={{ width: 25, height: 25, }}
            />
          </TouchableOpacity>
        </View>
      ) :
        <Image source={null} style={{ width: 25, height: 25, marginLeft: 5 }} />
      }
    </View>
  );
};

export default HeaderComponent;
