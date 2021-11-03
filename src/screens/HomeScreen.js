import React from "react";
import LayoutWithBrand from "../components/LayoutWithBrand";
import {
    VStack,
    Button
} from "native-base";
import {  PermissionsAndroid, SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";

import Camera from 'react-native-camera';

async function requestCameraPermission() {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
      {
        title: 'Cool Photo App Camera Permission',
        message:
          'Cool Photo App needs access to your camera ' +
          'so you can take awesome pictures.',
      }
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('You can use the camera');
    } else {
      console.log('Camera permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
}  
const HomeScreen = () => {

    return (
        <LayoutWithBrand>
            <Text fontSize="lg" > Biendenido, ACA VA EL NOMBRE </Text>
            <VStack space={3}>
                <Button onPress={requestCameraPermission} > Reclamos </Button>
                <Button onPress={() => console.log("DENUNCIAS")}> Denuncias </Button>
                <Button onPress={() => console.log("PROMOS")}> Promos </Button>
            </VStack>

        </LayoutWithBrand>
    );
}

export default HomeScreen;