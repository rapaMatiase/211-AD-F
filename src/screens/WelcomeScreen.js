import * as React from 'react';
import {
  Button,
  VStack,
  Stack,
  Image,
  Box,
  NativeBaseProvider,
  Text,
} from "native-base";



const ButtonGrupWelcome = () => {
  return (
    <Stack
      mb="2.5"
      mt="1.5"
      direction={{
        base: "column",
        md: "row",
      }}
      space={5}
      mx={{
        base: "auto",
        md: "0",
      }}
      w="80"
    >
        <Button size="lg" colorScheme="tertiary" onPress={() => console.log('hello world1')}> Soy Vecino </Button>
        <Button size="lg" colorScheme="tertiary" onPress={() => console.log('hello world')}> Soy Empleado </Button>
        <Button size="lg" colorScheme="tertiary" onPress={() => console.log('hello world')}> Ver promociones </Button>
    </Stack>
  );
}


function WelcomeScreen() {
  return (
    <NativeBaseProvider>
      <Box>
        <Text fontSize="2xl">Bienvenidos al municipio de </Text>
        <Image source={require('../assets/img/mobile-logo.png')}  alt="Alternate Text" />
      </Box>
      <Box>
        <ButtonGrupWelcome />
      </Box>
    </NativeBaseProvider>
  );
}

export default WelcomeScreen;