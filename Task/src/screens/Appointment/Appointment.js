import React, { Component } from 'react';
import {
    Text, StyleSheet, View, SafeAreaView, Dimensions, Platform, TouchableOpacity, Image, FlatList
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import DatePicker from 'react-native-datepicker';

import Moment from 'moment';

import HeaderComponent from '../../components/Header/HeaderComponent';
import AppImages from '../../constants/AppImages';

const { width, height } = Dimensions.get('window');

class Appointment extends Component {
    constructor(props) {
        super();
        this.state = {
            facility: '',
            dateNow: '',
            workingDays: [
                { time: '10:00 AM', name: 'Sachin Sharma', is_active: false, },
                { time: '10:30 AM', name: 'Mr prakash', is_active: true, },
                { time: '10:45 AM', name: 'Hiamnshu', is_active: true, },
                { time: '10:50 AM', name: 'Book Appointment', is_active: false, },
                { time: '11:15 AM', name: 'Book Appointment', is_active: false, },
                { time: '10:50 AM', name: 'Book Appointment', is_active: false, },
                { time: '11:15 AM', name: 'Book Appointment', is_active: false, },
            ]
        };
    }

    renderFooter = () => {
        return (
            <View style={styles.bottomView}>
                <View style={styles.bottomHView}>
                    <TouchableOpacity style={styles.bottomButton}>
                        <Image
                            source={AppImages.greyLeftArrow}
                            style={styles.image}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.bottomButton}>
                        <Image
                            source={AppImages.leftArrow}
                            style={styles.image}
                        />
                    </TouchableOpacity>
                </View>
                <View />
                <Text style={{
                    fontSize: 14
                }}>Patients in Queue: 4/5</Text>
                <View style={styles.bottomHView}>
                    <TouchableOpacity style={styles.bottomButton}>
                        <Image
                            source={AppImages.greyRightArrow}
                            style={styles.image}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.bottomButton}>
                        <Image
                            source={AppImages.rightArrow}
                            style={styles.image}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    renderItem = (item, index) => {
        return (
            <View>
                <View style={{
                    flexDirection: 'row',
                    padding: 10,
                    alignItems: 'center'
                }}>
                    <Text style={{
                        color: 'grey'
                    }}>{item.time}</Text>

                    <TouchableOpacity style={{
                        height: height * 0.06,
                        width: width * 0.5,
                        alignSelf: 'center',
                        borderWidth: 1,
                        borderRadius: 5,
                        justifyContent: 'center',
                        borderColor: item.is_active ? 'grey' : '#2ebdc3',
                        marginLeft: 10
                    }}>
                        <Text style={{
                            color: item.is_active ? 'black' : '#2ebdc3',
                            textAlign: 'center',
                            alignSelf: 'center',
                            fontWeight: 'bold'
                        }}>{item.name}</Text>
                    </TouchableOpacity>
                    {item.is_active ?
                        <View flexDirection='row'>
                            <TouchableOpacity>
                                <Image
                                    source={AppImages.pen}
                                    style={styles.imageActive}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image
                                    source={AppImages.delete}
                                    style={styles.imageActive}
                                />
                            </TouchableOpacity>
                        </View>

                        : null
                    }
                </View>
                <View style={{ borderBottomWidth: .45, borderBottomColor: 'grey' }} />
            </View>
        )
    }

    // navigate to previous screen
    goBack = () => this.props.navigation.goBack();

    render() {

        const facilities = [
            { label: 'Selected Facility', value: 'Selected Facility' },
            { label: 'Selected Facility', value: 'Selected Facility' },
            { label: 'Selected Facility', value: 'Selected Facility' },
        ];

        const startDate = Moment(new Date()).format("DD/MM/YYYY");

        return (
            <SafeAreaView style={{ flex: 1 }}>
                <HeaderComponent
                    title="Appointment"
                    backEnabled={true}
                    calendarYes={true}
                    handleBackpress={() => this.goBack()}
                />
                <View flex={1}>
                    <View style={{ backgroundColor: 'rgb(46,189,195)' }}>
                        <View style={styles.dropDown}>
                            <RNPickerSelect
                                placeholder={{}}
                                items={facilities}
                                onValueChange={(value) => {
                                    this.state.facility = value;
                                }}
                                useNativeAndroidPickerStyle={true}
                                style={{
                                    ...pickerSelectStyles,
                                    iconContainer: {
                                        paddingTop: Platform.OS === 'ios' ? 20 : 18,
                                        marginRight: 20,
                                        alignItems: 'flex-end',
                                    },
                                }}
                                Icon={() => {
                                    return (
                                        <View
                                            style={{
                                                backgroundColor: 'transparent',
                                                borderTopWidth: 8,
                                                borderTopColor: 'gray',
                                                borderRightWidth: 8,
                                                borderRightColor: 'transparent',
                                                borderLeftWidth: 8,
                                                borderLeftColor: 'transparent',
                                                width: 0,
                                                height: 0,
                                            }}
                                        />
                                    );
                                }}
                            />
                        </View>

                    </View>

                    <View style={{
                        flexDirection: 'row',
                        width: '100%',
                        borderBottomWidth: 1,
                        borderBottomColor: 'lightgrey'
                    }}>
                        <DatePicker
                            style={styles.datePicker}
                            date={this.state.dateNow}
                            mode="date"
                            placeholder={startDate}
                            format="DD-MM-YYYY"
                            minDate={Moment()}
                            maxDate={Moment().add(1, 'years')}
                            confirmBtnText={'confirm'}
                            cancelBtnText={'cancel'}
                            showIcon={false}
                            customStyles={{
                                dateIcon: {
                                    position: 'relative',
                                    height: 25,
                                    width: 25,
                                    right: 40,
                                    marginLeft: 0
                                },
                                dateInput: {
                                    marginLeft: 10,
                                    borderRadius: 10,
                                    borderColor: '#2ebdc3',

                                },
                                placeholderText: {
                                    color: '#2ebdc3',
                                    fontWeight: 'bold'
                                }
                            }}
                            onDateChange={(date) => {
                                console.log("inProgress")
                            }}
                        />

                        <TouchableOpacity style={{
                            height: 45,
                            width: width * 0.3,
                            alignSelf: 'center',
                            borderWidth: 1,
                            borderRadius: 10,
                            justifyContent: 'center',
                            borderColor: '#2ebdc3'
                        }}>
                            <Text style={{
                                color: '#2ebdc3',
                                textAlign: 'center',
                                alignSelf: 'center',
                                fontWeight: 'bold'
                            }}>Add Walk in</Text>
                        </TouchableOpacity>
                    </View>

                    <FlatList
                        nestedScrollEnabled={true}
                        data={this.state.workingDays}
                        horizontal={false}
                        renderItem={
                            ({ item, index }) => this.renderItem(item, index)
                        }
                        keyExtractor={(index) => index.toString()} />

                </View>

                {this.renderFooter()}

            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    dropDown: {
        marginVertical: 7,
        marginHorizontal: 10,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'grey',
        backgroundColor: 'white',
        shadowColor: '#e3e3e8',
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowRadius: 3,
        shadowOpacity: 1.0,
        fontSize: 16
    },
    datePicker: {
        width: width * 0.6,
        height: "10%",
        right: 15,
        marginVertical: 20,
        marginLeft: 20,
        fontSize: 16,
        color: '#2ebdc3'
    },
    bottomView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        alignItems: 'center',
        // height: Platform.OS === "ios" ? "12%" : "12%",
        height: "12%",
        width: width,
        borderWidth: 0.5,
        borderColor: 'lightgrey'
    },
    bottomHView: {
        flexDirection: 'row',
        width: '30%',
        height: '100%'
    },
    bottomButton: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '50%',
        height: '100%'
    },
    textButton: {
        color: 'red',
        fontSize: 16,
    },
    image: {
        width: 40,
        height: 40,
    },
    imageActive: {
        width: 25,
        height: 25,
        marginLeft: 15
    }
});

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 14,
        paddingVertical: 12,
        borderColor: 'gray',
        color: 'black',
        paddingRight: 30,
        paddingLeft: 20,
        justifyContent: 'center',
        textAlignVertical: 'center',
        fontSize: 16
    },
    inputAndroid: {
        fontSize: 14,
        paddingRight: 30,
        paddingLeft: 20,
        borderColor: 'gray',
        color: 'black',
        fontSize: 16,
        width: width
    },
});

export default Appointment;