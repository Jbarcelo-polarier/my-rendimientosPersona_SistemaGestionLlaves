import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { colors } from "../../../styles/base";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default InstruccionOperacion = ({ tarjetaInfo }) => {
  console.log("IO tarjetaInfo", tarjetaInfo);
  var titulo = "";
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
                size={60}
                color={colors.lightBlack}
              />
            </View>
            <View style={styles.contenedorImagen}>
              <MaterialCommunityIcons
                name="safe"
                size={65}
                color={colors.lightBlack}
              />
            </View>
          </View>
          <View style={styles.inferior}>
            <View style={styles.contenedorTexto}>
              <Text style={styles.textoTarjeta}>{tarjetaInfo.matricula}</Text>
            </View>
            <View style={styles.contenedorTexto}>
              <Text style={styles.textoTarjeta}>
                {tarjetaInfo.numContenedor}
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
    fontSize: 25,
    textAlign: "center",
    color: colors.lightBlack,
  },
  superior: {
    height: "60%",
    padding: "2%",
    flexDirection: "row",
  },
  contenedorImagen: {
    width: "48%",
    alignItems: "center",
  },
  inferior: {
    height: "40%",
    padding: "2%",
    flexDirection: "row",
  },
  contenedorTexto: {
    width: "48%",
    alignItems: "center",
    justifyContent: "center",
  },
});
