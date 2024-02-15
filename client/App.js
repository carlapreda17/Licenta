import React from "react";
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { AppLoading } from "expo";
import * as Font from 'expo-font';
import { COLORS, FONT } from "./constants/theme";

import s from "./styles";
import Login from "./src/pages/Login";
import HomePage from "./src/pages/HomePage";
import ForgetPassword from "./src/pages/ForgetPassword";
import SignUp from "./src/pages/SignUp";

const Stack = createStackNavigator();

const loadFontsAsync = async () => {
    await Font.loadAsync({
        [FONT.regular]: require('./assets/fonts/Nunito/Nunito-Regular.ttf'),
        [FONT.bold]: require('./assets/fonts/Nunito/Nunito-Bold.ttf'),
        [FONT.medium]: require('./assets/fonts/Nunito/Nunito-Medium.ttf'),
    });
};

export default function App() {
    const [fontsLoaded, setFontsLoaded] = React.useState(false);

    React.useEffect(() => {
        loadFontsAsync().then(() => {
            setFontsLoaded(true);
        });
    }, []);


    if(fontsLoaded){
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.background,overflow:'scroll',height:'100%'}}>
                <NavigationContainer>
                    <Stack.Navigator screenOptions={{
                        headerShown: false,
                        cardStyle: { backgroundColor: COLORS.background },
                        flex: 1
                    }}>
                        <Stack.Screen name="Login" component={Login}/>
                        <Stack.Screen name="HomePage" component={HomePage}/>
                        <Stack.Screen name="SignUp" component={SignUp}/>
                        <Stack.Screen name="ForgetPassword" component={ForgetPassword}/>
                    </Stack.Navigator>
                </NavigationContainer>
            </SafeAreaView>
        );
    }

}
