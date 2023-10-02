import React, { Component } from 'react';
import {Animated, StyleSheet, Alert, View} from 'react-native';
import * as Haptics from 'expo-haptics';
import { RectButton } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {CalendarAdd, CalendarDelete, Transfer} from "../utils/Icons";
import EmployeeShiftCard from "./EmployeeShiftCard";

class MyShiftCardSwipe extends Component {
    swipeableRef = React.createRef();
    handleSwipeOpen = (direction) => {
        if (direction === 'right') {
            Haptics.notificationAsync(
                Haptics.NotificationFeedbackType.Warning
            );
            Alert.alert(
                'Drop Shift',
                'Are you sure you want to drop this shift?',
                [
                    {
                        text: 'Drop',
                        style: 'destructive',
                        onPress: () => {
                            console.log('Shift dropped!');
                            Haptics.notificationAsync(
                                Haptics.NotificationFeedbackType.Success
                            );
                        },
                    },
                    {
                        text: 'Cancel',
                        style: 'cancel',
                        onPress: () => {
                            console.log('Canceled drop!');
                            this.swipeableRef.current.close();

                        }
                    }
                ]
            );
        } else if (direction === 'left') {
            Haptics.notificationAsync(
                Haptics.NotificationFeedbackType.Warning
            );
            Alert.alert(
                'Transfer shift',
                'Are you sure you want to transfer this shift?',
                [
                    {
                        text: 'Transfer',
                        style: 'default',
                        onPress: () => {
                            console.log('Transferred Shift!');
                            Haptics.notificationAsync(
                                Haptics.NotificationFeedbackType.Success
                            );
                        },
                    },
                    {
                        text: 'Cancel',
                        style: 'cancel',
                        onPress: () => {
                            console.log('Canceled transfer!');
                            this.swipeableRef.current.close();
                        }
                    }
                ]
            )
        }
    };

    renderLeftActions = (progress, dragX) => {
        const trans = dragX.interpolate({
            inputRange: [0, 50, 100, 101],
            outputRange: [-20, -10, 0, 1],
        });
        return (
            <RectButton style={styles.leftAction} onPress={this.close}>
                <Animated.Text
                    style={[
                        styles.actionText,
                        {
                            transform: [{ translateX: trans }],
                        },
                    ]}>
                    <FontAwesomeIcon icon={Transfer} size={36} color={'#FFFFFF'}/>
                </Animated.Text>
            </RectButton>
        );
    };

    renderRightActions = (progress, dragX) => {
        const trans = dragX.interpolate({
            inputRange: [-101, -100, -50, 0],
            outputRange: [-1, 0, 10, 20],
        });
        return (
            <RectButton style={styles.rightAction} onPress={this.close}>
                <Animated.Text
                    style={[
                        styles.actionText,
                        {
                            transform: [{ translateX: trans }],
                        },
                    ]}>
                    <FontAwesomeIcon icon={CalendarDelete} size={36} color={'#FFFFFF'}/>
                </Animated.Text>
            </RectButton>
        );
    };

    render() {
        return (
            <View>
                <Swipeable renderLeftActions={this.renderLeftActions} renderRightActions={this.renderRightActions} onSwipeableOpen={(direction) => this.handleSwipeOpen(direction)} ref={this.swipeableRef} overshootFriction={8}>
                    <EmployeeShiftCard date={"Fri Sep 22"} shiftType={"Head Guard"} startTime={"10:00am"} endTime={"6:30pm"} locationId={"Pool"} />
                </Swipeable>
                <Swipeable renderLeftActions={this.renderLeftActions} renderRightActions={this.renderRightActions} onSwipeableOpen={(direction) => this.handleSwipeOpen(direction)} ref={this.swipeableRef} overshootFriction={8}>
                    <EmployeeShiftCard date={"Sat Sep 23"} shiftType={"Head Guard"} startTime={"10:00am"} endTime={"6:30pm"} locationId={"Pool"} />
                </Swipeable>
                <Swipeable renderLeftActions={this.renderLeftActions} renderRightActions={this.renderRightActions} onSwipeableOpen={(direction) => this.handleSwipeOpen(direction)} ref={this.swipeableRef} overshootFriction={8}>
                    <EmployeeShiftCard date={"Sun Sep 24"} shiftType={"Head Guard"} startTime={"10:00am"} endTime={"6:30pm"} locationId={"Pool"} />
                </Swipeable>
            </View>
        );
    }
}

const styles= StyleSheet.create({
    leftAction: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#4A7AFF',
        justifyContent: 'center',
        height: EmployeeShiftCard.height,
        margin: 15,
        marginBottom: 0,
        borderRadius: 10,
        overflow: "hidden",
    },
    actionText: {
        color: 'white',
        backgroundColor: 'transparent',
    },
    rightAction: {
        flex: 1,
        backgroundColor: '#DA1717',
        justifyContent: 'center',
        alignItems: 'flex-end',
        height: EmployeeShiftCard.height,
        margin: 15,
        marginBottom: 0,
        borderRadius: 10,
        overflow: "hidden",
    },
})

export default MyShiftCardSwipe;