import { Button, Heading } from "native-base";
import React from "react";
import LayoutWithImage from "../components/LayoutWithImage";

const ClaimsPictureChoseeScreen = () => {

    return (
        <LayoutWithImage>
            <Heading> Nuevo reclamo </Heading>
            <Text> Tome o eliga las fotografias para su reclamo </Text>
            <Button> Seleccionar </Button>
        </LayoutWithImage>
    );
}

export default ClaimsPictureChoseeScreen;