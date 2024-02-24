import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomePage = () => {
    const [userDetails, setUserDetails] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const token = await AsyncStorage.getItem('userToken');
                const userDetailsString = await AsyncStorage.getItem('userDetails');
                const userDetails = JSON.parse(userDetailsString);

                setUserDetails(userDetails);
            } catch (error) {
                console.error('Failed to fetch user data:', error);
            }
        };

        fetchUserData();
    }, []);

    if (!userDetails) {
        return <View><Text>Loading user details...</Text></View>;
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Welcome, {userDetails.username}!</Text>
            <Text>Email: {userDetails.email}</Text>
            <Text>Telefon: {userDetails.telefon}</Text>
        </View>
    );
};

export default HomePage;
