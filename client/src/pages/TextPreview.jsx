import React, { useEffect, useState } from 'react';
import { View, Image, Text, ActivityIndicator, StyleSheet } from 'react-native';
import TextRecognition from 'react-native-text-recognition'

const TextPreview = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [recognizedText, setRecognizedText] = useState('');

    return (
        <View style={styles.container}>
          <Text>HELLO</Text>
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