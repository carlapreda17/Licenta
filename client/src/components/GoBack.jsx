import React, {useState} from "react";
import {ScrollView, StyleSheet, Text, TouchableOpacity, useWindowDimensions, View} from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {COLORS} from "../../constants/theme";
import {useNavigation} from "@react-navigation/native";
import s from "../../styles";

function GoBack({text}) {
    const s=require('../../styles')
    const navigation = useNavigation()
    return (
        <View style={styles.container_header}>
            <TouchableOpacity>
                <MaterialCommunityIcons name={'arrow-left'} size={40} color={COLORS.yellow} onPress={()=>navigation.goBack()}/>
            </TouchableOpacity>
            <Text style={s.large_text}>{text}</Text>
        </View>

    );
}

const styles = StyleSheet.create({
    container_header:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        paddingTop:10
    },
});
export default GoBack;