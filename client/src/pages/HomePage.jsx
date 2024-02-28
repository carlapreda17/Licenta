import React, { useEffect, useState } from 'react';
import {View, Text, ScrollView, useWindowDimensions, StyleSheet, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import useAuth from "../components/useAuth";
import CustomButton from "../components/CustomButton";
import Logo from '../../assets/images/SplitScreen.png'
import {COLORS,FONT,SIZES} from "../../constants/theme";
import DotsMenu from "../components/DotsMenu";
import Header from "../components/Header";
import {MenuProvider} from "react-native-popup-menu";
import {Camera} from "expo-camera";
import CameraScreen from "./CameraScreen";

const HomePage = () => {
    const [userDetails, setUserDetails] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [openCamera,setOpenCamera]=useState(false);
    const [hasPermission, setHasPermission] = useState(null);
    const isAuthenticated = useAuth();
    const s=require('../../styles')
    const height = useWindowDimensions().height;
    const navigation = useNavigation();

    useEffect(() => {
        if (!isAuthenticated) {
            return;
        }

        const fetchUserData = async () => {
            setIsLoading(true);
            try {
                const userDetailsString = await AsyncStorage.getItem('userDetails');
                if (userDetailsString) {
                    const userDetails = JSON.parse(userDetailsString);
                    setUserDetails(userDetails);
                } else {
                    console.log('No user details found');
                    navigation.navigate('Login');
                }
            } catch (error) {
                console.error('Failed to fetch user data:', error);
            }
            setIsLoading(false);
        };

        fetchUserData();

    }, [isAuthenticated]);

    const handleScanBill  = () => {
        navigation.navigate('CameraScreen');
    }

    if (!isAuthenticated || !userDetails) {
        return <View><Text style={s.title}>Loading user details...</Text></View>;
    }

    return (
        <ScrollView showsVerticalScrollIndicator={true} scrollEnabled={height<750}>
            <MenuProvider>
        <View style={s.container}>
            <Header user={userDetails}></Header>
                <Image source={Logo} style={[styles.logo,{height:height * 0.125},{marginTop: 30},{marginBottom:30}]} resizeMode="contain"></Image>
            <View style={styles.container_buttons}>
                <CustomButton text={'Scan bill'} onPress={handleScanBill}></CustomButton>
                <CustomButton text={'View history'}></CustomButton>

            </View>
        </View>
            </MenuProvider>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container_buttons: {
        alignItems: "center",
        justifyContent: "center",
        width:'100%',
        flex:1
    },


});

export default HomePage;
