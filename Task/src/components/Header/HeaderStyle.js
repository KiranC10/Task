import { StyleSheet, Dimensions } from 'react-native';
import AppColor from '../../constants/AppColors';

const deviceWidth = Dimensions.get('window').width;

const HeaderStyle = StyleSheet.create({
    container: {
        flexDirection: 'row',
        // justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'center',
        width: '100%',
        height: '8%',
        marginHorizontal: 10,
        backgroundColor: AppColor.white,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1,

        elevation: 1,
    },
    title: {
        color: AppColor.colorWhite,
        fontSize: 20,
        marginLeft: 20,
        fontWeight: 'bold'
    },
    testText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: AppColor.colorRed,
        letterSpacing: 1,
        textAlign: 'center'
    },
    bytesText: {
        fontSize: 18,
        fontWeight: 'normal'
    },
    qualityText: {
        fontSize: 8,
        marginLeft: 20,
        fontWeight: 'bold',
    },
    applyText: {
        color: AppColor.colorRed,
        fontWeight: 'bold',
        fontSize: 18,
        marginLeft: -20
    }
});

export default HeaderStyle;