import {Image, ScrollView, StatusBar, StyleSheet, Text, useWindowDimensions, View} from "react-native";
import Logo from '../../assets/images/SplitScreen.png'
import CustomInput from '../components/Input'
import React from "react";
import {useState} from 'react'
import CustomButton from "../components/CustomButton";
import SocialMediaButton from "../components/SocialMediaButton";
import {useNavigation} from "@react-navigation/native";
import axios from "axios";

function SignUp(){
    const[username,setUsername]=useState('')
    const[password,setPassword]=useState('')
    const[email,setEmail]=useState('')
    const[phone,setPhone]=useState('')
    const windowHeight = useWindowDimensions().height;
    const navigation = useNavigation()

        const onRegisterPressed = async () => {
            const userData = {
                username: username,
                parola: password,
                email: email,
                telefon: phone,
            };
            try {
                const response = await axios.post('http://192.168.100.64:8085/users/signUp', userData);
                if(response.status===201)
                {
                    navigation.navigate('Login')
                }
                else{
                    console.warn('Failed to register')
                }

            } catch(error) {
                console.log('Registration failed', error);
            }
        }


    const onSignInFacebook = () => {

    }

    const onSignInGoogle = () => {

    }
    const onSignInApple = () => {

    }

    const onCreate = () => {
        navigation.navigate('Login')
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false} scrollEnabled={windowHeight<750}>
            <View style={styles.container}>
              <View style={styles.title_container}>
                  <Text style={styles.title}>Create an account</Text>
              </View>
                <CustomInput placeholder="Username" value={username} setValue={setUsername}></CustomInput>
                <CustomInput placeholder="Email" value={email} setValue={setEmail}></CustomInput>
                <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry={true}></CustomInput>
                <CustomInput placeholder="Phone number" value={phone} setValue={setPhone}></CustomInput>
                <CustomButton text={'Register'} onPress={onRegisterPressed}></CustomButton>

                <View style={styles.margin_top}>
                    <SocialMediaButton text={'Sign In with Facebook'} onPress={onSignInFacebook} bgColor={'#E7EAF4'} fgColor={"#4765A9"}></SocialMediaButton>
                    <SocialMediaButton text={'Sign In with Google'} onPress={onSignInGoogle} bgColor={'#FAE9EA'} fgColor={'#DD4D44'}></SocialMediaButton>
                    <SocialMediaButton text={'Sign In with Apple'} onPress={onSignInApple} bgColor={'#EEEEEE'} fgColor={'#000'}></SocialMediaButton>
                </View>
                <View style={styles.container_link}>
                    <Text style={styles.account_text}>Have an account?</Text>
                    <CustomButton text={'Sign In'} onPress={onCreate} type='small_link'></CustomButton>
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
    title_container:{
       alignSelf:'flex-start',
    },
    title:{
        color:'#FFD369',
        fontSize:24,
        fontWeight:'bold',
        marginVertical:20,


    },
    container_link:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginBottom:5
    },

    account_text:{
        color:'#eee',
        fontSize:12,
        fontWeight:'normal'
    },
    margin_top:{
        marginTop:120,
        width:'100%'
    }
});

export default SignUp;