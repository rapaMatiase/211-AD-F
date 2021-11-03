import * as React from 'react';
import {
  Button,
  Stack,
  Flex,
  NativeBaseProvider,
} from "native-base";
import LayoutWithBrand from '../components/LayoutWithBrand';

const ButtonGrupWelcome = ({navigation}) => {
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
      <Button size="lg" colorScheme="tertiary" onPress={() => navigation.navigate('UsersScreen')}> Soy Vecino </Button>
      <Button size="lg" colorScheme="tertiary" onPress={() => navigation.navigate('')}> Soy Empleado </Button>
      <Button size="lg" colorScheme="tertiary" onPress={() => navigation.navigate('PromotionList')}> Ver promociones </Button>
    </Stack>
  );
}

function WelcomeScreen({ navigation }) {
  return (
    <NativeBaseProvider>
      <LayoutWithBrand>
        <Flex pb="25"  align="center" justify="flex-end">
          <ButtonGrupWelcome navigation={navigation} />
        </Flex>
      </LayoutWithBrand>
    </NativeBaseProvider>
  );
}

export default WelcomeScreen;