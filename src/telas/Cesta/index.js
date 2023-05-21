import React from 'react';
import { Image, StyleSheet, Dimensions, Text, View} from 'react-native';

import logo from '../../../assets/logo.png';
import Texto from '../../componentes/Texto';
import Topo from './componentes/Topo'




{/*O export é importante pois iremos poder obter ele em outro lugar utilizando {} como foi feito na linha 02 com o componente Text */}
{/*Caso coloque o default não precisa das chaves para importar ele no arquivo como foi feito na linha 01*/}
{/*Quando abro e fecho <> </> sem nada eu tô criando um fragmento para agrupar os elementos*/}
export default function Cesta() {
    return <>
        <Topo />

        <View style={estilos.cesta}>
            <Texto style={estilos.nome}>Cesta de verduras</Texto>
            <View style={estilos.fazenda}>
                <Image source={logo} style={estilos.imagemFazenda}/>
                <Texto style={estilos.nomeFazenda}>Jenny Jack Farm</Texto>
            </View>
            <Texto style={estilos.descricao}>Uma cesta com produtos selecionados
             cuidadosamente da fazenda direto para a cozinha
             </Texto>
            <Texto style={estilos.preco}>R$ 40,00</Texto>
        </View>
   </>
}

const estilos = StyleSheet.create({
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16
    },
    nome: {
        color: "#464646",
        fontSize: 26,
        lineHeight: 42,
        fontWeight: "bold"
    },
    fazenda:{
        flexDirection: "row",
        paddingVertical: 12
    },
    imagemFazenda: {
        width: 32,
        height: 32
    },
    nomeFazenda: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12
    },
    descricao: {
        color: "#A3A3A3",
        fontSize: 16,
        lineHeight: 26
    },
    preco: {
        color: "#2A9F85",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8
    }
});