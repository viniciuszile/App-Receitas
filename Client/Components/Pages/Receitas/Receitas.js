import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Card, Title, Paragraph } from "react-native-paper";

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
    

      <View>
        <Text style={styles.voltar} onPress={() => navigation.navigate("Home")}>
            Voltar
        </Text>
            <View style={{ alignItems: "center" }}>
            {imageList.map((image) => (
            <Card
                style={{
                width: 300,
                height: 450,
                alignItems: "center",
                borderWidth: 2,
                padding: 2,
                }}
            >
                <Card.Content>
                <Title>title</Title>
                <Paragraph>{image}</Paragraph>
                <Card.Cover
                    source={{ uri: "http://localhost:3005/" + image }}
                    style={{ width: 150, height: 200 }}
                />
                <TouchableOpacity
                    style={{
                    width: "80%",
                    borderColor: "black",
                    borderWidth: 2,
                    borderRadius: 20,
                    height: "10%",
                    marginLeft: "10%",
                    marginBottom: "10%",
                    textAlign: "center",
                    marginTop: "5%",
                    alignItems: "center",
                    }}
                    title="Cadastro"
                    onPress={() => back(image.substr(0, 1))}
                >
                    <Text
                    style={{
                        color: "black",
                        fontWeight: 400,
                        fontSize: 15,
                        marginTop: 1,
                    }}
                    >
                    Ver Mais
                    </Text>
                </TouchableOpacity>

                <Paragraph>ID da imagem: {image.substr(0, 1)}</Paragraph>
                </Card.Content>
            </Card>
            ))}
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
  voltar: {
    textAlign: "left",
    color: "#FF5200",
  },
});
