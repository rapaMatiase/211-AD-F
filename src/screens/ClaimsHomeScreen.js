import { Heading, HStack, VStack } from "native-base";
import React from "react";
import LayoutWithImage from "../components/LayoutWithImage";
import CardClaims from "../components/CardClaims";

const ClaimsHomeScreen = () => {


    return (
        <LayoutWithImage>
            <VStack space={2}>
                <HStack>
                    <Heading> Reclamos </Heading>      
                    {/* Falta el icon de busquesda */}
                </HStack>
            <VStack space={2}>

                <CardClaims />
                <CardClaims />

                <CardClaims />
            </VStack>
            </VStack>
        </LayoutWithImage>
    );
}

export default ClaimsHomeScreen;