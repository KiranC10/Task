import AppColor from "../../constants/AppColors";

const DrawerStyles = {
  drawerContent: {
    flex: 1,
    backgroundColor: 'rgb(248,249,253)'
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  profileView: {
    marginTop: 20,
    flexDirection: 'row',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: 'rgba(255, 0, 0, 0.3)',
    marginLeft: 10
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2F363F',
    marginLeft: 15,
    textAlign: 'center',
    marginTop: 5
  },
  profileEmail: {
    fontSize: 14,
    color: '#616C6F',
  },
  icon: {
    width: 20,
    height: 20
  },
  separator: {
    width: '90%',
    alignSelf: 'center',
    marginVertical: 20,
    backgroundColor: AppColor.separatorColor
  },
  bottomDrawerSection: {
    marginBottom: 15,
    alignItems: 'center'
  },
  shadowStyle: {
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1,
    elevation: 1,
  }
}

export default DrawerStyles;