import { StyleSheet, Text, View } from "react-native";
import React, {useState} from "react";
import {Menu, MenuOptions, MenuTrigger, MenuOption} from "react-native-popup-menu";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {COLORS, SIZES} from "../../constants/theme";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useNavigation}   from "@react-navigation/native";

const Divider = () => <View style={styles.divider} />;
function DotsMenu3({userD}){
    const [menuOpen, setMenuOpen] = useState(false);
    const navigation = useNavigation()
    const logout = () => {
        AsyncStorage.clear().then(r =>  navigation.navigate('Login'));
    }

    return (
            <Menu>
                <MenuTrigger
                    customStyles={{
                    }}
                >
                    <Text style={styles.dots}>⋮</Text>
                </MenuTrigger>
                <MenuOptions
                    customStyles={{
                        optionsContainer: {
                            borderRadius: 10,
                            backgroundColor: COLORS.lightGray,
                        },
                    }}
                >
                    <MenuOption
                        onSelect={() => {logout(); setMenuOpen(false);}}
                        customStyles={{
                            optionWrapper: {
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                                padding:15
                            },
                        }}
                    >
                        <Text>Log out</Text>
                        <MaterialCommunityIcons style={styles.header_icons} name={'logout'} size={20} color={COLORS.background} />
                    </MenuOption>
                    <Divider />
                    <MenuOption
                        onSelect={() => {alert(`Delete`); setMenuOpen(false);}}
                        customStyles={{
                            optionWrapper: {
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                                padding:15
                            },
                        }}
                    >
                        <Text>Reset password</Text>
                        <MaterialCommunityIcons  style={styles.header_icons}  name={'lock-reset'} size={20} color={COLORS.background} />
                    </MenuOption>
                </MenuOptions>
            </Menu>

    );
};

export default DotsMenu3;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        marginVertical: 100,
        marginHorizontal: 100,
    },
    divider: {
        height: 1,
        backgroundColor: "#7F8487",
    },
    dots: {
        fontSize: SIZES.xxLarge,
        color: COLORS.yellow
    },
    header_icons:{
        marginLeft:10
    }
});