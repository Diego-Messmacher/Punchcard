import React, {useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, ScrollView, StatusBar} from 'react-native';
import {useNavigation} from "@react-navigation/native";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {ChevronLeft} from "../utils/Icons";
import {grayBackground, secondaryGray} from "../utils/Colors";
import AddShiftBody from "../components/manager-dashboard-components/AddShiftBody";


const AddShiftPage = ({ route }) => {
    //navigation tools
    const navigation = useNavigation();
    const { locationOptions, shiftOptions } = route.params;
    const [addShiftModal, setAddShiftModal] = useState(true);

    const backPress = () =>{
        navigation.goBack()
    }
    return (
        <View style={{flex: 1}}>
            <StatusBar
                barStyle={'dark-content'}
                animated={true}
                showHideTransition={'fade'}
            />
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={() => backPress ()} style={styles.icon}>
                    <FontAwesomeIcon icon={ChevronLeft} size={24}/>
                </TouchableOpacity>
                <Text style={styles.headerText}>Add Shift</Text>
            </View>
            <ScrollView style={styles.pageScroll}>
                <AddShiftBody addShiftModal={addShiftModal} setAddShiftModal={setAddShiftModal} backPress={backPress} shiftOptions={shiftOptions} locationOptions={locationOptions}/>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        height: 100,
        backgroundColor: "white",
        alignItems: "flex-end",
        borderBottomWidth: 1,
        borderBottomColor: secondaryGray,
    },
    headerText: {
        color: "black",
        fontSize: 24,
        marginBottom: 12,
        fontWeight: 'bold',
    },
    icon: {
        color: 'black',
        position: 'absolute',
        left: 12,
        bottom: 12,
        width: 48,
    },
    pageScroll: {
        flex: 1,
        backgroundColor: grayBackground,
        height: "100%",
    },
});
export default AddShiftPage;