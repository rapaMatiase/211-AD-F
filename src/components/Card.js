import * as React from 'react';

import {
    Box,
    View,
    Stack,
} from "native-base";

const Card = (props) => {
    return (
        <View>
            <Box p="2">
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
                    <Stack p="4" space={4}>
                        {props.children}
                    </Stack>
                </Box>
            </Box>
        </View>
    );
}

export default Card;