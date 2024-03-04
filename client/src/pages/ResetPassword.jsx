import React, {useState} from "react";
import {Alert, ScrollView, StyleSheet, Text, TouchableOpacity, useWindowDimensions, View} from "react-native";
import CustomInput from "../components/Input";
import CustomButton from "../components/CustomButton";
import SocialMediaButton from "../components/SocialMediaButton";
import {useNavigation} from "@react-navigation/native";
import s from "../../styles";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {COLORS,SIZES} from "../../constants/theme";
import GoBack from "../components/GoBack";
import axios from "axios";
import {API_URL} from "@env";

function ResetPassword({route}) {
    const {userDetails} = route.params;
    const[password,setPassword]=useState('')
    const[newPassword,setNewPassword]=useState('')
    const[confirmPassword,setConfirmPassword]=useState('')
    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState({});
    const navigation = useNavigation()
    const s=require('../../styles')

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };


    const validate = () => {
        let isValid = true;
        let errors = {};

        if (!newPassword) {
            errors.newPassword = 'Password is required';
            isValid = false;
        } else if (newPassword.length < 8) {
            errors.newPassword = 'Password must be at least 8 characters';
            isValid = false;
        } else if (!/(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{8,}/.test(newPassword)) {
            errors.newPassword = 'Password must include lowercase, uppercase, number, and special character';
            isValid = false;
        }

        setErrors(errors);
        return isValid;
    };

    const onReset = async () => {
        let errors = {};
       if(validate()){
           if(newPassword!==confirmPassword){
              errors.confirmPassword='Passwords do not match'
           }
           const resetData = {
               parola: password,
               email:userDetails.email,
               parolaNoua: newPassword,
           }
           try{
               const response= await  axios.put(`${API_URL}/auth/reset-password`, resetData)
               if(response.status===200){
                   Alert.alert('Password reset successfully')
                   navigation.goBack()
               }

           } catch(error) {
               console.log(error.response)
               if(error.response) {
                   if(error.response.status === 401) {
                          errors.password = 'Invalid password';
                          setErrors(errors)
                       }
                   if(error.response.status === 409) {
                      errors.newPassword = 'Password already used';
                      setErrors(errors)
                   }
               }
           }
       }
    }
    const windowHeight= useWindowDimensions().height;
    return (
        <ScrollView showsVerticalScrollIndicator={false} scrollEnabled={windowHeight<750}>
            <View style={s.container}>
                <GoBack></GoBack>
                <View style={styles.title_container}>
                    <Text style={s.title}>Reset your password</Text>
                </View>
                <Text style={s.label}>Old password</Text>
                <CustomInput placeholder="Enter your actual password" value={password} setValue={setPassword} secureTextEntry={!showPassword} onToggleShowPassword={togglePasswordVisibility} type='lock-outline'></CustomInput>
                {errors.password && <Text style={s.errorText}>{errors.password}</Text>}
                <Text style={s.label}>New password</Text>
                <CustomInput placeholder="Enter your new password" value={newPassword} setValue={setNewPassword} error={errors.newPassword} type='lock-outline'></CustomInput>
                {errors.newPassword && <Text style={s.errorText}>{errors.newPassword}</Text>}
                <CustomInput placeholder="Confirm your new password" value={confirmPassword} setValue={setConfirmPassword} type='check'></CustomInput>
                {errors.confirmPassword&& <Text style={s.errorText}>{errors.confirmPassword}</Text>}
                <CustomButton text={'Reset password'} onPress={onReset}></CustomButton>

            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    title_container:{
        alignSelf:'flex-start',
    },

});

export default ResetPassword;