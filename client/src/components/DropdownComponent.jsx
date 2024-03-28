import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';
import {COLORS, FONT, SIZES} from "../../constants/theme";
import {MaterialCommunityIcons} from "@expo/vector-icons";


const DropdownComponent = ({data}) => {
    const [value, setValue] = useState(null);

    const renderItem = item => {
        return (
            <View style={styles.item}>
                <Text style={styles.textItem}>{item.label}</Text>
            </View>
        );
    };

    return (
        <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            iconStyle={styles.iconStyle}
            iconColor={COLORS.background}
            data={data}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="Alege partener"
            value={value}
            onChange={item => {
                setValue(item.value);
            }}
            renderLeftIcon={() => (
                <MaterialCommunityIcons style={styles.icon} color={COLORS.background} name="account" size={25} />
            )}
            renderItem={renderItem}
        />
    );
};

export default DropdownComponent;
const styles = StyleSheet.create({
    dropdown: {
        height: 50,
        width: 180,
        backgroundColor: COLORS.yellow,
        borderRadius: 22,
        paddingHorizontal: 8,
    },
    selectedTextStyle: {
        fontSize: SIZES.normal,
        fontFamily: FONT.bold,
        marginLeft: 10,
    },

    item: {
        padding: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textItem: {
        flex: 1,
        fontSize: SIZES.normal,
        fontFamily: FONT.bold,
    },
    placeholderStyle: {
        fontSize: SIZES.normal,
        fontFamily: FONT.bold,
        marginLeft: 10,
    },

    iconStyle: {
        width: 22,
        height: 22,
    },

});