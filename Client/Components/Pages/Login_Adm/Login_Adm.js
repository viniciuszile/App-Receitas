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
                onPress={ () => navigation.navigate("Home")}>
                Voltar</Text>

            <View style={styles.container}>
                <Text> Bem vindo ADM </Text>

                <TextInput placeholder='senha' onChangeText={senha => setSenha(senha)} value={senha} />
                
                
                <TouchableOpacity style={styles.botao} className="button" type="submit" onPress={Adm}>
                    <Text style={styles.texto_botao}>Logar</Text>
                </TouchableOpacity>
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
        color: "#FF5200"
    },
});
