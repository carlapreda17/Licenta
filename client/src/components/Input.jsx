import React from 'react';
import {StatusBar, StyleSheet, TextInput, Text, View, TouchableOpacity} from 'react-native';
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {SvgXml} from "react-native-svg";
import UserSvg from '../../assets/icons/user.svg'
import styles from "../../styles";
import {Svg, Path} from "react-native-svg";
import {COLORS, FONT, SIZES} from "../../constants/theme";


function Input({ value, setValue, placeholder, secureTextEntry, onToggleShowPassword,type }) {

    const styles=require('../../styles')

    return (
        <View style={styles.input_container}>
            <MaterialCommunityIcons name={type} size={24} color={COLORS.background} style={styles.icons_input}></MaterialCommunityIcons>
            <TextInput
                value={value}
                onChangeText={setValue}
                style={styles.input_text}
                placeholder={placeholder}
                secureTextEntry={secureTextEntry}
            />
            {placeholder.toLowerCase().includes('password') && (
                <MaterialCommunityIcons
                    name={secureTextEntry ? 'eye-off' : 'eye'}
                    size={24}
                    color={COLORS.background}
                    style={styles.eye_icon}
                    onPress={onToggleShowPassword}
                />
            )}
        </View>
    );
}


export default Input;