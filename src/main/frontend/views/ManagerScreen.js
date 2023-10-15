import React, {useState} from 'react';
import {View} from 'react-native';
import CustomHeader from "../components/CustomHeader";
import {ScreenNames} from "../utils/ScreenNames";
import ManagerEmployeeDashboard from "../components/manager-dashboard-components/ManagerEmployeeDashboard";
import ManagerShiftDashboard from "../components/manager-dashboard-components/ManagerShiftDashboard";
import CustomDashboardHeader from "../components/CustomDashboardHeader";

function ManagerScreen() {
    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleTitlePress = (index) => {
        setSelectedIndex(index);
    }

    const options = ['Option 1', 'Option 2', 'Option 3'];
    const tabs = [
        {
            id: 1,
            text: 'Employees',
        },
        {
            id: 2,
            text: 'Shifts',
        },
    ];
    return (
        <View>
            <CustomHeader title={"Manager Name"} page={ScreenNames.MANAGER_SETTINGS}/>
            <CustomDashboardHeader onTitlePress={handleTitlePress} tabs={tabs}/>
            <View>
                {selectedIndex === 0 && <ManagerEmployeeDashboard buttonTitle={"Add Employee"} options={options} />}
                {selectedIndex === 1 && <ManagerShiftDashboard />}
            </View>

        </View>
    );
}
export default ManagerScreen;