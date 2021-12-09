import React, { useState, useEffect } from "react";
import LayoutWithImage from "../../components/LayoutWithImage";
import {
    VStack,
    Text,
    Button,
    Heading,
    Radio,
    FlatList,
    TextArea,
} from "native-base";
import MyButton from "../../components/MyButton";
import InputWithControl from "../../components/InputWithControl";
import MunicipioEdificioImage from './../../assets/img/EdificioMunicipioDeMerlo.jpeg';
import InputTextarea from '../../components/InputTextarea';
import LayoutWithImageSimple from "../../components/LayoutWithImageSimple";

import axios from 'axios';

const NuevoReclamoDesperfectoScreen = ({navigation, route}) => {
    const [value, setValue] = useState("1");

    const handleSubmit = () => {

        const item = json.filter((item) => {
            return item.idDesperfecto == value
        })

        navigation.navigate(
            'NewClaimStack', {
                screen : 'NuevoReclamoDetallarDesperfecto', 
                params: { 
                    idDesperfecto : item[0].idDesperfecto,
                    descripcionDesperfecto: item[0].descripcion,
                    ...route.params
                }
            })
    }

    const [json, setJson] = useState([]); 

     useEffect(() => {
        axios({
            method : "GET",
            url : `http://10.0.2.2:3000/api/desperfecto/${route.params.idRubro}`,
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
            <Heading>Ubicaciones del reclamo2 </Heading>
            <Text> Selecciona de la lista una ubicacion. Si no aparece selecciona otros para ingresar la ubicacion a mano.</Text>
            <Radio.Group
                name="myRadioGroup2"
                value={value}
                onChange={(nextValue) => setValue(nextValue)}
            >
                <FlatList
                    data={json}
                    renderItem={({ item }) => (<Radio key={item.idDesperfecto} value={item.idDesperfecto} my={2}> {item.descripcion} </Radio>)}
                />
            </Radio.Group>
            <MyButton text="Siguiente" onPress={handleSubmit} />
        </LayoutWithImageSimple>
    );
}

export default NuevoReclamoDesperfectoScreen;