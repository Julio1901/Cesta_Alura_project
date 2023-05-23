import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import Detalhes from './componentes/Detalhes';
import Topo from './componentes/Topo';
import Item from './componentes/Item';
import Texto from '../../componentes/Texto';


{/*O export é importante pois iremos poder obter ele em outro lugar utilizando {} como foi feito na linha 02 com o componente Text */}
{/*Caso coloque o default não precisa das chaves para importar ele no arquivo como foi feito na linha 01*/}
{/*Quando abro e fecho <> </> sem nada eu tô criando um fragmento para agrupar os elementos*/}
export default function Cesta({topo, detalhes, itens}) {
    return <>

        <FlatList
        data={itens.lista}
        renderItem= {Item}
        keyExtractor={({ nome }) => nome}
        ListHeaderComponent={() => {
           return <>
                 <Topo {...topo}/>
                        
                <View style={estilos.cesta}>
                <Detalhes {...detalhes}/>
                <Texto style={estilos.titulo}>{itens.titulo}</Texto>
                </View>
            </>

        }}
        />

  
   </>
}

const estilos = StyleSheet.create({
    titulo: {
        color: "#464646",
        fontWeight: "bold",
        marginTop: 32,
        marginBottom: 8,
        fontSize: 20,
        lineHeight: 32
    },
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16
    }
    
});