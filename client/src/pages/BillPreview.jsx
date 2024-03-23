import React, { useEffect, useState } from 'react';
import {
    View,
    Image,
    Text,
    ActivityIndicator,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Modal,
    TextInput, Dimensions, KeyboardAvoidingView
} from 'react-native';
import GoBack from "../components/GoBack";
import CustomInput from "../components/Input";
import {COLORS, FONT, SIZES} from "../../constants/theme";
import s from "../../styles";
import CustomButton from "../components/CustomButton";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import Input from "../components/Input";

const windowWidth = Dimensions.get('window').width;

const BillPreview = ({ route }) => {
    const { items,total } = route.params.data;
    const [modalVisible, setModalVisible] = useState(false);
    const [name, setName] = useState('');

    const s=require('../../styles');

    const toggleModal =()=>{
        setModalVisible(!modalVisible)
        setName("")
    }


    return (
        <View style={s.container}>
            <GoBack text={"Detalii bon"}/>
            <TouchableOpacity style={styles.details_wrapper} onPress={toggleModal}>
                <Text style={[s.medium_text]}>Adauga partener</Text>
                <MaterialCommunityIcons style={styles.plus_circle} name={'plus-circle'} size={30} color={COLORS.yellow}/>
            </TouchableOpacity>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <TouchableOpacity
                                style={styles.buttonClose}
                                onPress={toggleModal}
                            >
                                <MaterialCommunityIcons name={'close'} size={24} color={COLORS.background}/>
                            </TouchableOpacity>
                            <CustomInput placeholder="Nume" value={name} setValue={setName} type='account-edit' isSmall={true}></CustomInput>
                            <TouchableOpacity style={styles.add_button}>
                                <Text style={styles.add_text}>Adauga</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
            <View style={styles.bill_wrapper}>
                <ScrollView showsVerticalScrollIndicator={true}>
                    {items.map((item) => (
                        <View key={item.name} style={styles.items_wrapper}>
                            <Text style={[styles.text_items,styles.text]} numberOfLines={2} ellipsizeMode="tail">
                                {item.name}
                            </Text>
                            <Text style={[styles.text_prices,styles.text]}>
                                {item.price}
                            </Text>
                        </View>
                    ))}
                </ScrollView>
                <Text style={styles.text_total}>Total: {total}</Text>
                <View style={styles.button_container}>
                    <CustomButton text={"Calculeaza"} style={s.text_btn_primary} onPress={() => {}}/>
                </View>
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
    button_container: {
        width: '100%',
        padding: 10,
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius:20

    },
    text:{
        color: COLORS.background,
        fontFamily:FONT.bold,
        fontSize:SIZES.medium,

    },
    text_items: {
        flex:1,
        textAlign: 'left',
        paddingLeft:10,
        marginTop:20,
        paddingBottom:10,


    },
    text_prices: {
        flex:1,
        textAlign: 'right',
        paddingRight:20,
        marginTop:20,
        paddingBottom:10,

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
        maxHeight: 450
    },
    items_wrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.lightGray,
        alignItems:'center',

    },
    details_wrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
        alignSelf:'flex-start',
        marginHorizontal:20,
        marginTop:30,
        marginBottom:10,
    },
    plus_circle:{
        paddingLeft:10
    },
    modalOverlay: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        width: windowWidth*0.75,
        margin: 20,
        backgroundColor: COLORS.yellow,
        borderRadius: 20,
        padding: 55,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 5
    },
    buttonClose: {
        padding: 10,
        elevation: 2,
        position: 'absolute',
        top: 5,
        right: 5
    },

    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    add_button:{
        backgroundColor:COLORS.background,
        paddingHorizontal:40,
        paddingVertical:10,
        borderRadius:20,
        marginTop:30
    },
    add_text:{
        color:COLORS.yellow,
        fontFamily:FONT.bold,
        fontSize:SIZES.medium
    }

});

export default BillPreview;
