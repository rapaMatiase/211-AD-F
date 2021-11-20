import React, { useState } from "react";
import {
    FormControl,
    Input,
    Stack,
    HStack,
    VStack,
    WarningOutlineIcon,
    Text,
    TextArea
} from "native-base";

const InputText = (props) => {

    const [error, setError] = useState(false)
    const [numberCaracter, setNumeberCaracter] = useState(0)

    const onChange = (input) => {
        props.setValue(input)
        setNumeberCaracter(input.length)
        if (props.validator(input)) {
            setError(true)
        } else {
            setError(false)
        }
    }


    return (
        <VStack>
            <HStack justifyContent="space-around">
                <Text> {props.title} </Text>
                <Text> ( {numberCaracter} /1000) </Text>
            </HStack>

            <TextArea
                h={20}
                placeholder={props.placeholder}
                numberOfLines={8}
                isInvalid={error}
                onChangeText={onChange}
            />
        </VStack>
    );
}

export default InputText;