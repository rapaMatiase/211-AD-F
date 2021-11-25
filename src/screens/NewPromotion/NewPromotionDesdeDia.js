import React, { useState } from "react";
import LayoutWithImage from "../../components/LayoutWithImage";
import {
    Text,
    Radio,
    FlatList,
    Heading
} from "native-base"
import MyButtom from '../../components/MyButton';
import AlertMessage from "../../components/AlertMessage";

const optiones = [
    "LU",
    "MA",
    "MI",
    "JU",
    "VI",
    "SA",
    "DO"
]

const NewPromotionDesdeDiaScreen = ({ navigation, route }) => {

    const [desdeDia, setDesdeDia] = useState("")
    const [showAlert, setShowAlert] = useState(false)

    const NextScreen = () => {
        if(desdeDia != ""){
        navigation.navigate(
                'NeighboursStack',
                {
                    screen: 'NewPromotionHastaDia',
                    params: {
                    ...route.params,
                    desdeDia
                    }
                }
            )
        }else{
            setShowAlert(true)
        }
    }
    return (
        <LayoutWithImage image="https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg">
            <Heading size="lg"> Desde </Heading>
            <Text> ¿En que horario arranca la promosion?</Text>
            <Radio.Group
                        name="myRadioGroup"
                        accessibilityLabel="favorite number"
                        onChange={(nextValue) => {
                            setDesdeDia(nextValue)
                        }}
                    >
                        <FlatList 
                            data={optiones}
                            renderItem={({item}) => <Radio value={item} my={1}> {item} </Radio>}
                        />
                    </Radio.Group>
                <MyButtom 
                    text="Siguiente" 
                    onPress={NextScreen} 
                />
                <AlertMessage 
                    message="Debe seleccionar una opcion para continuar"
                    show={showAlert}
                />
        </LayoutWithImage>
    );
}


export default NewPromotionDesdeDiaScreen;