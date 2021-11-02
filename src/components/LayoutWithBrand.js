import React from "react";
import {
    Box,
    AspectRatio,
    Image,
    NativeBaseProvider,
} from "native-base";
import BrandImage from '../assets/img/mobile-logo.jpg';


const LayoutWithBrand = (props) => {
    return (
                <NativeBaseProvider>
                    <Box>
                        <AspectRatio ratio={16 / 9}>
                            <Image
                                source={BrandImage}
                                alt="image"
                            />
                        </AspectRatio>
                    </Box>
                    <Box>
                        {props.children}
                    </Box>
                </NativeBaseProvider>
    );
}

export default LayoutWithBrand;