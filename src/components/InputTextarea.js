import React, { useState } from "react";
import {
    FormControl,
    Input,
    Stack,
    VStack,
    WarningOutlineIcon,
} from "native-base";

const InputText = (props) => {

    const [error, setError] = useState(false)
    const [numberCaracter, setNumeberCaracter] = useState(0)
    const onChange = (input) => {
        props.setValue(input)
        setNumeberCaracter(input.length)
        if(props.validator(input)){
            setError(true)
        }else{
            setError(false)
        }
    }
    

    return (
        <VStack>
            <Text> ( {numberCaracter} /1000) </Text>
            <FormControl isRequired isInvalid={error}>
                <Stack mx="4">
                    <FormControl.Label>{props.title}</FormControl.Label>
                    <Input type="text" placeholder={props.placeholder} onChangeText={(input) => onChange(input)} />
                    <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                        {props.errorMenssage || "Este campo no esta llenado correctamente"}
                    </FormControl.ErrorMessage>
                </Stack>
            </FormControl>
        </VStack>
    );
}

export default InputText;