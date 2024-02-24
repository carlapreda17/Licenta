import { useEffect, useState } from 'react';
import {jwtDecode} from 'jwt-decode';
import {useNavigation} from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { decode as atob } from 'base-64';


global.atob = atob;
const useAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigation = useNavigation();

    useEffect(() => {
        const checkAuth = async () => { // Fă funcția asincronă
            const token = await AsyncStorage.getItem('userToken'); // Așteaptă rezultatul

            if (!token) {
                console.log('No token found');
                setIsAuthenticated(false);

                if(!isAuthenticated) {
                    navigation.navigate('Login');
                }

                return;
            }

            try {
                const decoded = jwtDecode(token);


                if (decoded.exp < new Date().getTime() / 1000) {
                    setIsAuthenticated(false);

                    if(!isAuthenticated) {
                        navigation.navigate('Login');
                    }
                } else {
                    setIsAuthenticated(true);
                }
            } catch (error) {
                console.error('Error decoding token:', error);
                setIsAuthenticated(false);

                if(!isAuthenticated) {
                    navigation.navigate('Login');
                }
            }
        };


        checkAuth();
        const interval = setInterval(checkAuth, 300000);

        return () => clearInterval(interval);
    }, []);

    return isAuthenticated;
};

export default useAuth;