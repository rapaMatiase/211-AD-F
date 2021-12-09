import React, { useState, useEffect } from "react";

import {
    Heading,
    Text,
    Radio,
    FlatList
} from 'native-base';
import LayoutWithImage from "../../components/LayoutWithImage";
import LayoutWithImageSimple from "../../components/LayoutWithImageSimple";
import MyButton from "../../components/MyButton";
import axios from 'axios';

const NuevoReclamoSeleccionarRubroScreen = ({ navigation , route}) => {

    const [value, setValue] = useState("1");

    const handleSubmit = () => {

        const item = json.filter((item) => {
            return item.idRubro == value
        })

        navigation.navigate(
            'NewClaimStack', {
                screen : 'NuevoReclamoDesperfecto', 
                params: { 
                    idRubro : item[0].idRubro,
                    descripcionRubro: item[0].descripcion,
                    ...route.params
                }
            })
    }

    const [json, setJson] = useState([]); 

     useEffect(() => {
        axios({
            method : "GET",
            url : `http://10.0.2.2:3000/api/rubros`,
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
            <Heading>Seleccione el rubro </Heading>
            <Text> Seleccione de la siguiente lista el rubro para luego habilitar una lista de desperfectos.</Text>
            <Radio.Group
                name="myRadioGroup"
                defaultValue="0"
                value={value}
                onChange={(nextValue) => setValue(nextValue)}
            >
                <FlatList
                    data={json}
                    renderItem={({ item }) => (<Radio key={item.idRubro} value={item.idRubro} my={2}> {item.descripcion} </Radio>)}
                />
            </Radio.Group>
            <MyButton text="Siguiente" onPress={handleSubmit} />
        </LayoutWithImageSimple>
    );
}

export default NuevoReclamoSeleccionarRubroScreen;