import React from 'react';

import {
    View,
    StyleSheet,
    Button,
    Text
} from 'react-native';
import {RNCamara} from 'react-native-camera';
import {useCamara} from 'react-native-camera-hooks';

export default function Camara(){

    const [{cameraRef}, {takePicture}] = useCamara(null);

    const captureHandle = async () => {
       try{
            const data = takePicture()
            console.log(data.uri)
       } catch (e) {
            console.log(e)
       }
    }

    return (
        <View style={styles.body}>
            <RNCamara
                ref={cameraRef}
                type={RNCamera.Coonstants.Type.back}
                style={styles.preview}
            >
                <Button onPress={()=>captureHandle()}>
                    <Text> SACAR</Text>
                </Button>
            </RNCamara>
        </View>
    );
}


const styles = Sytyles = StyleSheet.create({
    body: {
        flex: 1,
    },
    preview: {
        flex : 1,
        alignItems : "center",
        justifyContent : "flex-end"
    }
})