import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const PhotoPreview = ({ route }) => {
    const { photoUri } = route.params;
    return (
        <View style={styles.container}>
            <Image source={{ uri: photoUri }} style={styles.image} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: '80%',
    },
});

export default PhotoPreview;
