import React from "react";
import { SafeAreaView,View } from 'react-native';
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
import CameraScreen from "./src/pages/CameraScreen";
import Src from "@react-native-async-storage/async-storage/src";
import PhotoPreview from "./src/pages/PhotoPreview";
import TextPreview from "./src/pages/TextPreview";

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
    const s=require('./styles')
    React.useEffect(() => {
        loadFontsAsync().then(() => {
            setFontsLoaded(true);
        });
    }, []);


    if(fontsLoaded){
        return (
            <View style={s.root}>
                <SafeAreaView style={{ flex: 1, overflow:'scroll'}}>
                    <NavigationContainer>
                        <Stack.Navigator screenOptions={{
                            headerShown: false,
                            cardStyle: { backgroundColor: COLORS.background },
                            flex: 1
                        }}>
                            <Stack.Screen name="Login" component={Login}/>
                            <Stack.Screen name="HomePage" component={HomePage}/>
                            <Stack.Screen name='CameraScreen' component={CameraScreen}/>
                            <Stack.Screen name='TextPreview' component={TextPreview}/>
                            <Stack.Screen name="SignUp" component={SignUp}/>
                            <Stack.Screen name="ForgetPassword" component={ForgetPassword}/>
                        </Stack.Navigator>
                    </NavigationContainer>
                </SafeAreaView>
            </View>

        );
    }

}
