import React from "react";
import {
    FormControl,
    Input,
    Stack,
    WarningOutlineIcon,
} from "native-base";

const InputWithControl = (props) => {

    return (
        <FormControl isRequired isInvalid={props.error}>
            <Stack mx="4">
                <FormControl.Label>{props.title}</FormControl.Label>
                <Input type={props.type} placeholder={props.placeholder} onChangeText={(input) => props.setValue(input)} />
                <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                    {props.errorMenssage}
                </FormControl.ErrorMessage>
            </Stack>
        </FormControl>
    );
}

export default InputWithControl;