import { StyleSheet, Text, View,TextInput,TouchableOpacity, Button } from 'react-native';
import * as yup from "yup";
import { ErrorMessage, Formik, Form, Field } from "formik";
import Axios from "axios";


export default function Cadastro ({navigation}){

      const handleRegister = (values) => {
        Axios.post("http://localhost:3001/register", {
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
      <View style={styles.container} >

        <h1>Cadastro</h1>
              <Formik
                initialValues={{}}
                onSubmit={handleRegister}
                validationSchema={validationsRegister}
              >
                <Form style={styles.login_form}>
                  
                <View style={styles.login_form_group} >

                    <Field name="email" style={styles.form_field_email} placeholder="Email" />

                    <ErrorMessage
                      component="span"
                      name="email"
                      style={styles.form_error}
                    />

                  </View>

                  <View style={styles.login_form_group} >
                    <Field name="password" style={styles.form_field_senha}  placeholder="Senha" />

                    <ErrorMessage
                      component="span"
                      name="password"
                      style={styles.form_error}
                    />
                  </View>

                <View style={styles.login_form_group} > 
                    <Field
                      name="confirmation"
                      style={styles.form_field_senha} 
                      placeholder="Senha"
                    />

                    <ErrorMessage
                      component="span"
                      name="confirmation"
                      style={styles.form_error}
                    />
                  </View>

                  <button style={styles.botao} type="submit">
                  <Text style={styles.texto_botao}>Login</Text>
                  </button>
                </Form>
              </Formik>             
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
      marginTop: 70,
      color: "#000",
      fontSize: 17,
      marginTop: 80,
      borderRadius: 10,
    },
    form_field_senha:{
      width: 250,
      height: 30,
      marginTop: 20,
      color: "#000",
      fontSize: 17,
      borderRadius: 10,
    },
    botao:{
      width: 160,
      height: 45,
      justifyContent: "center",
      backgroundColor: "#ff5c04",
      textAlign: "center",
      borderRadius: 5,
      marginTop: 100,
    },
    texto_botao:{
      color: '#fff',
      justifyContent: "center", 
      fontWeight: 500, 
      fontSize: 20,
    },
    form_error:{
      color: "red",
      fontSize : 17,
    }
});