import React from "react";
import {
    Button, Fab
} from 'native-base';

const MyButton = ({text, onPress, isDisable}) => {
    return (
        <Button
          size="lg"
          _text={{
            fontSize: "xl"
          }}
          bg="#2F824C"
          onPress={onPress}
          isDisabled={isDisable ? true : false}
        >
          {text}
        </Button>
    );
}

export default MyButton;