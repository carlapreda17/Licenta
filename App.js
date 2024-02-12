import { StatusBar } from 'expo-status-bar';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Login from "./src/pages/Login";
import SignUp from "./src/pages/SignUp";
import NewPasswordScreen from "./src/pages/NewPasswordScreen";
import Navigation from "./src/navigation";
export default function App() {
  return (
      <SafeAreaView style={styles.root}>
         <Login></Login>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    root:{
        backgroundColor:'#222831',
        flex:1,

    }
})