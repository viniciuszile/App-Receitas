import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput,TouchableOpacity, Button } from 'react-native';
import * as yup from "yup";
import { ErrorMessage, Formik, Form, Field } from "formik";
import Axios from "axios";

export default function Cadastro (){
    const handleLogin = (values) => {
        Axios.post("http://localhost:3001/login", {
          email: values.email,
          password: values.password,
        }).then((response) => {
          alert(response.data.msg);
        });
      };
    
      const handleRegister = (values) => {
        Axios.post("http://localhost:3001/register", {
          email: values.email,
          password: values.password,
        }).then((response) => {
          alert(response.data.msg);
          console.log(response);
        });
      };
      const validationsLogin = yup.object().shape({
        email: yup
          .string()
          .email("email inválido")
          .required("O email é obrigatório"),
        password: yup
          .string()
          .min(8, "A senha deve ter pelo menos 8 caracteres")
          .required("A senha é obrigatória"),
      });
    
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
        <h1>Login</h1>
        <Formik
          initialValues={{}}
          onSubmit={handleLogin}
          validationSchema={validationsLogin}
        >
          <Form style={styles.login_form}>
            <View style={styles.login_form_group} >
              <Field name="email" style={styles.form_field}  placeholder="Email" />
  
              <ErrorMessage
                component="span"
                name="email"
                style={styles.form_error}
              />
            </View>

            {/*Outro campo*/}
            <div className="form-group">
              <Field name="password" style={styles.form_field} placeholder="Senha" />
  
              <ErrorMessage
                component="span"
                name="password"
                style={styles.form_error}
              />
            </div>
  
            <button className="button" type="submit">
              Login
            </button>
          </Form>
        </Formik>


        <h1>Cadastro</h1>
      <Formik
        initialValues={{}}
        onSubmit={handleRegister}
        validationSchema={validationsRegister}
      >
        <Form className="register-form">
          <div className="register-form-group">
            <Field name="email" className="form-field" placeholder="Email" />

            <ErrorMessage
              component="span"
              name="email"
              className="form-error"
            />
          </div>

          <div className="form-group">
            <Field name="password" className="form-field" placeholder="Senha" />

            <ErrorMessage
              component="span"
              name="password"
              className="form-error"
            />
          </div>

          <div className="form-group">
            <Field
              name="confirmation"
              className="form-field"
              placeholder="Senha"
            />

            <ErrorMessage
              component="span"
              name="confirmation"
              className="form-error"
            />
          </div>

          <button className="button" type="submit">
            Cadastrar
          </button>
        </Form>
      </Formik>


        </View>



    )}
















        // <View style={styles.container}>

        // <Text style={styles.texto}>
        //     LOGIN
        // </Text>

        // <Formik initialValues={{}} onSubmit={handleClicklogin}>
        //     <Form style={{}}>
        //         <View>
        //             <Field name="email" style={{}}
        //             placeholder="email" />

        //             <ErrorMessage
        //                 component='span'
        //                 name='email'
        //                 style={{}}
        //             />
        //             <Field name="senha" style={{}}
        //             placeholder="senha" />

        //             <ErrorMessage
        //                 component='span'
        //                 name='senha'
        //                 style={{}}
        //             />
        //         </View>

        //     <button style={styles.botao}
        //     type="submit"></button>
            
        //     </Form>

        // </Formik>
{/* --------------------------------------------------- */}
{/* <Text style={styles.texto}>
            Cadastro
        </Text>

        <Formik initialValues={{}} onSubmit={handleClickRegister}>
            <Form style={{}}>
                <View>
                    <Field name="email" style={{}}
                    placeholder="email" />

                    <ErrorMessage
                        component='span'
                        name='email'
                        style={{}}
                    />
                    <Field name="senha" style={{}}
                    placeholder="senha" />

                    <ErrorMessage
                        component='span'
                        name='senha'
                        style={{}}
                    />
                </View>

            <button style={styles.botao}
            type="submit"></button>
            
            </Form>

        </Formik> */}

        // </View>
    


const styles = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
    },
    input:{
      height: 30,
      width:250, 
      textAlign:"center", 
      fontSize: "large",
      borderWidth:1, 
      marginBottom:10,
      backgroundColor:'#fff'
    },
    label: {
        fontSize: "large",
        color: "#000",
      },
    texto: {
        marginTop: 50,
        color: '#FF5200',
        fontSize: 40,
        fontFamily: "arial" 
    },
    botao:{
        width: 160,
        height: 45,
        backgroundColor: "#ff5c04",
        padding: 5,
        textAlign: "center",
        borderRadius: 5,
      },

});

