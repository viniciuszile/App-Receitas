import {
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState, useEffect } from "react";

export default function VerReceitas({ route, navigation }) {
  const { id } = route.params;

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
        setImageList(res);
        setIngredientes(res[0]?.ingredientes)
        setModo_preparo(res[0]?.modo_preparo)
        setNome_receita(res[0]?.nome_receita)
        setCategoria(res[0]?.categoria)
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);


  return (
    <View>
      <Text style={styles.voltar} onPress={() => navigation.navigate("Home")}>
        Voltar
      </Text>
      <View styles={styles.container}>
        <Text>Nome da receita : {nome_receita}</Text>
        <Text>Ingredientes : {ingredientes}</Text>
        <Text>Modo de preparo : {modo_preparo}</Text>
        <Text>Categoria : {categoria}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
    },
    voltar:{
        textAlign: 'left',
        color: "#FF5200",
        fontSize: 20,
    },
});