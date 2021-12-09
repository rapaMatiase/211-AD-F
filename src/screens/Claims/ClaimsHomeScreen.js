import {
    FlatList,
    VStack,
    Fab,
    Box,
    AddIcon
} from "native-base";
import React, {useEffect, useState} from "react";
import LayoutWithImage from "../../components/LayoutWithImage";
import CardClaims from "../../components/CardClaims";
import axios from 'axios';


const ButtomAdd = ({navigation, route}) => {
    return (
        <Box position="relative" h={100} w="100%">
            <Fab
                position="absolute"
                size="sm"
                icon={<AddIcon size="4" />}
                onPress={()=> navigation.navigate(
                    'NewClaimStack', 
                    {
                        screen : 'NuevoReclamoELegirSitio', 
                        params : {...route.params}
                    }
                )}
            />
        </Box>
    );
}


const ClaimsHomeScreen = ({navigation, route}) => {


    const [json, setJson] = useState([]); 

    useEffect(() => {
       axios({
           method : "GET",
           url : `http://10.0.2.2:3000/api//reclamo/${route.params.dni}`,
           responseType: "json"
       })
       .then( function (response){
           

           setJson(response.data.recordset)
           console.log(json)
           console.log(json.length)
       })
       .catch(function(error){
           console.log(error)
       })
   }, [setJson]); 

    return (
        <LayoutWithImage>
            <VStack space={2}>
                <FlatList
                    data={json}
                    renderItem={({ item }) => <CardClaims item={item} key={item.id} showState={() => navigation.navigate('ClaimStack', {screen : 'ClaimDetail', params : {isEmployee : route.isEmployee, item : item}})} />}
                />
            </VStack>
            <ButtomAdd navigation={navigation} route={route} />
        </LayoutWithImage>
    );
}

export default ClaimsHomeScreen;