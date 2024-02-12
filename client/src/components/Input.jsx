import React from 'react';
import { StatusBar, StyleSheet,TextInput, Text, View } from 'react-native';

function Input({value,setValue, placeholder,secureTextEntry}) {
  return (
    <View style={styles.container}>
      <TextInput value={value} onChangeText={setValue} style={styles.input} placeholder={placeholder} secureTextEntry={secureTextEntry}></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#EEEEEE',
        width:'100%',
        borderColor:'#e8e8e8',
        borderWidth:1,
        borderRadius:5,
        paddingHorizontal:10,
        marginVertical:10,

    },
    input:{
        height:40,
        fontSize:18
    }
});


export default Input;