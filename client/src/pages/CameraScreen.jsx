import React, { useState, useEffect } from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity, Alert,ActivityIndicator} from 'react-native';
import { Camera } from 'expo-camera';
import { useNavigation } from '@react-navigation/native';
import CustomButton from "../components/CustomButton";
import {COLORS, FONT, SIZES} from "../../constants/theme";
import {API_URL} from "@env";
import s from "../../styles";
import axios from "axios";


const CameraScreen = ({route}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [hasPermission, setHasPermission] = useState(null);
    const [camera, setCamera] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const navigation = useNavigation();
    const { userDetails } = route.params;
    const s=require('../../styles')

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const uploadPhoto = async (photoUri) => {
        setIsLoading(true);
        const formData = new FormData();
        let localUri = photoUri;
        let filename = localUri.split('/').pop();

        let match = /\.(\w+)$/.exec(filename);
        let type = match ? `image/${match[1]}` : `image`;

        formData.append('photo', { uri: localUri, name: filename, type});
        formData.append('id', userDetails.id_utilizator);
        try {
            const response = await axios.post(`${API_URL}/data/upload`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            if (response.status === 201) {
               Alert.alert('Poza a fost realizata cu succes!');
               return response.data.data;
            }
        } catch (error) {
            if (error.response && error.response.data) {
                console.error("Eroare de la server:", error.response.data.message);
            } else if (error.request) {
                console.error("Cererea a fost trimisă, dar nu s-a primit niciun răspuns");
            } else {
                console.error("Eroare la crearea cererii:", error.message);
            }
        }finally {
            setIsLoading(false);
        }
    };
    const takePicture = async () => {
        if (camera) {
            const photo = await camera.takePictureAsync();
            let data=await uploadPhoto(photo.uri);
            navigation.navigate('BillPreview',{photoUri: photo.uri, userDetails: userDetails,data:data});
        }
    };
    const onClose = () => {
        navigation.navigate('HomePage');
    }

    if (hasPermission === null) {
        return <View style={s.container}><Text style={s.title}>Requesting camera permission...</Text></View>;
    }
    if (hasPermission === false) {
        return <View style={s.container}><Text style={s.title}>No access to camera</Text></View>;
    }

    return (
        <View style={styles.container}>
            <Camera
                style={styles.camera}
                type={type}
                ref={(r) => {
                    setCamera(r);
                }}>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            setType(
                                type === Camera.Constants.Type.back
                                    ? Camera.Constants.Type.front
                                    : Camera.Constants.Type.back
                            );
                        }}>
                        <Text style={styles.text}>Flip</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={takePicture}>
                        <Text style={styles.text}>Take Picture</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={onClose}>
                        <Text style={styles.text}>Close</Text>
                    </TouchableOpacity>
                </View>
                {isLoading && (
                    <ActivityIndicator size="large" color="#222831" />
                )}
            </Camera>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    camera: {
        flex: 1,
    },
    buttonContainer: {
        flexDirection: 'row',
        margin: 20,
    },
    button: {
        backgroundColor:COLORS.background,
        padding:20,
        marginRight:10,
        borderRadius:10,
        borderStyle:"solid",
        borderWidth:2,
        borderColor:COLORS.yellow,
    },
    text:{
        fontSize:SIZES.normal,
        color:COLORS.yellow,
        fontFamily:FONT.bold
    }
});

export default CameraScreen;
