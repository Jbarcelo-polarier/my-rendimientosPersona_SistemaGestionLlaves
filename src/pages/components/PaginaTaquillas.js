import React, { useState, useEffect } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { colors } from "../../../styles/base";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import InstruccionOperacion from "./InstruccionOperacion";

export default PaginaTaquillas = ({ route }) => {
  const [accion, setAccion] = useState();
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const persona = route.params.persona;
  const vehiculo = route.params.vehiculo;

  useEffect(() => {
    if (accion === "dejar") {
    }
    if (accion === "recoger") {
    }
  }, [accion]);

  const elegirAccion = (valor) => {
    if (!accion) {
      console.log("valor", valor);
      setAccion(valor);
    }
  };

  return (
    <View style={{ paddingTop: insets.top + 1 }}>
      <View style={styles.navigationBar}>
        <TouchableOpacity
          style={styles.felchaCabecera}
          onPress={() => navigation.navigate("index")}
        >
          <MaterialCommunityIcons
            name="arrow-left"
            size={30}
            color={colors.smokedWhite}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>Taquillas</Text>
      </View>
      <View style={styles.tajetaInfo}>
        <View style={styles.cabeceraTarjeta}>
          <Text style={styles.tituloTarjeta}>Informacion Persona</Text>
        </View>
        <View style={styles.cuerpoTarjeta}>
          <Text style={styles.textoTarjeta}>Nombre: {persona.nombre}</Text>
          <Text style={styles.textoTarjeta}>Apellido: {persona.apellido}</Text>
        </View>
      </View>
      <View style={styles.tajetaInfo}>
        <View style={styles.cabeceraTarjeta}>
          <Text style={styles.tituloTarjeta}>{vehiculo.denominacion}</Text>
        </View>
        <View style={styles.cuerpoTarjeta}>
          <Text style={styles.textoTarjeta}>
            Vehiculo: {vehiculo.tipoVehiculo}
          </Text>
          <Text style={styles.textoTarjeta}>
            Matricula: {vehiculo.matricula}
          </Text>
        </View>
      </View>
      <View style={styles.contenedorOperacion}>
        <TouchableOpacity
          style={styles.botonOperacion}
          onPress={() => {
            elegirAccion("dejar");
          }}
        >
          <Text style={styles.textoOperacion}>Dejar Llave</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.botonOperacion}
          onPress={() => {
            elegirAccion("recoger");
          }}
        >
          <Text style={styles.textoOperacion}>Recoger Llave</Text>
        </TouchableOpacity>
      </View>
      {(accion == "dejar" || accion == "recoger") && <InstruccionOperacion />}
    </View>
  );
};

const styles = StyleSheet.create({
  navigationBar: {
    flexDirection: "row",
    width: "100%",
    height: 60,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  felchaCabecera: {
    position: "absolute",
    left: 30,
  },
  headerText: {
    color: colors.white,
    fontSize: 18,
  },
  tajetaInfo: {
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
  contenedorOperacion: {
    padding: "2%",
    paddingTop: "5%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  botonOperacion: {
    backgroundColor: colors.primary,
    height: 40,
    width: "40%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  textoOperacion: {
    color: colors.white,
  },
});
