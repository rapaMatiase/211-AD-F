import React, { useState, useEffect } from "react";

import {
    Heading,
    Text,
    Radio,
    Center,
    Flex,
    FlatList
} from 'native-base';
import LayoutWithImage from "../../components/LayoutWithImage";
import LayoutWithImageSimple from "../../components/LayoutWithImageSimple";
import MyButton from "../../components/MyButton";
import axios from 'axios';

const NuevoReclamoELegirSitioScreen = ({ navigation , route}) => {

    const [value, setValue] = useState("1");

    const handleSubmit = () => {

        const item = json.filter((item) => {
            return item.idSitio == value
        })
        console.log(item)
        navigation.navigate(
            'NewClaimStack', {
                screen : 'NuevoReclamoDetallarUbicacion', 
                params: { 
                    idSitio : item[0].idSitio,
                    descripcionSitio : item[0].descripcion,
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
            <Heading>Seleccione la ubicacion </Heading>
            <Text> Observe la siguiente lista y seleccione le lugar donde desea realizar el reclamo.</Text>
            <Radio.Group
                name="myRadioGroup"
                defaultValue="0"
                value={value}
                onChange={(nextValue) => setValue(nextValue)}
            >
                <FlatList
                    data={json}
                    renderItem={({ item }) => (<Radio key={item.idSitio} value={item.idSitio} my={2}> {item.descripcion} en {item.calle} {item.numero}</Radio>)}
                />
            </Radio.Group>
            <MyButton text="Siguiente" onPress={handleSubmit} />
        </LayoutWithImageSimple>
    );
}

export default NuevoReclamoELegirSitioScreen;