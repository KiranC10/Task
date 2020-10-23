import { Dimensions, StyleSheet } from 'react-native';
import AppColors from '../../constants/AppColors';

const { width, height } = Dimensions.get('window')

const DashboardStyles = StyleSheet.create({
  appView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  category: {
    width: '80%',
    height: '40%',
    backgroundColor: AppColors.colorGreen,
    borderRadius: 20,
    marginTop: '5%',
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: { width: 0, height: 5, },
    shadowColor: 'white',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
    marginBottom: 15
  },
  userCard: {
    width: 100,
    height: 100,
    backgroundColor: 'white',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 10
  },
  mainImage: {
    height: 80,
    width: 80,
    resizeMode: 'contain',
  },
  mainText: {
    fontSize: 20,
    color: AppColors.colorWhite,
    fontWeight: 'bold',
  },
  subText: {
    fontSize: 16,
    color: 'rgb(229,226,253)',
  },
  card: {
    height: width * 0.5 - 50,
    width: width * 0.5 - 30,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
    backgroundColor: AppColors.colorWhite,
  },
  gradient: {
    flex: 1,
    width: '100%',
    backgroundColor: '#f07959',
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 12
  },
  icon: {
    height: 30,
    width: 30,
    resizeMode: 'contain',
    marginBottom: 10
  }
});

export default DashboardStyles;