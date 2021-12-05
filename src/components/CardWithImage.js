import * as React from 'react';
import { Dimensions } from 'react-native'

import {
    Box,
    View,
    Stack,
} from "native-base";


/* Originalmente este componente tenia una imagen pero al final se decidio retirar para quitar carga al bakcend en no tener que modficiar el endpoint hecho. */

const CardWithImage = (props) => {

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "stretch", width: Dimensions.get('window').width }}>
            <Box  p="3">
                <Box
                    rounded="lg"
                    overflow="hidden"
                    borderColor="coolGray.900"
                    shadow={5} 
                    borderWidth="1"
                    _dark={{
                        borderColor: "coolGray.600",
                        backgroundColor: "gray.700",
                    }}
                    _web={{
                        shadow: 6,
                        borderWidth: 0,
                    }}
                    _light={{
                        backgroundColor: "gray.50",
                    }}
                >

                    <Stack p="4" space={4} >
                        {props.children}
                    </Stack>
                </Box>
            </Box>
        </View>
    );
}

export default CardWithImage;