import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { colors } from "../../../styles/base";

export default InstruccionOperacion = () => {
  return (
    <View style={styles.contenedor}>
      <View style={styles.tarjetaInfo}>
        <View style={styles.cabeceraTarjeta}>
          <Text style={styles.tituloTarjeta}>Dejar LLave</Text>
        </View>
        <View style={styles.cuerpoTarjeta}>
          <Text style={styles.textoTarjeta}>Matricula vehiculo</Text>
          <Text style={styles.textoTarjeta}>Numero contenedor</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    height: 200,
    width: "100%",
    alignSelf: "center",
    marginTop: "5%",
  },
  tarjetaInfo: {
    backgroundColor: colors.white,
    height: 150,
    width: "80%",
    alignSelf: "center",
    marginTop: "5%",
    borderRadius: 10,
    elevation: 2,
  },
  cabeceraTarjeta: {
    backgroundColor: colors.primary,
    width: "100%",
    height: "20%",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  tituloTarjeta: {
    color: colors.white,
    fontSize: 15,
    fontWeight: "bold",
  },
  cuerpoTarjeta: {
    height: "80%",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    paddingHorizontal: "2%",
  },
  textoTarjeta: {
    padding: "2%",
    marginTop: "5%",
    fontSize: 20,
  },
});
