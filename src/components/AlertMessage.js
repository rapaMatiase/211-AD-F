import React from "react";
import {
    Text,
    Alert,
    VStack,
    Center,
    HStack,

} from 'native-base';


const AlertMessage = ({ message, show }) => {
    return (
        <Center>
            {show ?
                <Alert w="80%" m="1" status="error">
                    <VStack space={2} flexShrink={1} w="100%">
                        <HStack flexShrink={1} space={2} justifyContent="space-between">
                            <HStack space={2} flexShrink={1}>
                                <Alert.Icon mt="1" />
                                <Text fontSize="md" textAlign="center" color="coolGray.800">
                                    {message}
                                </Text>
                            </HStack>
                        </HStack>
                    </VStack>
                </Alert>
                :
                <Text></Text>
            }
        </Center>
    )

}

export default AlertMessage;