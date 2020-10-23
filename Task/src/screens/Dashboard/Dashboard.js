import React from 'react';
import {
  View, Text, TouchableOpacity, SafeAreaView,
  Image, FlatList
} from 'react-native';
import { connect } from 'react-redux';
import { DrawerActions } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LinearGradient from 'react-native-linear-gradient';

import HeaderComponent from '../../components/Header/HeaderComponent';

import AppImage from '../../constants/AppImages';
import AppStrings from '../../constants/AppStrings';
import DashboardStyles from './DashboardStyles';

const STAFFING = 'STAFFING';
const STAFFING_SUBTEXT = 'Looking for able testing staff? we can help you. Choose the kind of tester you wish to have and share your requirement'
const RECRUITMENT = 'RECRUITMENT';
const RECRUITMENT_SUBTEXT = 'Looking for a fruitful testing career? choose the role and apply with us';

class Dashboard extends React.Component {
  constructor(props) {
    super();
    this.state = {
      userName: '',
      userBMI: ''
    };
  }

  gridItems = [
    { title: 'General Info', icon: AppImage.info },
    { title: 'Measurement', icon: AppImage.info },
    { title: 'Health History', icon: AppImage.healthReport },
    { title: 'Medical Procedures', icon: AppImage.medicalProcedure },
    { title: 'Your Appointments', icon: AppImage.patient },
    { title: 'Documents', icon: AppImage.documents },
  ];

  componentDidMount() {
    this.setUserDetails();
  }

  // setting user details in asyncstorage name, email
  setUserDetails = async () => {
    const USERNAME = 'Dr. Milka Johns';
    const USEREMAIL = 'milkajohns@gmail.com';
    const USERBMI = '23.84'

    this.setState({
      userName: USERNAME,
      userBMI: USERBMI
    });

    try {
      await AsyncStorage.setItem(AppStrings.USERNAME, USERNAME)
      await AsyncStorage.setItem(AppStrings.USEREMAIL, USEREMAIL);
      await AsyncStorage.setItem(AppStrings.USERBMI, USERBMI);
    } catch (error) {
      console.log(AppStrings.something_went_wrong)
    }
  }

  logOut = () => {
    this.props.userLogOut();
  }

  toggleDrawer = () => {
    this.props.navigation.dispatch(DrawerActions.openDrawer());
  };

  // render userInfo 
  renderUserInfo = () => {
    return (
      <View style={DashboardStyles.category}>
        <LinearGradient
          start={{ x: 0.6, y: 0 }} end={{ x: 1, y: 0.5 }}
          colors={['#2a88fc', '#7166f6', '#a050f2']}
          style={DashboardStyles.gradient}>
          <View style={DashboardStyles.appView}>
            <View>
              <View style={DashboardStyles.userCard}>
                <Image
                  source={AppImage.userImage}
                  style={DashboardStyles.mainImage}
                />
              </View>

              <Text style={
                DashboardStyles.mainText
              }>{this.state.userName}</Text>

              <Text style={
                DashboardStyles.subText
              }>{`Your BMI is ${this.state.userBMI}`}</Text>
            </View>
          </View>
        </LinearGradient>
      </View>
    )
  }

  // on categories clicked then navigate to the screen
  onCardClicked = (index) => {
    const navigation = this.props.navigation;

    switch (index) {
      case 0:
        break
      case 1:
        break
      case 2:
        break
      case 3:
        break
      case 4:
        navigation.navigate('Appointment');
        break
      case 5:
        break
      default:
        break
    }

  }

  // render categories here
  renderCategories = (item, index) => {
    return (
      <TouchableOpacity
        onPress={() => this.onCardClicked(index)}>
        <View style={DashboardStyles.card}>
          <Image
            style={DashboardStyles.icon}
            source={item.icon} />
          <Text>{item.title}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  render() {
    return (
      // eslint-disable-next-line react-native/no-inline-styles
      <SafeAreaView style={{ flex: 1, backgroundColor: 'rgb(228,226,251)' }}>
        <HeaderComponent
          title=""
          menu={true}
          handleDrawer={() => this.toggleDrawer()}
        />
        <View style={{ alignItems: 'center', height: '92%' }}>
          {this.renderUserInfo()}

          <FlatList
            showsVerticalScrollIndicator={false}
            data={this.gridItems}
            horizontal={false}
            numColumns={2}
            renderItem={({ item, index }) =>
              this.renderCategories(item, index)
            }
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => { return {} }

const mapDispatchToProps = dispatch => {
  return {
    userLogOut: () => dispatch({ type: 'IS_LOGGED_OUT' })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
