import * as React from 'react';

import {
    NativeBaseProvider,
    Text,
  } from "native-base";
import CardPromotion from '../components/CardPromotion';

const json = [
    {
        title : "La buena mesa de oscar",
        description : "Un lugar para comer en familia y difrustra todos juntos de una buena comida",
        addres : "Av. Que te importa 2233",
        days : "Lunes, Martes, y Miercoles",
        time : "8 a 10 am",
        image : ""
    },
    {
        title : "2La buena mesa de oscar",
        description : "Un lugar para comer en familia y difrustra todos juntos de una buena comida",
        addres : "Av. Que te importa 2233",
        days : "Lunes, Martes, y Miercoles",
        time : "8 a 10 am",
        image : ""
    },
    {
        title : "3La buena mesa de oscar",
        description : "Un lugar para comer en familia y difrustra todos juntos de una buena comida",
        addres : "Av. Que te importa 2233",
        days : "Lunes, Martes, y Miercoles",
        time : "8 a 10 am",
        image : ""
    }
]

const PromotionsScreen = () => {

    return (
        <NativeBaseProvider>
            <CardPromotion />
        </NativeBaseProvider>
    );
}

export default PromotionsScreen;