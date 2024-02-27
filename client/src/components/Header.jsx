import React, {useState} from "react";
import {ScrollView, StyleSheet, Text, useWindowDimensions, View} from "react-native";
import s from "../../styles";
import DotsMenu from "./DotsMenu";
import DotsMenu2 from "./DotsMenu2";
import {MenuProvider} from "react-native-popup-menu";

function Header({user}) {
    const s=require('../../styles')
  return (
      <View style={styles.container_header}>
          <Text style={s.medium_text}>Welcome, {user.username}!</Text>
          <DotsMenu2 userD={user}></DotsMenu2>
      </View>

  );
}

const styles = StyleSheet.create({
    container_header:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal:16
    },
});
export default Header;