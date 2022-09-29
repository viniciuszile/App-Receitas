import React, { useState, useEffect } from "react";
import {
  Button,
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput,
} from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";



export default function Administrador({navigation}) {
  const [file, setFile] = useState(null); // state que guarda a imagem selecionada
  const [imageList, setImageList] = useState([]); // state que guarda as urls das imagens vindas do servidor

  // dados da receita
  const [Nome, setNome] = useState(null);
  const [Preparo, setPreparo] = useState(null);
  const [Categoria, setCategoria] = useState(null);
  const [Ingredientes, setIngredientes] = useState(null);

  const [images, setImages] = useState([]);
  const [ids, setIds] = useState([]);

  let listaId = []


  // Método get para listar as imagens vindas do servidor
  useEffect(() => {
    fetch("http://localhost:3010/images/get")
      .then((res) => res.json())
      .then((res) => {
        for(let x = 0; x < res.length; x++){
          listaId.push(res[x])
          }
         setImageList(listaId)
        } 
      )
      .catch((err) => {
        console.error(err);
      });
      
  }, []);

  // Funçao que salva a imagem no state file
  const selectedHandler = (e) => {
    setFile(e.target.files[0]);
  };



  // Funçao que manda a imagem para o servidor
  const sendHandler = () => {
    // if(!image){
    //   alert('you must upload file')
    //   return
    // }


    const formdata = new FormData();
    formdata.append("image", file);
    formdata.append('Nome',Nome);
    formdata.append('Preparo',Preparo);
    formdata.append('Categoria',Categoria);
    formdata.append('Ingredientes',Ingredientes);

    fetch("http://localhost:3010/images/post", {
      method: "POST",
      body: formdata,
    })
      .then((res) => res.text())
      .then((res) => console.log(res))
      .catch((err) => {
        console.error(err);
      });

    document.getElementById("fileinput").value = null;

    setFile(null);
  };

  console.log(imageList)


//   function back(id_params) {
//     navigation.navigate("Alterar", {
//         id:id_params
//     })
    // console.log(id_params)
//}



  return (
      <View>
      
      <Text style={styles.voltar} onPress={() => navigation.navigate("Home")}>
        Voltar
      </Text>

        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            {/* <input type="file" id="fileinput" onChange={selectedHandler} /> */}
            {/* <Button title="enviar imagem:" onPress={sendHandler}></Button> */}

            <Card style={{ width: 300, height: 300, alignItems: "center" }}>
            <Card.Content style={{ alignItems: "center" }}>
                <Title>Informaçoes da receita:</Title>

                <Paragraph>insira o nome:</Paragraph>
                <TextInput
                style={{
                    borderColor: "black",
                    borderRadius: 5,
                    borderWidth: 1,
                    padding: 1,
                }}
                onChangeText={setNome}
                />

                <Paragraph>insira os ingredientes:</Paragraph>
                <TextInput
                style={{
                    borderColor: "black",
                    borderRadius: 5,
                    borderWidth: 1,
                    padding: 1,
                }}
                onChangeText={setIngredientes}
                />

                <Paragraph>insira o modo de preparo:</Paragraph>
                <TextInput
                style={{
                    borderColor: "black",
                    borderRadius: 5,
                    borderWidth: 1,
                    padding: 1,
                }}
                onChangeText={setPreparo}
                />

                <Paragraph>insira a Categoria:</Paragraph>
                <TextInput
                style={{
                    borderColor: "black",
                    borderRadius: 5,
                    borderWidth: 1,
                    padding: 1,
                }}
                onChangeText={setCategoria}
                />

                <Paragraph>insira a Foto da receita:</Paragraph>
                <input type="file" id="fileinput" onChange={selectedHandler} />
            </Card.Content>
            <TouchableOpacity
                style={{
                backgroundColor: "black",
                alignItems: "center",
                borderRadius: 5,
                width: 150,
                height: 20,
                
                }}
                onPress={sendHandler}
            >
                <Text style={{ color: "white", fontWeight: 700 }}>
                Criar receita
                </Text>
            </TouchableOpacity>
            </Card>

        
        </View>
    </View>
   
    )
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
