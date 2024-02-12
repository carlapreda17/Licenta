import React, {useState} from "react";
import {ScrollView, StyleSheet, Text, useWindowDimensions, View} from "react-native";
import CustomInput from "../components/Input";
import CustomButton from "../components/CustomButton";
import SocialMediaButton from "../components/SocialMediaButton";


function ForgetPassword(){
    const[password,setPassword]=useState('')
    const[username,setUsername]=useState('')

    const onSendPress = () => {
        console.warn('Send')
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
                <CustomButton text={'Back to Sign In'} type='link'></CustomButton>
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