//Mocks 

import logo from '../../assets/logo.png';
import abobora from '../../assets/frutas/Abóbora.png';
import batata from '../../assets/frutas/Batata.png';
import brocolis from '../../assets/frutas/Brócolis.png';
import pepino from '../../assets/frutas/Pepino.png';
import tomate from '../../assets/frutas/Tomate.png';


const cesta = {
    topo: {
        titulo: "Detalhes da cesta"
    },
    detalhes: {
        nome: "Cesta de verduras",
        logoFazenda: logo,
        nomeFazenda: "Jenny Jack Farm",
        descricao: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para a cozinha",
        preco: "R$ 40,00",
        botao: "Comprar"
    },
    itens: {
        titulo: "Itens da cesta",
        lista: [
        {
            nome: "Tomate",
            imagem: tomate
        },
        {
            nome: "Abóbora",
            imagem: abobora
        },
        {
            nome: "Batata",
            imagem: batata
        },
        {
            nome: "Pepino",
            imagem: pepino
        },
        {
            nome: "Brololis",
            imagem: brocolis
        },
        ]
    }
}

export default cesta;