import React, { useState } from "react";

import {
    Heading,
    Text,
    Pressable,
    VStack,
    Radio,
    FlatList
} from 'native-base';
import LayoutWithImage from "../../components/LayoutWithImage";
import LayoutWithImageSimple from "../../components/LayoutWithImageSimple";
import MyButton from "../../components/MyButton";


const json = [{"idBarrio":1,"nombre":"Moreno"}, {"idBarrio":2,"nombre":"Merlo"},{"idBarrio":3,"nombre":"San martin"}]


const NewComplaintChoosePlace = ({ navigation , route}) => {

    const [value, setValue] = useState("1");

    const handleSubmit = () => {

        const item = json.filter((item) => {
            return item.idBarrio == value
        })
        console.log(item[0].nombre)

        navigation.navigate(
            'NewComplaintStack', {
                screen : 'NewComplaintsDetailPlace', 
                params: { 
                    isEmployee : false, 
                    idPlace : item[0].idBarrio,
                    namePlace : item[0].nombre
                }
            })
    }

    
    return (
        <LayoutWithImageSimple>
            <Heading>Ubicaciones de la denuncia </Heading>
            <Text> Selecciona de la lista una ubicacion. Si no aparece selecciona otros para ingresar la ubicacion a mano.</Text>
            <Radio.Group
                name="myRadioGroup"
                defaultValue="0"
                value={value}
                onChange={(nextValue) => setValue(nextValue)}
            >
                <FlatList
                    data={json}
                    renderItem={({ item }) => (<Radio key={item.idBarrio} value={item.idBarrio} my={2}> {item.nombre} </Radio>)}
                />
            </Radio.Group>
            <MyButton text="Siguiente" onPress={handleSubmit} />
        </LayoutWithImageSimple>
    );
}

export default NewComplaintChoosePlace;