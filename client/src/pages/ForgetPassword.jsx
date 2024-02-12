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
    const onSendPress = () => {
        navigation.navigate('Login')
    }
   const windowHeight= useWindowDimensions().height;
    return (
        <ScrollView showsVerticalScrollIndicator={false} scrollEnabled={windowHeight<750}>
            <View style={styles.container}>
                <View style={styles.title_container}>
                    <Text style={styles.title}>Reset your password</Text>
                </View>

                <Text style={styles.label}>Username</Text>
                <CustomInput placeholder="Enter your username" value={username} setValue={setUsername}></CustomInput>

                <CustomButton text={'Send'} onPress={onSendPress}></CustomButton>
                <CustomButton text={'Back to Sign In'} type='link' onPress={onSendPress}></CustomButton>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#222831',
        alignItems: 'center',
        padding:20
    },
    title_container:{
        alignSelf:'flex-start',
    },
    title:{
        color:'#FFD369',
        fontSize:24,
        fontWeight:'bold',
        marginVertical:20,


    },
    label:{
        color:'#eee',
        fontSize:16,
        fontWeight:'normal',
        alignSelf:'flex-start',
        marginVertical:10
    },

});

export default ForgetPassword;