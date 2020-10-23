import React, { useEffect, useState } from 'react';
import {
  View, Text, Image, Linking, Alert
} from 'react-native';
import {
  DrawerContentScrollView, DrawerItem
} from '@react-navigation/drawer';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { Drawer } from 'react-native-paper';

import DrawerStyles from './DrawerStyles';

import AppImage from '../../constants/AppImages';

const URL = "https://www.redbytes.in/";

// visit given URL on browser 
const openWebsite = () => {
  Linking.openURL(URL).catch(
    err => console.error("Couldn't load page", err)
  );
}

// setting userinfo (name,mail,image)
const DrawerContent = (props) => {
  const USERNAME = 'Dr. Milka Johns';
  const USEREMAIL = 'milkajohns@gmail.com';

  const ItemSeparator = () => {
    return <View style={DrawerStyles.separator} />
  }

  return (
    <View flex={1} backgroundColor='rgb(247,248,253)'>
      <DrawerContentScrollView {...props}>
        <View style={[DrawerStyles.drawerContent, DrawerStyles.shadowStyle]}>
          <View style={DrawerStyles.profileView}>
            <Image
              style={DrawerStyles.profileImage}
              source={AppImage.userImage}
            />
            <View style={{ marginTop: 10, alignItems: 'center' }}>
              <Text style={DrawerStyles.profileName}>{USERNAME}</Text>
            </View>
          </View>
          {ItemSeparator()}
        </View>

        <Drawer.Section>
          <DrawerItem
            icon={() => (
              <Image source={AppImage.menu}
                style={DrawerStyles.icon}
              />
            )}
            style={DrawerStyles.shadowStyle}
            label="Dashboard"
            onPress={() => { props.navigation.navigate('Dashboard') }}
          />
          <DrawerItem
            icon={() => (
              <Image source={AppImage.menu}
                style={DrawerStyles.icon}
              />
            )}
            style={DrawerStyles.shadowStyle}
            focused={getActiveRouteState(
              props.state.routes,
              props.state.index,
              'Apointment'
            )}
            label="Appointment"
            onPress={() => { props.navigation.navigate('Appointment') }}
          />
          <DrawerItem
            icon={() => (
              <Image source={AppImage.menu}
                style={DrawerStyles.icon}
              />
            )}
            style={DrawerStyles.shadowStyle}
            label="Visit Website"
            onPress={() => { openWebsite() }}
          />
        </Drawer.Section>
      </DrawerContentScrollView>
    </View>
  );
}

const getActiveRouteState = function (routes, index, name) {
  return routes[index].name.toLowerCase().indexOf(name.toLowerCase()) >= 0;
};

export default DrawerContent;