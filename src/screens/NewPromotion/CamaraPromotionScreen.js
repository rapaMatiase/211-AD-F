import React from "react";
import {
    StyleSheet
} from 'react-native';
import {
    NativeBaseProvider,
    Pressable,
    Text,
} from 'native-base';
import MyButton from './../../components/MyButton';
import { RNCamera } from 'react-native-camera';
import { useCamera } from 'react-native-camera-hooks';
import RNFS from 'react-native-fs';
import { useState } from "react/cjs/react.development";
import MyModal from './../../components/Modal';


export default function Camara ({navigation, route}){

    const [{cameraRef}, {takePicture}] = useCamera(null);
    const [images, setImages] = useState([])
    const [counter, setCounter] = useState(0)
    const [show, setShow] = useState(false)
   
    const captureHandle = async () => {
        try {
            const data = await takePicture();
            console.log(data.uri)
            const filePath = data.uri
            const newFilePath = `${RNFS.ExternalDirectoryPath}/MyPhoto-${counter}.jpg` 
            setCounter((counter)=>counter + 1)

            RNFS.moveFile(filePath, newFilePath )
            .then(() => {
                console.log("FILE MOVE")
            })
            .catch((error) => {
                console.log(error)
            })
           
            setImages([...images, newFilePath])
           
           
        }catch (e) {
            console.log(e)
        }

        console.log(images)
        setShow(true)
    }

    const NextScreen = () => {
        navigation.navigate(
            'NewPromotionStack', 
            {
                screen : 'NewPromotionConfirm', 
                params : {
                    ...route.params,
                    images
                }
            }
        )
    }

    const TakeOtherImage = () => {
        if(counter < 6 ){
            setShow(false)
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
            <MyModal
                title="Images"
                message={`Puedes tomar como maximo 7 imagenes. Te quedan ${counter}`}
                show={show}
            >   
                    <Pressable onPress={TakeOtherImage}>
                        <Text> Tomar otra</Text>
                    </Pressable>
                    
                    <Pressable onPress={NextScreen}>
                        <Text> Siguiente</Text>
                    </Pressable>
            </MyModal>
        </NativeBaseProvider>
    )
}

const styles = StyleSheet.create({
    body : {
        height : "100%",
        backgroundColor : "red"
    },
    preview : {
        flex : 1,
        alignItems : "center",
        justifyContent : "flex-end"
    }
})