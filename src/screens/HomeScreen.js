import * as React from 'react';
import {
  Button,
  Stack,
  Flex,
  NativeBaseProvider,
  VStack,
  Text
} from "native-base";
import LayoutWithBrand from '../components/LayoutWithBrand';

const ButtonGrupWelcome = ({ navigation }) => {
  return (
    <VStack
      space={8}
      mx={{
        base: "auto",
        md: "0",
      }}
      justifyContent="flex-end"
      w="80"

    >
      {[
        { text: "Soy Vecino", onPress: () => { navigation.navigate('NeighboursHome') } },
        { text: "Soy Empleado", onPress: () => { navigation.navigate('EmployeeHome') } },
        { text: "Ver promociones ", onPress: () => { navigation.navigate('PromotionList', { isLogin: false }) } },
      ].map(({ text, onPress }) => (
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
      ))}
    </VStack>
  );
}

function HomeScreen({ navigation }) {
  return (
    <LayoutWithBrand>
      <ButtonGrupWelcome navigation={navigation} />
    </LayoutWithBrand>
  );
}

export default HomeScreen;
/*
<Button
size="lg"
_text={{
  fontSize: "xl"
}}
colorScheme="tertiary"
onPress={() => navigation.navigate('NeighboursHome')}
>
Soy Vecino
</Button>
<Button
_text={{
  fontSize: "xl"
}}
size="lg"
colorScheme="tertiary"
onPress={() => navigation.navigate('EmployeeHome')}
>
Soy Empleado
</Button>
<Button
_text={{
  fontSize: "xl"
}}
size="lg"
colorScheme="tertiary"
onPress={() => navigation.navigate('PromotionList', { isLogin: false })}>
Ver promociones </Button> */