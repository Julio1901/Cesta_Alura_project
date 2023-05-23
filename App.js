import React from 'react';
import { StatusBar, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold} from '@expo-google-fonts/montserrat';
import Cesta from './src/telas/Cesta';
import mock from "./src/mocks/cesta";
import AppLoading from 'expo-app-loading';

export default function App() {

  const [fonteCarregada] = useFonts({
    "MontserratRegular" : Montserrat_400Regular,
    "MontserratBold" : Montserrat_700Bold
  });

  if(!fonteCarregada) {
    return <AppLoading/>
  }
  
  return (
    <SafeAreaView style={ {flex: 1}}>
      <StatusBar />
      {/* Fazer ...mock serve para tirar a camada externa do objeto e 
      é como se estivéssemos passando cada um dos parâetros por vez assim:
      <Cesta topo={mock.topo} detalhes={mock.detalhes }/>
      */}
      <Cesta {...mock}/>

    </SafeAreaView>
  );
}

