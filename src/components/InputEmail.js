import React, { useState } from "react";
import {
    FormControl,
    Input,
    Stack,
    WarningOutlineIcon,
} from "native-base";

const InputEmail = ({setValue, title, placeholder, errorMenssage}) => {

    const [error, setError] = useState(false)
    
    const onChange = (inputText) => {
        setValue(inputText)
        validator(inputText) ? setError(true) : setError(false)
    }
    

    return (
        <FormControl isRequired isInvalid={error}>
            <Stack mx="4">
                <FormControl.Label>{title}</FormControl.Label>
                <Input type="email" placeholder={placeholder} onChangeText={(inputText) => onChange(inputText)} />
                <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                    {errorMenssage || "Este campo no esta llenado correctamente"}
                </FormControl.ErrorMessage>
            </Stack>
        </FormControl>
    );
}

export default InputEmail;