import { StyleSheet, Text, View,TextInput,TouchableOpacity, Button } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


export default function Receitas ({navigation}){
    return(
        <View>
              <Text 
                style={styles.voltar}
                onPress={ () => navigation.navigate("Home")}>
                Voltar</Text>
            <View style={styles.container}>
                <Text>Receitas
                </Text>
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