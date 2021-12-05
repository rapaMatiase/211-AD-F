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
    "00",
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
]

const NewPromotionDesdeHorarioScreen = ({ navigation, route }) => {

    const [desdeHorario, setDesdeHorario] = useState("")
    const [showAlert, setShowAlert] = useState(false)

    const NextScreen = () => {
        if(desdeHorario != ""){
        navigation.navigate(
                'NewPromotionStack',
                {
                    screen: 'NewPromotionHastaHorario',
                    params: {
                    ...route.params,
                    desdeHorario
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
                            setDesdeHorario(nextValue)
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


export default NewPromotionDesdeHorarioScreen;