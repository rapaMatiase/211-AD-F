import React from "react";
import {
    View,
    StyleSheet
} from 'react-native';
import {
    NativeBaseProvider
} from 'native-base';
import MyButton from './../components/MyButton';
import { RNCamera } from 'react-native-camera';
import { useCamera } from 'react-native-camera-hooks';
import RNFS from 'react-native-fs';

export default function Camara (){

    const [{cameraRef}, {takePicture}] = useCamera(null);

    const captureHandle = async () => {
        try {
            const data = await takePicture();
            console.log(data.uri)
            const filePath = data.uri
            const newFilePath = RNFS.ExternalDirectoryPath + '/MyTest.jpg'
            

            RNFS.moveFile(filePath, newFilePath )
            .then(() => {
                console.log("FILE MOVE")
            })
            .catch((error) => {
                console.log(error)
            })
        }catch (e) {
            console.log(e)
        }
    }

    return (
        <NativeBaseProvider style={styles.body}>
            <RNCamera 
                ref={cameraRef}
                type={RNCamera.Constants.Type.back}
                styles={styles.preview}
            >
                <MyButton text="Take" onPress={()=> captureHandle()} />
            </RNCamera>
            {/* <Image
                style={{width: 250, height: 250,}}
                source={{
                    uri: `file://${imagePath}`,
                }}
            /> */}
        </NativeBaseProvider>
    )
}

const styles = StyleSheet.create({
    body : {
        flex: 1
    },
    preview : {
        flex : 1,
        alignItems : "center",
        justifyContent : "flex-end"
    }
})