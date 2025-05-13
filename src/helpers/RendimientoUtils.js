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
};

export default RendimientoUtils;
