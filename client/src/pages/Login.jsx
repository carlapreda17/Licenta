import {Image, ScrollView, StatusBar, StyleSheet, Text, useWindowDimensions, View} from "react-native";
import Logo from '../../assets/images/SplitScreen.png'
import CustomInput from '../components/Input'
import React from "react";
import {useState} from 'react'
import CustomButton from "../components/CustomButton";
import SocialMediaButton from "../components/SocialMediaButton";
import {useNavigation} from "@react-navigation/native";

function Login(){
    const[username,setUsername]=useState('')
    const[password,setPassword]=useState('')

    const windowHeight = useWindowDimensions().height;
    const navigation = useNavigation()
    const onSignInPressed = () => {
            console.warn('Sign in')
    }
    const onForgotPasswordPressed = () =>{
        navigation.navigate('ForgetPassword')
    }

    const onSignInFacebook = () => {

    }

    const onSignInGoogle = () => {

    }
    const onSignInApple = () => {

    }

    const onCreate = () => {
        navigation.navigate('SignUp')
    }


    const {height}=useWindowDimensions()
    return (
        <ScrollView showsVerticalScrollIndicator={false} scrollEnabled={windowHeight<750}>
        <View style={styles.container}>
            <Image source={Logo} style={[styles.logo,{height:height * 0.3}]} resizeMode="contain"></Image>
            <CustomInput placeholder="Username" value={username} setValue={setUsername}></CustomInput>
            <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry={true}></CustomInput>
            <CustomButton text={'Sign In'} onPress={onSignInPressed}></CustomButton>
            <CustomButton text={'Forgot password?'} onPress={onForgotPasswordPressed} type='link'></CustomButton>
            <SocialMediaButton text={'Sign In with Facebook'} onPress={onSignInFacebook} bgColor={'#E7EAF4'} fgColor={"#4765A9"}></SocialMediaButton>
            <SocialMediaButton text={'Sign In with Google'} onPress={onSignInGoogle} bgColor={'#FAE9EA'} fgColor={'#DD4D44'}></SocialMediaButton>
            <SocialMediaButton text={'Sign In with Apple'} onPress={onSignInApple} bgColor={'#EEEEEE'} fgColor={'#000'}></SocialMediaButton>
            <View style={styles.container_link}>
                <Text style={styles.account_text}>Don't have an account?</Text>
                <CustomButton text={'Create one'} onPress={onCreate} type='small_link'></CustomButton>
            </View>
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
    container_link:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginBottom:5
    },
    logo:{
        width:'70%',
        height:100,
        maxWidth:500,
        maxHeight:200,
        marginTop:30

    },
    account_text:{
        color:'#eee',
        fontSize:12,
        fontWeight:'normal'
    }
});

export default Login;