import { colors } from "../../styles/base";
import { rendimientoPersonasService } from "../services/RendimientoPersonaService";

/**
 * Utilidades para manejar los datos de rendimiento en la aplicación
 */
const RendimientoUtils = {
  getPersonaPorDNI: async (numIdentificacion) => {
    console.log("rendimiento utils getPersonaPorDNI");
    try {
      const datos = await rendimientoPersonasService.getPersonaPorDNI(
        numIdentificacion
      );
      return datos;
    } catch (error) {
      console.log("Error al rebir los productos", error);
    }
  },

  getVehiculoPorMatricula: async (numMatricula) => {
    console.log("rendimiento utils getVehiculoPorMatricula");
    try {
      const datos = await rendimientoPersonasService.getVehiculoPorMatricula(
        numMatricula
      );
      return datos;
    } catch (error) {
      console.log("Error al rebir los productos", error);
    }
  },

  getCompartimientoVehiculo: async (idVehiculo) => {
    console.log("rendimiento utils getCompartimientoVehiculo");
    try {
      const datos = await rendimientoPersonasService.getCompartimientoVehiculo(
        idVehiculo
      );
      return datos;
    } catch (error) {
      console.log("Error al recibir compartimientoVehiculo", error);
    }
  },

  getCompartimentosDisponibles: async () => {
    console.log("Rendimiento utils getCompartimentosDisponibles");
    try {
      const datos =
        await rendimientoPersonasService.getCompartimentosDisponibles();
      return datos;
    } catch (error) {
      console.log(
        "Erros al recibir los datos de getCompartimentosDisponibles",
        error
      );
    }
  },

  actualizarVehiculoCompartimento: async (idVehiculo, idCompartimento) => {
    console.log("Rendimietno utils actualizarVehiculoCompartimento");
    try {
      const datos =
        await rendimientoPersonasService.actualizarVehiculoCompartimento(
          idVehiculo,
          idCompartimento
        );
      console.log("actualizarVehiculoCompartimento datos", datos);
    } catch (error) {
      console.log("Error al actualizar VehiculoCompartimento", error);
    }
  },

  actualizarEstadoAutomatico: async () => {
    console.log("rendimiento utils actualizarEstadoAutomatico");
    try {
      const datos =
        await rendimientoPersonasService.actualizarEstadoAutomatico();
      console.log("actualizarEstadoAutomatico datos", datos);
    } catch (error) {
      console.log("Error al actualizar estados automaticamente", error);
    }
  },

  crearRegistro: async (idCompartimento, idVehiculo, idPersona, idAccion) => {
    console.log("rendimiento utils crearRegistro");
    try {
      const datos = await rendimientoPersonasService.crearRegistro(
        idCompartimento,
        idVehiculo,
        idPersona,
        idAccion
      );
      console.log("crearRegistro datos", datos);
    } catch (error) {
      console.log("Error al crear el registro ", error);
    }
  },
};

export default RendimientoUtils;
