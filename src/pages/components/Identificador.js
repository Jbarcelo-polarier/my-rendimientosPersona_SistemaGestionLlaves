import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import { colors } from "../../../styles/base";
import { rendimientoPersonasService } from "../../services/RendimientoPersonaService";
import { useNavigation } from "@react-navigation/native";

export default Identificador = () => {
  const [textDNI, setTextDNI] = useState();
  const [textMatricula, setTextMatricula] = useState();
  const [persona, setPersona] = useState();
  const [vehiculo, setVehiculo] = useState();
  const navigation = useNavigation();

  useEffect(() => {
    console.log("useEffect DNI Matricula");
    if (persona && vehiculo) {
      console.log("Identificado");
      navigation.navigate("taquillas", {
        persona: persona,
        vehiculo: vehiculo,
      });
    }
  }, [persona, vehiculo]);

  const identificar = () => {
    comprobarMatricula();
    comprobarDNI();
  };

  const comprobarDNI = async () => {
    if (textDNI) {
      const identificacion = await rendimientoPersonasService.getPersonaPorDNI(
        textDNI
      );
      setPersona(identificacion);
      console.log(identificacion);
    }
  };

  const comprobarMatricula = async () => {
    if (textMatricula) {
      const vehiculo = await rendimientoPersonasService.getVehiculoPorMatricula(
        textMatricula
      );
      setVehiculo(vehiculo);
      console.log(vehiculo);
    }
  };

  return (
    <View style={styles.contenedor}>
      <View style={styles.logIn}>
        <TextInput
          label="DNI/NIE"
          value={textDNI}
          onChangeText={(textDNI) => setTextDNI(textDNI)}
          mode="outlined"
          cursorColor={colors.primary}
          style={styles.input}
          outlineColor={colors.primary}
          activeOutlineColor={colors.primary}
          activeUnderlineColor={colors.primary}
        />
        <TextInput
          label="Matricula"
          value={textMatricula}
          onChangeText={(textMatricula) => setTextMatricula(textMatricula)}
          mode="outlined"
          cursorColor={colors.primary}
          style={styles.input}
          outlineColor={colors.primary}
          activeOutlineColor={colors.primary}
          activeUnderlineColor={colors.primary}
        />
        <TouchableOpacity style={styles.boton} onPress={identificar}>
          <Text style={styles.textoBoton}>Identificar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  contenedor: {
    height: "100%",
    width: "100%",
    backgroundColor: colors.smokedWhite,
  },
  logIn: {
    marginVertical: "5%",
    width: "90%",
    alignSelf: "center",
    alignItems: "center",
    padding: "5%",
    backgroundColor: colors.white,
    borderRadius: 10,
    elevation: 2,
  },
  input: {
    width: "100%",
    margin: "2%",
  },
  boton: {
    backgroundColor: colors.primary,
    height: 60,
    width: "100%",
    borderRadius: 10,
    marginTop: "5%",
    alignItems: "center",
    justifyContent: "center",
  },
  textoBoton: {
    color: colors.white,
    fontSize: 20,
    fontWeight: "bold",
  },
});
