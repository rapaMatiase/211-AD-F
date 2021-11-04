import React, {useState, useEffect} from 'react';
import {
    NativeBaseProvider,
    FlatList,
    Box,
    AddIcon,
    Fab
} from "native-base";
import CardPromotion from '../components/CardPromotion';
import ImageNoFound from '../assets/img/no-image.jpg';

const json = [
    [
        {
          "idPromocion": 1,
          "tituloPromocion": "Super promo",
          "direccion": "abc 1234",
          "desdeDia": "Lunes",
          "hastaDia": "Viernes",
          "desdeHora": "8 AM",
          "hastaHora": "19 PM",
          "descripcion": "2x1 en hamburguesa",
          "imagen1": null,
          "imagen2": null,
          "imagen3": null,
          "imagen4": null,
          "imagen5": null,
          "servicioProfesional": "No",
          "telefono": "1121-2121",
          "mail": "abc@1234.com",
          "nombre": "Ernesto",
          "apellido": "Perez",
          "documento": "123456",
          "activa": "Si"
        },
        {
          "idPromocion": 10,
          "tituloPromocion": "Ultra promo",
          "direccion": "Av. Directores 232",
          "desdeDia": "Miercoles",
          "hastaDia": "Jueves",
          "desdeHora": "11 AM",
          "hastaHora": "14 PM",
          "descripcion": "Una milanesa completa con papas fritas o pure mixto con una cerveza o cola marca Manaos",
          "imagen1": null,
          "imagen2": null,
          "imagen3": null,
          "imagen4": null,
          "imagen5": null,
          "servicioProfesional": "No",
          "telefono": "4585-8754",
          "mail": "Milanga@gmail.com",
          "nombre": "Hernan",
          "apellido": "Cabellos",
          "documento": "321",
          "activa": "Si"
        },
        {
          "idPromocion": 13,
          "tituloPromocion": "La pachora",
          "direccion": "Av. San martin 2332",
          "desdeDia": "Jueves",
          "hastaDia": "Sabados",
          "desdeHora": "14 PM",
          "hastaHora": "16 PM",
          "descripcion": "Pizza para 4 y 2 Cervezas baratas",
          "imagen1": null,
          "imagen2": null,
          "imagen3": null,
          "imagen4": null,
          "imagen5": null,
          "servicioProfesional": "No",
          "telefono": "4869-8875",
          "mail": "Carl@hotmail.com",
          "nombre": "Juan",
          "apellido": "Carlos",
          "documento": "23423",
          "activa": "Si"
        }
      ]
]

const ButtomAdd = ({navigation}) => {
    return (
        <Box position="relative" h={100} w="100%">
            <Fab
                position="absolute"
                size="sm"
                icon={<AddIcon size="4" />}
                onPress={()=> navigation.navigate('NeighboursBoss')}
            />
        </Box>
    );
}


const PromotionListScreen = ({ navigation, route }) => {

    const [json, setJson] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3000/api/promocion')
        .then((response) => response.json())
        .then((data) => console.log(data))
        .cacth((error) => console.log(error.message));

    }, [setJson]);

    return (
        <NativeBaseProvider>
            <FlatList
                horizontal
                pagingEnabled={true}
                showsHorizontalScrollIndicator={false}
                legacyImplementation={false}
                data={json}
                style={{ height: "100%" }}
                renderItem={({ item }) => <CardPromotion item={item} showDetail={() => navigation.navigate('Promotion', { item: item })} />}
            />
            {route.params.isLogin ? <ButtomAdd navigation={navigation} /> : null}
        </NativeBaseProvider>
    );
}



export default PromotionListScreen;