import React, { useEffect, useState } from 'react';
import { View, Image, Text, ActivityIndicator, StyleSheet } from 'react-native';
import GoBack from "../components/GoBack";
import {COLORS, FONT, SIZES} from "../../constants/theme";
import s from "../../styles";


const BillPreview = ({ route }) => {
    const { items,total } = route.params.data;

    const s=require('../../styles');
    return (
        <View style={s.container}>
            <GoBack />
           <View style={styles.details_wrapper}>
               <Text style={s.large_text}>Detalii bon</Text>
           </View>
            <View style={styles.bill_wrapper}>
                {items.map((item, index) => (
                    <View style={styles.items_wrapper}>
                        <Text key={index} style={styles.text_items}>
                            {item.name}
                        </Text>
                        <Text key={index} style={styles.text_items}>
                            {item.price}
                        </Text>
                    </View>
                ))}
                <Text style={styles.text_total}>Total: {total}</Text>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    text_items: {
        textAlign: 'left',
        paddingHorizontal:20,
        marginTop:10,
        paddingBottom:10,// Add some padding for better readability
        color: COLORS.background,
        fontFamily:FONT.bold,
        fontSize:SIZES.medium
    },
    text_total: {
        textAlign: 'right',
        padding:30,
        fontFamily:FONT.bold,
        fontSize:SIZES.large
    },
    bill_wrapper: {
        backgroundColor:COLORS.lightGray,
        marginHorizontal:10,
        marginTop:100,
        borderRadius:10,
        width:'90%',
    },
    items_wrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.lightGray,
    },
    details_wrapper: {
        alignSelf:'flex-start',
        marginHorizontal:20,
        marginTop:30,
        marginBottom:10,
    }
});

export default BillPreview;
