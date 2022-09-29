import { StyleSheet, Text, View,TextInput,TouchableOpacity, Button } from 'react-native';
import { ErrorMessage, Formik, Form, Field } from "formik";
import { useState } from 'react';

export default function Login_Adm ({navigation}){

const [senha, setSenha] = useState('') 

const Adm = () => {
        if (senha == '1234'){
            navigation.navigate("Cadastro")
        } 
    }
    return(
        <View>
            <Text 
            style={styles.voltar}
            onPress={ () => navigation.navigate("Login")}>
            Voltar</Text>

            <View style={styles.container}>
                <Text style={styles.titulo}> Seja Bem Vindo !!! </Text>

                <Text style={styles.texto_input}> Informe Sua Senha De Administrador</Text>
                <TextInput style={styles.input} placeholder='senha' onChangeText={senha => setSenha(senha)} value={senha} />
                
                <TouchableOpacity style={styles.botao} className="button" type="submit" onPress={Adm}>
                    <Text style={styles.texto_botao}>Logar</Text>
                </TouchableOpacity>

                <Text style={styles.info}> O campo acima deve ser preenchido com a senha fornecida
                pelos nossos administradores </Text>
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
    input:{
        width: 275,
        height: 35,
        marginTop: 15,
        color: "#000",
        borderWidth: 2  ,
        fontSize: 20,
        borderColor: "black",
        fontSize: 17,
        borderRadius: 10,
      },
      texto_input:{
        color: '#0A380E',
        justifyContent: "center", 
        fontWeight: 500, 
        fontSize: 25,
        marginTop: 100,
      },
    voltar:{
        textAlign: 'left',
        color: "#FF5200",
        fontSize: 20,
    },
    titulo:{
        color: '#FF5200',
        marginTop: 100,
        fontSize: 40,
    },
    texto_botao:{
        color: '#FFF',
        justifyContent: "center",  
        fontSize:   20,
      },
    botao:{
        width: 140,
        height: 40,
        justifyContent: "center",
        backgroundColor: "#FF5200",
        textAlign: "center",
        borderRadius: 10,
        marginTop: 50,
    },
    info:{
        color: '#000',
        marginTop: 50,
        fontSize: 20,
    },
});
