import { StyleSheet, Text, View,TextInput,TouchableOpacity, Button } from 'react-native';
import * as yup from "yup";
import { ErrorMessage, Formik, Form, Field } from "formik";
import Axios from "axios";


export default function Cadastro ({navigation}){

  const handleRegister = (values) => {
    Axios.post("http://localhost:3005/register", {
    email: values.email,
    password: values.password,
    }).then((response) => {
    alert(response.data.msg);
     console.log(response);
    });
  };
      
  const validationsRegister = yup.object().shape({
    email: yup
    .string()
    .email("email inválido")
    .required("O email é obrigatório"),
    password: yup
    .string()
    .min(8, "A senha deve ter pelo menos 8 caracteres")
    .required("A senha é obrigatória"),
    confirmation: yup
    .string()
    .oneOf([yup.ref("password"), null], "As senhas são diferentes")
    .required("A confirmação da senha é obrigatória"),
  });
    


  return(
    <View>
      
      {/* Botao de voltar a home  */}
      <Text 
        style={styles.voltar}
        onPress={ () => navigation.navigate("Home")}>
        Voltar</Text>

      {/* Container geral  */}
       <View style={styles.container} >

      {/* Titulo  */}
        <h1 style={styles.titulo}>Faça Seu Cadastro !!!</h1>
        
        <Formik
        initialValues={{}}
        onSubmit={handleRegister}
        validationSchema={validationsRegister}>

        {/* Container Cadastro */}
        <Form style={styles.cadastro_form}>

        {/* Input Email */}
        <View style={styles.cadastro_form_group} >

        <Text style={styles.texto_input1}> Informe Seu Email</Text>
        <Field name="email" style={styles.form_field_email} placeholder="Email" />
  
        <ErrorMessage
        component="span"
        name="email"
        style={styles.form_error}/>
  
        </View>
  
        {/* Input Senha */}
        <View style={styles.cadastro_form_group} >

        <Text style={styles.texto_input2}> Informe Sua Senha</Text>
        <Field name="password" style={styles.form_field_senha}  placeholder="Senha" />
  
        <ErrorMessage
        component="span"
        name="password"
        style={styles.form_error}/>
        
        </View>
    
        {/* Input Confrimar Senha */}
        <View style={styles.cadastro_form_group} > 
        
        <Text style={styles.texto_input3}> Confirme Sua Senha</Text>
        <Field name="confirmation" style={styles.form_field_senha} placeholder="Senha"/>
  
        <ErrorMessage
        component="span"
        name="confirmation"
        style={styles.form_error}/>
        
        </View>
  
        {/* Botao Cadastro */}
        <button style={styles.botao} type="submit">
          <Text style={styles.texto_botao}>cadastro</Text>
        </button>
        
        </Form>
        </Formik>             
        
         </View>
  
      </View>
    )}


const styles = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
    },
    titulo:{
      color: '#FF5200',
      marginTop: 100,
    },
    form_field_email:{
      width: 250,
      height: 30,
      color: "#000",
      fontSize: 17,
      // marginTop: 80,
      borderRadius: 10,
    },
    form_field_senha:{
      width: 250,
      height: 30,
      // marginTop: 20,
      color: "#000",
      fontSize: 17,
      borderRadius: 10,
    },
    botao:{
      width: 160,
      height: 45,
      justifyContent: "center",
      backgroundColor: "#FF5200",
      textAlign: "center",
      borderRadius: 10,
      marginTop: 60,
    },
    texto_botao:{
      color: '#FFF',
      justifyContent: "center", 
      fontWeight: 500, 
      fontSize: 20,
    },
    texto_input1:{
      color: '#0A380E',
      justifyContent: "center", 
      fontWeight: 500, 
      fontSize: 20,
      marginTop: 60,
    },
    texto_input2:{
      color: '#0A380E',
      justifyContent: "center", 
      fontWeight: 500, 
      fontSize: 20,
      marginTop: 25,
    },
    texto_input3:{
      color: '#0A380E',
      justifyContent: "center", 
      fontWeight: 500, 
      fontSize: 20,
      marginTop: 25,
    },
    form_error:{
      color: "red",
      fontSize : 17,
    },
    voltar:{
      textAlign: 'left',
      color: "#FF5200",
      fontSize: 20,
  },
});