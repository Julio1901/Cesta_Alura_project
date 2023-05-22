import React from 'react';
import {StyleSheet, View} from 'react-native';


import Detalhes from './componentes/Detalhes';
import Topo from './componentes/Topo';



{/*O export é importante pois iremos poder obter ele em outro lugar utilizando {} como foi feito na linha 02 com o componente Text */}
{/*Caso coloque o default não precisa das chaves para importar ele no arquivo como foi feito na linha 01*/}
{/*Quando abro e fecho <> </> sem nada eu tô criando um fragmento para agrupar os elementos*/}
export default function Cesta({topo, detalhes}) {
    return <>
        <Topo {...topo}/>

        <View style={estilos.cesta}>
           <Detalhes {...detalhes}/>
        </View>
   </>
}

const estilos = StyleSheet.create({
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16
    }
    
});