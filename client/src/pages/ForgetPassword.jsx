import React, {useState} from "react";
import {ScrollView, StyleSheet, Text, useWindowDimensions, View} from "react-native";
import CustomInput from "../components/Input";
import CustomButton from "../components/CustomButton";
import SocialMediaButton from "../components/SocialMediaButton";
import {useNavigation} from "@react-navigation/native";

function ForgetPassword(){
    const[password,setPassword]=useState('')
    const[username,setUsername]=useState('')
    const navigation = useNavigation()
    const s=require('../../styles')
    const onSendPress = () => {
        navigation.navigate('Login')
    }
   const windowHeight= useWindowDimensions().height;
    return (
        <ScrollView showsVerticalScrollIndicator={false} scrollEnabled={windowHeight<750}>
            <View style={s.container}>
                <View style={styles.title_container}>
                    <Text style={s.title}>Reset your password</Text>
                </View>
                <Text style={s.label}>Username</Text>
                <CustomInput placeholder="Enter your username" value={username} setValue={setUsername} type='account'></CustomInput>
                <CustomButton text={'Send'} onPress={onSendPress}></CustomButton>
                <CustomButton text={'Back to Sign In'} type='link' onPress={onSendPress}></CustomButton>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    title_container:{
        alignSelf:'flex-start',
    },

});

export default ForgetPassword;