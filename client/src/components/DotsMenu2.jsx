import {StyleSheet, Text, useWindowDimensions, View} from "react-native";
import React, { useState } from "react";
import {Menu, MenuTrigger,MenuOptions,MenuOption,MenuProvider} from "react-native-popup-menu";
import {COLORS, SIZES} from "../../constants/theme";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {useNavigation} from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

function DotsMenu2({userD}) {
    const [menuOpen, setMenuOpen] = useState(false);
    const windowDimensions = useWindowDimensions();
    const menuTopPosition = windowDimensions.height * (0.05); // Adjust the multiplier as needed
    const menuRightPosition = windowDimensions.width * 0.05; // Adjust the multiplier as needed
    const menuWidth = windowDimensions.width * 0.5; // Adjust the multiplier as needed
    const navigation = useNavigation()
    const logout = () => {
        AsyncStorage.clear().then(r =>  navigation.navigate('Login'));
    }

    return (

            <View style={styles.container}>
                <Menu opened={menuOpen} onBackdropPress={() => setMenuOpen(false)}>
                    <MenuTrigger onPress={() => setMenuOpen(true)} style={styles.menu_btn}>
                        <Text style={styles.dots}>⋮</Text>
                    </MenuTrigger>
                    <MenuOptions optionsContainerStyle={[styles.menu,{marginTop:-menuTopPosition, marginRight: -menuRightPosition, width: menuWidth}]}>
                        <MenuOption onSelect={() => {logout(); setMenuOpen(false);}}>
                            <View style={styles.menuOption}>
                                <Text style={styles.optionText}>Log out</Text>
                                <MaterialCommunityIcons style={styles.header_icons} name={'logout'} size={20} color={COLORS.background} />
                            </View>
                        </MenuOption>
                        <MenuOption onSelect={() => {alert(`Delete`); setMenuOpen(false);}} >
                            <View style={styles.menuOption}>
                                <Text style={styles.optionText}>Reset password</Text>
                                <MaterialCommunityIcons  style={styles.header_icons}  name={'lock-reset'} size={20} color={COLORS.background} />
                            </View>
                        </MenuOption>
                    </MenuOptions>
                </Menu>
            </View>

    );
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'flex-end',
        padding: 10,
    },
    menu_btn: {
        paddingVertical:40,
    },
    dots: {
        fontSize: SIZES.xxLarge,
        color: COLORS.yellow
    },
    menu: {
        backgroundColor: COLORS.lightGray,
        borderRadius: 10, // This applies the border radius to all sides
        padding: 10,
        marginRight: 10, // Increase this to push the menu further from the right edge if needed
        zIndex:100,



    },
    menuOption: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between'
    },
    optionText: {
        fontSize: SIZES.normal,
        color: COLORS.background,
    },
    header_icons:{
        marginLeft:10
    }
});

export default DotsMenu2;