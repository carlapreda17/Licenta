import {Image, ScrollView, StatusBar, StyleSheet, Text, useWindowDimensions, View,Alert} from "react-native";
import Logo from '../../assets/images/SplitScreen.png'
import SVG1 from '../../assets/images/SplitScreen.png'
import SVG3 from '../../assets/images/SplitScreen.png'
import CustomInput from '../components/Input'
import React from "react";
import {useState} from 'react'
import CustomButton from "../components/CustomButton";
import SocialMediaButton from "../components/SocialMediaButton";
import {useNavigation} from "@react-navigation/native";
import axios from "axios";
import {COLORS,FONT,SIZES} from "../../constants/theme";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_URL } from '@env';


function Login(){
    const[username,setUsername]=useState('')
    const[password,setPassword]=useState('')
    const [showPassword, setShowPassword] = useState(false);

    const windowHeight = useWindowDimensions().height;
    const navigation = useNavigation()
    const s=require('../../styles')
    const onSignInPressed = async () => {
        const loginData = {
            username: username,
            parola: password,
        };
        try {
            const response = await axios.post(`${API_URL}/auth/login`, loginData);
            if(response.status === 200) {
                const {data: {data:{email, telefon,token, username,id_utilizator}}} =response;
                await AsyncStorage.setItem('userToken', token);
                await AsyncStorage.setItem('userDetails', JSON.stringify({email, telefon, username,id_utilizator}));
                navigation.navigate('HomePage')
                setUsername('')
                setPassword('')
            }
        } catch (error) {
            Alert.alert("Login Failed", "Username or password is incorrect");
        }
    };
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const onForgotPasswordPressed = () =>{
        navigation.navigate('ForgetPassword')
    }

    const onSignInFacebook = () => {
        console.warn("facebook")
    }

    const onSignInGoogle = () => {
        console.warn('google')
    }
    const onSignInApple = () => {
        console.warn('apple')
    }

    const onCreate = () => {
        navigation.navigate('SignUp')
    }
    const {height}=useWindowDimensions()
    return (
        <ScrollView showsVerticalScrollIndicator={true} scrollEnabled={height<750}>
            <View style={s.container}>
                <Image source={SVG3} style={[styles.logo,{height:height * 0.3}]} resizeMode="contain"></Image>
                <CustomInput placeholder="Username" value={username} setValue={setUsername} type='account'></CustomInput>
                <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry={!showPassword} onToggleShowPassword={togglePasswordVisibility} type='lock-outline'></CustomInput>
                <CustomButton text={'Sign In'} onPress={onSignInPressed}></CustomButton>
                <CustomButton text={'Forgot password?'} onPress={onForgotPasswordPressed} type='link'></CustomButton>
                <View style={styles.container_btns}>
                    <SocialMediaButton text={'Sign In with Facebook'} onPress={onSignInFacebook} bgColor={'#E7EAF4'} fgColor={"#4765A9"} type='facebook'></SocialMediaButton>
                    <SocialMediaButton text={'Sign In with Google'} onPress={onSignInGoogle} bgColor={'#FAE9EA'} fgColor={'#DD4D44'} type='google'></SocialMediaButton>
                    <SocialMediaButton text={'Sign In with Apple'} onPress={onSignInApple} bgColor={'#EEEEEE'} fgColor={'#000'} type='apple'></SocialMediaButton>
                </View>
                <View style={styles.container_link}>
                    <Text style={styles.account_text}>Don't have an account?</Text>
                    <CustomButton text={'Create one'} onPress={onCreate} type='small_link'></CustomButton>
                </View>
            </View>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    container_link:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginBottom:5
    },
    container_btns:{
        alignItems: "center",
        justifyContent: "center",
        width:'100%',
        marginTop:25
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
        fontWeight:'normal',
        fontFamily:FONT.regular
    },

});

export default Login;