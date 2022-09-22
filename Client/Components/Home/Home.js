import React from 'react';
import {StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';

export default function Home ({ navigation }){
    return (
        <View style={styles.container}>

            <Text style={styles.texto}>
                Seja bem Vindo !!!</Text>

            <Image 
            style={styles.Logo}
            source = {require("../Images/Livro.png")}
            />

            <TouchableOpacity style={styles.botao}>
                <Text  
                style={styles.texto_botao}
                title='Login'
                onPress={ () => navigation.navigate("Cadastro")}>
                 Entrar   
                </Text>
            </TouchableOpacity>

        </View>
        );}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
    },
    Logo: {
        width: 300,
        height: 300,
        marginTop: 70
      },
    texto: {
        marginTop: 50,
        color: '#FF5200',
        fontSize: 40,
        fontFamily: "arial" 
    },
    botao: {
        width: 160,
        height: 35,
        backgroundColor: "#FF5200",
        padding: 6,
        borderRadius: 15,
        marginTop: 70
    },
    texto_botao:{
        color: 'white',
        fontSize: 20,
        fontFamily: "arial" 
    }

})