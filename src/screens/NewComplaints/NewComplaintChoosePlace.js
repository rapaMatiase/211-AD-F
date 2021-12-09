import React, { useState, useEffect } from "react";

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
import axios from 'axios';


const NewComplaintChoosePlace = ({ navigation , route}) => {

    const [value, setValue] = useState("1");

    const handleSubmit = () => {

        const item = json.filter((item) => {
            return item.idSitio == value
        })

        navigation.navigate(
            'NewComplaintStack', {
                screen : 'NewComplaintsDetailPlace', 
                params: { 
                    idPlace : item[0].idSitio,
                    namePlace : item[0].descripcion,
                    ...route.params
                }
            })
    }

    const [json, setJson] = useState([]); 

     useEffect(() => {
        axios({
            method : "GET",
            url : `http://10.0.2.2:3000/api/sitios`,
            responseType: "json"
        })
        .then( function (response){
            console.log(response.data)
            setJson(response.data)
        })
        .catch(function(error){
            console.log(error)
        })
    }, [setJson]); 

    return (
        <LayoutWithImageSimple>
            <Heading>Seleccionar Ubicacion</Heading>
            <Text> Selecciona de la lista una ubicacion. Si no aparece selecciona otros para ingresar la ubicacion a mano.</Text>
            <Radio.Group
                name="myRadioGroup"
                defaultValue="0"
                value={value}
                onChange={(nextValue) => setValue(nextValue)}
            >
                <FlatList
                    data={json}
                    renderItem={({ item }) => (<Radio key={item.idSitio} value={item.idSitio} my={2}> {item.descripcion} </Radio>)}
                />
            </Radio.Group>
            <MyButton text="Siguiente" onPress={handleSubmit} />
        </LayoutWithImageSimple>
    );
}

export default NewComplaintChoosePlace;