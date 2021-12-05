import React from "react";
import LayoutWithBrand from "../components/LayoutWithBrand";
import {
    VStack,
    Button,
    Flex,
    Heading,
    Text,
    Center
} from "native-base";

const ButtonMenu = ({text, onPress}) => {
    return (
        <Button 
            variant="outline" 
            _text={{fontSize : "xl"}} 
            onPress={onPress}
            colorScheme="tertiary.600"
            > 
            {text} 
        </Button>

    );
}

const UserHomeScreen = ({navigation, route}) => {

    return (
        <LayoutWithBrand>
            <Flex justifyContent="flex-end" p="3">
                <VStack space={3}>
                    <Center>
                        <Heading fontSize="lg"  > !Hola, ACA VA EL NOMBRE¡ </Heading>
                    </Center>
                    <Text> {route.params.isEmployee ? "vedadero" : "false"} </Text>
                    <ButtonMenu text="Reclamos" onPress={() => navigation.navigate('ClaimStack', {screen : 'ClaimHome' , params : {isEmployee : route.params.isEmployee}})} />
                    <ButtonMenu text="Denuncias" onPress={() => navigation.navigate('ComplaintsHome')} />
                    <ButtonMenu text="Promosiones" onPress={() => navigation.navigate('PromotionStack', {screen : 'PromotionList', params : {isEmployee : route.params.isEmployee}}) }  />
                    <Heading fontSize="lg" pb="4" > Notificaciones </Heading>
                </VStack>
            </Flex>
        </LayoutWithBrand>
    );
}

export default UserHomeScreen;