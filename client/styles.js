'use strict';
import { StyleSheet } from 'react-native';
import { COLORS,FONT, SIZES } from "./constants/theme";

module.exports = StyleSheet.create({
   root:{
       backgroundColor:COLORS.background,
       flex:1,
       fontFamily:FONT.regular
   },
    container: {
        alignItems: 'center',
        padding:20
    },
    text_btn_primary:{
        color:COLORS.background,
        fontFamily:FONT.bold,
        fontSize:SIZES.medium,

    },
    text_btn_link: {
        fontSize:SIZES.normal,
        color:COLORS.white,
        fontFamily:FONT.medium
    },
    text_btn_small_link: {
        fontSize:SIZES.small,
        textDecorationLine:'underline',
        color:COLORS.white,
        fontFamily:FONT.regular
    },
    social_media_btn_text:{
        fontSize:16,
        fontFamily:FONT.medium,
    },
    social_media_btn_container:{
        width:'100%',
        padding:15,
        marginVertical:10,
        justifyContent:'flex-start',
        alignItems: 'center',
        flexDirection: 'row'
    },
    btn_container:{
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10
    },
    container_primary: {
        backgroundColor:COLORS.yellow,
        padding:15,
        marginVertical:10,
        width:'100%',
    },
    container_link: {
        marginVertical:10,
        width:'100%',
    },
    container_small_link: {
        marginVertical:3,
        padding:5,
    },
    input_text:{
        height:40,
        fontSize:SIZES.medium,
        fontFamily:FONT.regular,
        paddingLeft:40,
    },
    input_container:{
        backgroundColor:COLORS.white,
        width:'100%',
        borderColor:COLORS.lightGray,
        borderWidth:1,
        borderRadius:5,
        paddingHorizontal:10,
        marginVertical:10,
    },
    eye_icon:{
        position: 'absolute',
        right: 10,
        top: '50%',
        transform: [{ translateY: -12 }],
        justifyContent: 'center',
        alignItems: 'center',
    },
    icons_input:{
        position: 'absolute',
        left: 10,
        top: '50%',
        transform: [{ translateY: -12 }],
        justifyContent: 'center',
        alignItems: 'center',
    },
    social_icons:{
        position: 'absolute',
        left: 10,
        alignSelf: 'center',

    },
    title:{
        color:COLORS.yellow,
        fontSize:SIZES.xLarge,
        fontFamily:FONT.bold,
        marginTop:20,
        marginBottom:10
    },
    label:{
        color:COLORS.white,
        fontSize:16,
        fontFamily:FONT.medium,
        alignSelf:'flex-start',
        marginTop:10,
    },
    errorText: {
        color: COLORS.red,
        alignSelf: 'flex-start',
        fontSize: SIZES.normal,
    },
    medium_text:{
        fontSize:SIZES.medium,
        color:COLORS.yellow,
        fontWeight:'normal',
        fontFamily:FONT.medium
    },


});

