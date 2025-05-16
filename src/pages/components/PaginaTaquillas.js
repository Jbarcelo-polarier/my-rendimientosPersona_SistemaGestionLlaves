import React, { useState, useEffect } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { colors } from "../../../styles/base";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import InstruccionOperacion from "./InstruccionOperacion";
import RendimientoUtils from "../../helpers/RendimientoUtils";

export default PaginaTaquillas = ({ route }) => {
  const [accion, setAccion] = useState();
  const [objetoTarjeta, setObjetoTarjeta] = useState();
  const [renderBoton, setRenderBoton] = useState();
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const persona = route.params.persona;
  const vehiculo = route.params.vehiculo;
  const idTaquilla = 1;

  useEffect(() => {
    if (accion === "dejar") {
      dejarLlave();
    }
    if (accion === "recoger") {
      recogerLlave();
    }
  }, [accion]);

  useEffect(() => {
    elegirRenderBoton();
  }, []);

  const elegirRenderBoton = async () => {
    console.log("RenderBoton");
    const compartimiento = await buscarCompartimentoLlave();
    if (compartimiento.idCompartimento == 0) {
      setRenderBoton("dejar");
    } else {
      setRenderBoton("recoger");
    }
  };

  //Borrar
  useEffect(() => {
    console.log("Tarjeta creada");
  }, [objetoTarjeta]);

  const elegirAccion = (valor) => {
    if (!accion) {
      console.log("valor", valor);
      setAccion(valor);
    }
  };
  const recogerLlave = async () => {
    const idAccion = 2;

    // Buscar la llave
    const compartimiento = await buscarCompartimentoLlave();
    console.log("numCompartimento", compartimiento);
    if (compartimiento.idCompartimento == 0) {
      console.log("La llave no esta en la taquilla");
      return;
    }

    // Actualizar compartimiento del vehiculo
    await actualizarVehiculoCompartimento(null);

    // Crear Registros
    await crearRegistros(idAccion, 0); //idCompartimento = 0 le da valor null

    // Otener numero compartimiento
    const numCompartimento = await obtenerNumeroCompartimiento(
      compartimiento.idCompartimento
    );

    // Actualizar estados
    actualizarEstados();

    // Crear objeto con informacion para la tajeta
    const tarjeta = {
      accion: "recoger",
      matricula: vehiculo.matricula,
      numContenedor: numCompartimento.numCompartimento,
    };

    setObjetoTarjeta(tarjeta);
  };

  const crearRegistros = async (idAccion, idCompartimento) => {
    console.log(idCompartimento);
    const idCompAct = idCompartimento;
    const idCompAnt = 1;

    await RendimientoUtils.crearRegistro(
      vehiculo.idVehiculo,
      persona.idPersona,
      idAccion,
      idTaquilla,
      idCompAnt,
      idCompAct
    );
    console.log("Registro creado");
  };

  const actualizarEstados = async () => {
    await RendimientoUtils.actualizarEstadoAutomatico();
    console.log("Estados actualizados");
  };

  const actualizarVehiculoCompartimento = async (idCompartimento) => {
    await RendimientoUtils.actualizarVehiculoCompartimento(
      vehiculo.idVehiculo,
      idCompartimento
    );
    console.log("compartimiento actualizado");
  };

  const buscarCompartimentoLlave = async () => {
    const data = await RendimientoUtils.getCompartimientoVehiculo(
      vehiculo.idVehiculo
    );
    return data;
  };

  const obtenerNumeroCompartimiento = async (idCompartimento) => {
    const data = await RendimientoUtils.getNumCompartimento(idCompartimento);
    return data;
  };

  const dejarLlave = async () => {
    const idAccion = 1;
    console.log("idVehiculo", vehiculo.idVehiculo);
    // Comprobar si la llave ya esta en una taquilla
    const compartimento = await buscarCompartimentoLlave();
    console.log(compartimento.idCompartimento);
    if (compartimento.idCompartimento != 0) {
      //devuelve 0 cuando no existe
      console.log("La llave ya esta en un compartimento");
      return;
    }

    // Listar los compartimientos disponibles
    const compartimentosDisponibles =
      await RendimientoUtils.getCompartimentosDisponibles();
    if (compartimentosDisponibles.length <= 0) {
      console.log("no hay compartimenros disponibles");
      return;
    }

    const idCompartimento = (compartimentosDisponibles?.[0]).idCompartimento;
    // Actualizar compartimiento del vehiculo
    await actualizarVehiculoCompartimento(idCompartimento);

    // Crear registro
    await crearRegistros(idAccion, idCompartimento);

    // Otener numero compartimiento
    const numCompartimento = await obtenerNumeroCompartimiento(idCompartimento);

    // Actualizar estados
    actualizarEstados();

    // Crear objeto con la info de la tajeta
    const tarjeta = {
      accion: "dejar",
      matricula: vehiculo.matricula,
      numContenedor: numCompartimento.numCompartimento,
    };

    setObjetoTarjeta(tarjeta);
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
        {renderBoton === "dejar" && (
          <TouchableOpacity
            style={styles.botonOperacion}
            onPress={() => {
              elegirAccion("dejar");
            }}
          >
            <Text style={styles.textoOperacion}>Dejar Llave</Text>
          </TouchableOpacity>
        )}
        {renderBoton === "recoger" && (
          <TouchableOpacity
            style={styles.botonOperacion}
            onPress={() => {
              elegirAccion("recoger");
            }}
          >
            <Text style={styles.textoOperacion}>Recoger Llave</Text>
          </TouchableOpacity>
        )}
      </View>
      {objetoTarjeta && <InstruccionOperacion tarjetaInfo={objetoTarjeta} />}
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
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    paddingHorizontal: "5%",
  },
  textoOperacion: {
    color: colors.white,
    fontSize: 20,
  },
});
