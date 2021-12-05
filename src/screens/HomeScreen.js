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
        <MyButton 
          text={"Soy Vecino"} 
          onPress={() => { navigation.navigate('NeighboursStack', {screen : 'NeighboursHome'}) }} 
        />
        
        <MyButton 
          text={"Soy Empleado"} 
          onPress={() => { navigation.navigate('EmployeeStack', {screen : 'EmployeeLogin'}) }} 
        />
        
        <MyButton 
          text={"Ver promociones"} 
          onPress={() => { 
            navigation.navigate('PromotionStack', {
              screen : 'PromotionList', 
              params : { isEmployee : true}
            }) 
          }} 
        />
        
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
