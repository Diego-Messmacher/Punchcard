import React, {useState} from "react";
import {View, TouchableOpacity, StyleSheet} from 'react-native'
import {useNavigation} from "@react-navigation/native";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {Plus} from '../../utils/Icons';
import {white, primaryGreen, black, grayBackground} from "../../utils/Colors";
import {ipAddy} from "../../utils/IPAddress";
import AvailableShiftList from "../AvailableShiftList";
import AddShiftBody from "./AddShiftBody";

function ManagerShiftDashboard(){
    const [addShiftModal, setAddShiftModal] = useState(false);
    const [locList, setLocList] = useState([]);
    const [shiftTypeList, setShiftTypeList] = useState([]);

    const getShiftData = async () => {
        await fetch('http://' + ipAddy + ':8080/getShiftCreationInfo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                managerId: "653d70c730cd4ad7a58ee7fb"
            }),
        }).then(r => r.json()
        ).then(async json => {
            const newLocList = await json.locationList;
            const newShiftList = await json.shiftTypeList;
            setLocList(newLocList);
            setShiftTypeList(newShiftList);
        }).catch(e => {
            console.error(e);
        });
    }

    const handleAddShiftClick = async () => {
        try {
            await getShiftData();
            setAddShiftModal(true);
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <View styles={styles.page}>
            <View style={{height: "90%"}}>
                <AvailableShiftList />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={handleAddShiftClick}>
                    <View style={styles.addButton}>
                        <FontAwesomeIcon icon={Plus} size={34} color={'white'} />
                    </View>
                </TouchableOpacity>
            </View>
            <AddShiftBody
                addShiftModal={addShiftModal}
                setAddShiftModal={setAddShiftModal}
                shiftOptions={shiftTypeList}
                locationOptions={locList}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    page: {
        backgroundColor: grayBackground,
        display: "flex",
        flexDirection: "column",
        flex: 1,
    },
    addShiftButton: {
        paddingLeft: 16,
    },
    icon: {
        marginRight: 16,
        color: primaryGreen,
    },
    buttonContainer: {
        position: "relative",
    },
    addButton: {
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        bottom: 40,
        right: 16,
        height: 64,
        width: 64,
        backgroundColor: primaryGreen,
        padding: 10,
        borderRadius: 32,
        shadowColor: black,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 6,
    },
});
export default ManagerShiftDashboard;
