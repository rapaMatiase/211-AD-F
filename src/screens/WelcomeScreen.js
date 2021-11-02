import * as React from 'react';
import {
  Button,
  Stack,
  Flex,
  NativeBaseProvider,
} from "native-base";
import LayoutWithBrand from '../components/LayoutWithBrand';

const ButtonGrupWelcome = () => {
  return (
    <Stack

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
      <LayoutWithBrand>
        <Flex height="100%" pb="25"  align="center" justify="flex-end">
          <ButtonGrupWelcome />
        </Flex>
      </LayoutWithBrand>
    </NativeBaseProvider>
  );
}

export default WelcomeScreen;