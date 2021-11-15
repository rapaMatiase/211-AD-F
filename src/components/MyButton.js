import React from "react";
import {
    Button
} from 'native-base';

const MyButton = ({text, onPress}) => {
    return (
        <Button
          size="lg"
          _text={{
            fontSize: "xl"
          }}
          bg="#2F824C"
          onPress={onPress}
        >
          {text}
        </Button>
    );
}

export default MyButton;