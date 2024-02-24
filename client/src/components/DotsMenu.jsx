import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import {COLORS,FONT,SIZES} from "../../constants/theme";
import {MaterialCommunityIcons} from "@expo/vector-icons";

const DotsMenu = () => {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
                <Text style={styles.dots}>⋮</Text>
            </TouchableOpacity>

            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <TouchableOpacity
                    style={styles.modalOverlay}
                    activeOpacity={1}
                    onPressOut={() => setModalVisible(false)}
                >
                    <View style={styles.menu}>
                        <TouchableOpacity style={styles.menuOption} onPress={() => console.log('Option 1 clicked')}>
                            <Text style={styles.menuOptionText}>Log out</Text>
                            <MaterialCommunityIcons style={styles.header_icons} name={'logout'} size={20} color={COLORS.background} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.menuOption} onPress={() => console.log('Option 2 clicked')}>
                            <Text style={styles.menuOptionText}>Reset password</Text>
                            <MaterialCommunityIcons  style={styles.header_icons}  name={'lock-reset'} size={20} color={COLORS.background} />
                        </TouchableOpacity>

                    </View>
                </TouchableOpacity>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'flex-end',
        padding: 10,
    },
    dots: {
        fontSize: SIZES.xxLarge,
        color: COLORS.yellow
    },
    modalOverlay: {
        flex: 1,
        position: 'absolute',
        right: 10,
        top: 70,
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    menu: {
        backgroundColor: COLORS.lightGray,
        borderRadius: 5,
        padding: 10,
        marginRight: 10,
        marginBottom: 10,
    },
    menuOption: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        fontSize: SIZES.normal,
        color: COLORS.background,
        flexDirection: 'row',
        alignItems: 'center', // Acesta va alinia vertical elementele în container
        justifyContent:'space-between'
    },
    header_icons:{
        marginLeft:10
    }

});

export default DotsMenu;
