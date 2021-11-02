import * as React from 'react';
import {
  Button,
  VStack,
  Stack,
  Image,
  Box,
  Flex,
  AspectRatio,
  Center,
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
          <Text>Bienvenido al municipio de </Text>
        <AspectRatio ratio={16 / 9}>
          <Image
          p="3"
            source={require('../assets/img/mobile-logo.png')}
            alt="image"
            style={{width:100,height:null}}
          />
        </AspectRatio>
      </Box>
        
      <Flex height="50%" pb="25" align="center" justify="flex-end">
        <ButtonGrupWelcome />
      </Flex>
    </NativeBaseProvider>
  );
}

export default WelcomeScreen;