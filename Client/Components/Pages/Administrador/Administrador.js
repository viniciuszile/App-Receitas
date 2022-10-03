import React, { useState, useEffect } from "react";
import {
  Button,
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput,
  Image,
} from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";
// import { Icon } from "@rneui/themed";



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
      <View style={styles.container0}>

        <View style={styles.header}>

        </View>

        <Text style={styles.voltar} onPress={() => navigation.navigate("Home")}>
            Voltar
        </Text>
      

        <View style={styles.container}>

            <Card style={styles.Card}>
              
            <Card.Content style={styles.card_content} >

                <Text style={styles.titulo}> Informaçoes da receita:</Text>

                <Text style={styles.subtitulo}>Insira o Nome Da Receita</Text>
                <TextInput style={styles.input} onChangeText={setNome}/>

                <Text style={styles.subtitulo}>Insira Os Ingredientes Da Receita</Text>
                <TextInput style={styles.input} onChangeText={setIngredientes} />

                <Text style={styles.subtitulo}>Insira o Modo De Preparo Da Receita</Text>
                <TextInput style={styles.input} onChangeText={setPreparo} />
        

                <Text style={styles.subtitulo}> Insira a Categoria Da Receita</Text>
                <TextInput style={styles.input} onChangeText={setCategoria} />
        
                <Text style={styles.subtitulo}> Insira a Foto Da Receita</Text>
                {/* <Image 
                style={styles.imagem}
                source = {require("../../Images/clips.png")}
                /> */}
                <input style={{marginLeft: 1,width:120,}} type="file" id="fileinput" onChange={selectedHandler} />

                <TouchableOpacity
                style={styles.botao}
                onPress={sendHandler}>

                <Text style={styles.texto_botao}>
                Criar receita
                </Text>
            </TouchableOpacity>

            </Card.Content>

   
            </Card>

        
        </View>
    </View>
   
    )
}

const styles = StyleSheet.create({
  container0:{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    backgroundColor:"#fff"
  },  
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    backgroundColor:"#fff"
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
      backgroundColor:"#fff",
      color: "#FF5200",
    },
    card:{
      width: 300, 
      height: 300, 
      alignItems: "center"
    },
    card_content:{
      alignItems: "center",
      backgroundColor:"#fff" 
    },
    titulo:{
      fontSize: 30,
      color: '#0A380E',
      margin: 10,
    },
    subtitulo:{
      fontSize: 18,
      color: '#FF5200',
      margin: 5,
    },
    input:{
      width: 250,
      height: 30,
      color: "#000",
      fontSize: 17,
      borderWidth: 1,
      borderColor: '#000',
      borderRadius: 10,
    },
    imagem: {
      backgroundColor:"grey",
      width: 100,
      height: 100,
    },
    botao:{
      width: 160,
      height: 35,
      justifyContent: "center",
      backgroundColor: "#0A380E",
      textAlign: "center",
      borderRadius: 10,
      marginTop: 40,
    },
    texto_botao:{
      color: '#FFF',
      justifyContent: "center", 
      fontSize: 20,
    },
});
