import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Card, Title, Paragraph } from "react-native-paper";
import Seta from "../../Images/seta.png"

export default function Receitas({ navigation }) {
  const [imageList, setImageList] = useState([]); // state que guarda as urls das imagens vindas do servidor
  let listaId = [];

  // Método get para listar as imagens vindas do servidor
  useEffect(() => {
    fetch("http://localhost:3010/images/get")
      .then((res) => res.json())
      .then((res) => {
        for (let x = 0; x < res.length; x++) {
          listaId.push(res[x]);
        }
        setImageList(listaId);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  function back(id_params) {
    navigation.navigate("VerReceitas", {
        id:id_params
    })
    // console.log(id_params);
  }

  return (
    

      
        
            <View style={{ alignItems: "center" ,backgroundColor:"#F5E1C4",margin: 0,}}>


              <Image 
                style={styles.Logo}
                source = {require("../../Images/seta.png")}
                onPress={() => navigation.navigate("Home")}
                />

            {/* <Text style={styles.voltar} onPress={() => navigation.navigate("Home")}>
            Voltar
            </Text> */}

            {imageList.map((image) => (
            <Card
                style={styles.card}
            >
                <Card.Content>
                {/* <Title> </Title> */}
                {/* <Paragraph>{image}</Paragraph> */}
                <Card.Cover
                    source={{ uri: "http://localhost:3010/" + image }}
                    style={styles.imagem}
                />

                <center>
                <TouchableOpacity
                    style={styles.botao}
                    title="Cadastro"
                    onPress={() => back(image.substr(0, 1))}>
                  
                    <Text style={styles.botao_texto}> Ver Receita </Text>

                </TouchableOpacity>
                </center>

                {/* <Paragraph>ID da imagem: {image.substr(0, 1)}</Paragraph> */}
                </Card.Content>
            </Card>
            ))}
        </View>
  

  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    backgroundColor: "#F5E1C4"
  },
  voltar: {
    fontSize: 15,
    textAlign: "left",
    color: "#FF5200",
    backgroundColor: "#0A380E",
    margin: 15,
    marginRight: 350,
  },
  botao:{
      width: 175,
      height: 30,
      backgroundColor: "#0A380E",
      borderRadius: 1,
      textAlign: "center",
      marginTop: 30,
  },
  botao_texto:{
    color: "white",
    padding: 2,
    fontSize: 18,
  },
  card: {
    backgroundColor:"#F5E1C4",
    width: 300,
    height: 300,
    alignItems: "center",
    borderWidth: 2,
    padding: 2,
    borderColor: "#FF5200",
    margin: 5,
  },
  imagem:{
    width: 270, 
    height: 200
  },
  Logo: {
    width: 300,
    height: 300,
    marginTop: 70
  },
});
