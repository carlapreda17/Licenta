import React from 'react';
import {StatusBar, StyleSheet, TextInput, Text, View, TouchableOpacity} from 'react-native';
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {FONT} from "../../constants/theme";

function Input({ value, setValue, placeholder, secureTextEntry, onToggleShowPassword }) {
    return (
        <View style={styles.container}>
            <TextInput
                value={value}
                onChangeText={setValue}
                style={styles.input}
                placeholder={placeholder}
                secureTextEntry={secureTextEntry}
            />
            {placeholder.toLowerCase().includes('password') && (
                <MaterialCommunityIcons
                    name={secureTextEntry ? 'eye-off' : 'eye'}
                    size={24}
                    color="#000"
                    style={styles.icon}
                    onPress={onToggleShowPassword}
                />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#EEEEEE',
        width:'100%',
        borderColor:'#e8e8e8',
        borderWidth:1,
        borderRadius:5,
        paddingHorizontal:10,
        marginVertical:10,

    },
    input:{
        height:40,
        fontSize:18,
        fontFamily:FONT.regular
    },
    icon: {
        position: 'absolute',
        right: 10,
        top: '50%',
        transform: [{ translateY: -12 }],
        justifyContent: 'center',
        alignItems: 'center',
    }
});


export default Input;