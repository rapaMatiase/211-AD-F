import * as React from 'react';
import {
  VStack,
} from "native-base";
import LayoutWithBrand from '../components/LayoutWithBrand';
import MyButton from '../components/MyButton';
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
        { text: "camara", onPress: () => { navigation.navigate('Camara') } },

        { text: "Soy Empleado", onPress: () => { navigation.navigate('EmployeeLogin') } },
        { text: "Ver promociones ", onPress: () => { navigation.navigate('PromotionList') } },
      ].map(({index, text, onPress }) => (
        <MyButton key={index} text={text} onPress={onPress} />
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
