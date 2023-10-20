import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import ManagerEmployeeCard from "./ManagerEmployeeCard";

const ManagerEmployeeView = () =>{


    return(
        <ScrollView style={styles.scrollView}>
            <View>
                <ManagerEmployeeCard id={12345} name={"Tua Tagovailoa"} shiftsTaken={40} type={"Head Lifeguard"} worked={4} />
                <ManagerEmployeeCard id={12346} name={"Tyreek Hill"} shiftsTaken={30} type={"Lifeguard"} worked={12}/>
            </View>

        </ScrollView>
        )

}

const styles = StyleSheet.create({
    scrollView: {
        flexGrow: 1,
    },
});
export default ManagerEmployeeView;