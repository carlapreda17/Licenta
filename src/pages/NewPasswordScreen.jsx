import React, {useState} from "react";
import {ScrollView, StyleSheet, Text, useWindowDimensions, View} from "react-native";
import CustomInput from "../components/Input";
import CustomButton from "../components/CustomButton";
import SocialMediaButton from "../components/SocialMediaButton";


function NewPasswordScreen(){
    const[newPassword,setNewPassword]=useState('')
    const[code,setCode]=useState('')

    const onSubmitPress = () => {
        console.warn('Send')
    }
    const windowHeight= useWindowDimensions().height;
    return (
        <ScrollView showsVerticalScrollIndicator={false} scrollEnabled={windowHeight<750}>
            <View style={styles.container}>
                <View style={styles.title_container}>
                    <Text style={styles.title}>Reset your password</Text>
                </View>

                <Text style={styles.label}>Confirmation Code</Text>
                <CustomInput placeholder="Enter your code" value={code} setValue={setCode}></CustomInput>
                <Text style={styles.label}>New password</Text>
                <CustomInput placeholder="Enter your new password" value={newPassword} setValue={setNewPassword}></CustomInput>
                <CustomButton text={'Submit'} onPress={onSubmitPress}></CustomButton>
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

export default NewPasswordScreen;