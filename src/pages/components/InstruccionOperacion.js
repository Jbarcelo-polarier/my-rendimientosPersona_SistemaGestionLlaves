import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { colors } from "../../../styles/base";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default InstruccionOperacion = ({ tarjetaInfo }) => {
  console.log("IO tarjetaInfo", tarjetaInfo);
  var titulo = "";
  const accion = tarjetaInfo.accion;
  if (tarjetaInfo.accion == "dejar") titulo = "Dejar Llave";
  if (tarjetaInfo.accion == "recoger") titulo = "Recoger Llave";

  return (
    <View style={styles.contenedor}>
      <View style={styles.tarjetaInfo}>
        <View style={styles.cabeceraTarjeta}>
          <Text style={styles.tituloTarjeta}>{titulo}</Text>
        </View>
        <View style={styles.cuerpoTarjeta}>
          <View style={styles.superior}>
            <View style={styles.contenedorImagen}>
              <MaterialCommunityIcons
                name="truck"
                size={70}
                color={colors.lightBlack}
              />
              <Text style={styles.textoTarjeta}>{tarjetaInfo.matricula}</Text>
            </View>
            <View style={styles.contenedorImagenCentro}>
              <MaterialCommunityIcons
                name={accion === "dejar" ? "arrow-right" : "arrow-left"}
                size={40}
                color={accion === "dejar" ? colors.danger : colors.success}
              />
            </View>
            <View style={styles.contenedorImagen}>
              <MaterialCommunityIcons
                name="safe"
                size={70}
                color={colors.lightBlack}
              />
              <Text style={styles.textoTarjeta}>
                nº {tarjetaInfo.numContenedor}
              </Text>
            </View>
          </View>
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
    marginTop: "1%",
  },
  tarjetaInfo: {
    backgroundColor: colors.white,
    height: 200,
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
    width: "100%",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    paddingHorizontal: "1%",
    alignSelf: "center",
  },
  textoTarjeta: {
    padding: "2%",
    fontSize: 25,
    textAlign: "center",
    color: colors.lightBlack,
  },
  superior: {
    height: "95%",
    width: "100%",
    padding: "2%",
    flexDirection: "row",
  },
  contenedorImagen: {
    width: "40%",
    alignItems: "center",
    justifyContent: "center",
  },
  contenedorImagenCentro: {
    width: "20%",
    height: "75%",
    alignItems: "center",
    justifyContent: "center",
  },

  contenedorTexto: {
    width: "45%",
    alignItems: "center",
    justifyContent: "center",
  },
});
