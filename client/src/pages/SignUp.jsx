import {Image, ScrollView, StatusBar, StyleSheet, Text, useWindowDimensions, View, Alert} from "react-native";
import Logo from '../../assets/images/SplitScreen.png'
import CustomInput from '../components/Input'
import React from "react";
import {useState} from 'react'
import CustomButton from "../components/CustomButton";
import SocialMediaButton from "../components/SocialMediaButton";
import {useNavigation} from "@react-navigation/native";
import axios from "axios"
import { API_URL } from '@env';



function SignUp(){
    const[username,setUsername]=useState('')
    const[password,setPassword]=useState('')
    const[email,setEmail]=useState('')
    const[phone,setPhone]=useState('')
    const [showPassword, setShowPassword] = useState(false);
    const windowHeight = useWindowDimensions().height;
    const navigation = useNavigation()
    const [errors, setErrors] = useState({});
    const s=require('../../styles')

    const validate = () => {
        let isValid = true;
        let errors = {};

        if (!username.trim()) {
            errors.username = 'Username is required';
            isValid = false;
        }

        if (!email) {
            errors.email = 'Email is required';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = 'Email address is invalid';
            isValid = false;
        }
        if (!password) {
            errors.password = 'Password is required';
            isValid = false;
        } else if (password.length < 8) {
            errors.password = 'Password must be at least 8 characters';
            isValid = false;
        } else if (!/(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{8,}/.test(password)) {
            errors.password = 'Password must include lowercase, uppercase, number, and special character';
            isValid = false;
        }

        if (!phone) {
            errors.phone = 'Phone number is required';
            isValid = false;
        } else if (!/^\d{10}$/.test(phone)) {
            errors.phone = 'Phone number is invalid';
            isValid = false;
        }

        setErrors(errors);
        return isValid;
    };

    const onRegisterPressed = async () => {
        if (validate()) {
            const userData = {
                username: username,
                parola: password,
                email: email,
                telefon: phone,
            };
            try {
                const response = await axios.post(`${API_URL}/users/signUp`, userData);
                if (response.status === 201) {
                    Alert.alert(
                        "Success",
                        "Your account has been created successfully",
                        [
                            {text: "OK", onPress: () => navigation.navigate('Login')}
                        ]
                    );
                } else {
                    console.warn('Failed to register');
                }
            } catch (error) {
                console.log(error.response.data)
                if (error.response) {
                    console.log('Registration failed with status code:', error.response.status);
                    if (error.response.status === 409 && error.response.data.field) {
                        console.log('Error:', error.response.data.field)
                        setErrors({...errors, [error.response.data.field]: error.response.data.message});
                    }
                } else if (error.request) {
                    console.log('No response received:', error.request);
                } else {
                    console.log('Error', error.message);
                }
            }
        }
    };


    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const onSignInFacebook = () => {

    }

    const onSignInGoogle = () => {

    }
    const onSignInApple = async () => {

    }

    const onCreate = () => {
        navigation.navigate('Login')
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false} scrollEnabled={windowHeight<900}>
            <View style={s.container}>
              <View style={styles.title_container}>
                  <Text style={s.title}>Create an account</Text>
              </View>
                <CustomInput placeholder="Username" value={username} setValue={setUsername} error={errors.username} type='account'></CustomInput>
                {errors.username && <Text style={s.errorText}>{errors.username}</Text>}
                <CustomInput placeholder="Email" value={email} setValue={setEmail} error={errors.email} type='mail'></CustomInput>
                {errors.email && <Text style={s.errorText}>{errors.email}</Text>}
                <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry={!showPassword} onToggleShowPassword={togglePasswordVisibility} error={errors.password} type="lock-outline"></CustomInput>
                {errors.password && <Text style={s.errorText}>{errors.password}</Text>}
                <CustomInput placeholder="Phone number" value={phone} setValue={setPhone} error={errors.phone} type='phone'></CustomInput>
                {errors.phone && <Text style={s.errorText}>{errors.phone}</Text>}
                <CustomButton text={'Register'} onPress={onRegisterPressed}></CustomButton>

                <View style={styles.container_social}>
                    <SocialMediaButton text={'Sign In with Facebook'} onPress={onSignInFacebook} bgColor={'#E7EAF4'} fgColor={"#4765A9"} type='facebook'></SocialMediaButton>
                    <SocialMediaButton text={'Sign In with Google'} onPress={onSignInGoogle} bgColor={'#FAE9EA'} fgColor={'#DD4D44'} type='google'></SocialMediaButton>
                    <SocialMediaButton text={'Sign In with Apple'} onPress={onSignInApple} bgColor={'#EEEEEE'} fgColor={'#000'} type='apple'></SocialMediaButton>
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
    title_container:{
       alignSelf:'flex-start',
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
    container_social:{
        marginTop:120,
        width:'100%'
    },
    
});

export default SignUp;