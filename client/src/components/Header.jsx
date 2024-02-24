import React, {useState} from "react";
import {ScrollView, StyleSheet, Text, useWindowDimensions, View} from "react-native";
import s from "../../styles";
import DotsMenu from "./DotsMenu";

function Header({username}) {
    const s=require('../../styles')
  return (
      <View style={styles.container_header}>
          <Text style={s.medium_text}>Welcome, {username}!</Text>
          <DotsMenu></DotsMenu>
      </View>
  );
}

const styles = StyleSheet.create({
    container_header:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        padding: 16,
    },
});
export default Header;