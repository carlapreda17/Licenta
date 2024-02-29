import React, { useEffect, useState } from 'react';
import { View, Image, Text, ActivityIndicator, StyleSheet } from 'react-native';
import TextRecognition from 'react-native-text-recognition'

const TextPreview = ({ route }) => {
    const { photoUri } = route.params;
    const [isLoading, setIsLoading] = useState(true);
    const [recognizedText, setRecognizedText] = useState('');

    useEffect(() => {
        const processImage = async () => {
            setIsLoading(true);
            try {
                console.log(photoUri);
                const resultFromUri = await TextRecognition.recognize(photoUri,{visionIgnoreThreshold: 0.5,visionOcrMode: 'ocr'});
                setRecognizedText(resultFromUri ? resultFromUri : 'Nu s-a putut recunoaște textul.');
            } catch (error) {
                console.error(error);
                setRecognizedText('Eroare la recunoașterea textului.');
            } finally {
                setIsLoading(false);
            }
        };

        processImage();
    }, [photoUri]);

    return (
        <View style={styles.container}>
            {isLoading ? (
                <ActivityIndicator size="large" />
            ) : (
                <>
                    <Text style={styles.text}>{recognizedText}</Text>
                </>
            )}
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
    text: {
        textAlign: 'center',
    },
});

export default TextPreview;