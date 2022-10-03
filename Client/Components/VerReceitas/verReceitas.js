import {
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import React, { useState, useEffect } from "react";

export default function VerReceitas({ route, navigation }) {
  const { id } = route.params;

  const [imagem,setImagem] = useState([]);

  const [imageList, setImageList] = useState([]); // state que guarda as urls das imagens vindas do servidor
  const [nome_receita, setNome_receita] = useState([]);
  const [modo_preparo, setModo_preparo] = useState([]);
  const [ingredientes, setIngredientes] = useState([]);
  const [categoria, setCategoria] = useState([]);




  
  // Método get para listar as imagens vindas do servidor
  useEffect(() => {
    fetch(`http://localhost:3010/images/verReceitas/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setImagem(res[0]?.name);
        setImageList(res[0]?.image);
        setIngredientes(res[0]?.ingredientes)
        setModo_preparo(res[0]?.modo_preparo)
        setNome_receita(res[0]?.nome_receita)
        setCategoria(res[0]?.categoria)
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);


  return (
    <View style={styles.container0}>
         <View style={styles.header}>

          </View>

          <Text style={styles.voltar} onPress={() => navigation.navigate("Home")}>
              Voltar
          </Text>


      <View styles={styles.container}>

        <Text style={styles.texto_titulo}> {nome_receita}</Text>

        <Image 
            style={styles.imagem}
            source = {require("http://localhost:3010/images/")}
            />

        <Text style={styles.texto_subtitulo}> ingredientes </Text>
        <Text style={styles.ingredientes}>{ingredientes}</Text>

        <Text style={styles.texto_subtitulo}> Modo De Preparo </Text>
        <Text style={styles.mode_de_preparo}> {modo_preparo}</Text>


        {    console.log(imagem)
       }

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container0:{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      backgroundColor:"#F5E1C4"
    },  
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        backgroundColor:"#F5E1C4"
    },
    header:{
      width: "100%",
      height: 40,
      backgroundColor: "#FF5200" ,
    },  
    voltar: {
      width: 62,
      height: 30,
      padding: 1,
      marginBottom: 5,
      marginRight: 330,
      fontSize: 22,
      textAlign: "left",
      color: "#FF5200",
    },
    texto_titulo:{
      fontSize: 35,
      color: '#0A380E',
      margin: 10,
    },
    texto_subtitulo:{
      fontSize: 25,
      color: '#0A380E',
      margin: 5,
    },
    imagem:{
      width: 200,
      height: 200,
      margin: 10,
    },
    ingredientes:{
      width: 300,
      height: 200,
      backgroundColor: "white",
      borderWidth: 2,
      borderColor: "#FF5200",
      borderRadius: 10,
      overflow: 'scroll',
      margin: 10,
    },
    mode_de_preparo:{
      width: 300,
      height: 200,
      backgroundColor: "white",
      borderWidth: 2,
      borderColor: "#FF5200",
      borderRadius: 10,
      overflow: 'scroll',
      margin: 10,
    }
});