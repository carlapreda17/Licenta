import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { SelectCountry } from 'react-native-element-dropdown';
import {COLORS, FONT, SIZES} from "../../constants/theme";
import { MaterialCommunityIcons } from '@expo/vector-icons'; // sau importați MaterialCommunityIcons din pachetul react-native-vector-icons


const Dropdown =({ data, onChange })=> {
    const [country, setCountry] = useState('1');

    return (
        <SelectCountry
            style={styles.dropdown}
            selectedTextStyle={styles.selectedTextStyle}
            placeholderStyle={styles.placeholderStyle}
            imageStyle={styles.imageStyle}
            iconStyle={styles.iconStyle}
            iconColor={COLORS.background}
            maxHeight={200}
            value={country}
            data={data}
            valueField="value"
            labelField="label"
            placeholder="Selectează partener"
            onChange={e => {
                setCountry(e.value);
            }}

        />
    );
};

export default Dropdown;

const styles = StyleSheet.create({
    dropdown: {
        height: 50,
        width: 200,
        backgroundColor: COLORS.yellow,
        borderRadius: 22,
        paddingHorizontal: 8,
    },
    selectedTextStyle: {
        fontSize: SIZES.normal,
        fontFamily: FONT.bold,
        marginLeft: 8,
    },
    iconStyle: {
        width: 22,
        height: 22,
    },
});
