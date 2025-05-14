import { connectionConstants } from "../constants/connection";
import {
  requestOptions,
  handleResponse,
  fetchWithTimeout,
} from "../helpers/connection";

export const rendimientoPersonasService = {
  getVehiculoPorMatricula,
  getPersonaPorDNI,
  getCompartimientoVehiculo,
  getCompartimentosDisponibles,
  actualizarVehiculoCompartimento,
};

function getPersonaPorDNI(numIdentificacion) {
  // console.log(
  //   connectionConstants.ODATA_URL +
  //     "getPersonaPorDNI" +
  //     "?numIdentificacion=" +
  //     numIdentificacion,
  //   requestOptions("GET")
  // );
  return new Promise((resolve, reject) => {
    fetch(
      connectionConstants.ODATA_URL +
        "getPersonaPorDNI" +
        "?numIdentificacion='" +
        numIdentificacion +
        "'",
      requestOptions("GET")
    )
      .then(handleResponse)
      .then((data) => {
        resolve(data);
      })
      .catch((ex) => {
        reject(ex);
      });
  });
}

function getVehiculoPorMatricula(numMatricula) {
  // console.log(
  //   connectionConstants.ODATA_URL +
  //     "getVehiculoPorMatricula" +
  //     "?numMatricula=" +
  //     numMatricula,
  //   requestOptions("GET")
  // );
  return new Promise((resolve, reject) => {
    fetch(
      connectionConstants.ODATA_URL +
        "getVehiculoPorMatricula" +
        "?numMatricula=" +
        numMatricula,
      requestOptions("GET")
    )
      .then(handleResponse)
      .then((data) => {
        resolve(data);
      })
      .catch((ex) => {
        reject(ex);
      });
  });
}

function getCompartimientoVehiculo(idVehiculo) {
  // console.log(
  //   connectionConstants.ODATA_URL +
  //     "getCompartimientoVehiculo" +
  //     "?idVehiculo=" +
  //     idVehiculo,
  //   requestOptions("GET")
  // );
  return new Promise((resolve, reject) => {
    fetch(
      connectionConstants.ODATA_URL +
        "getCompartimientoVehiculo" +
        "?idVehiculo=" +
        idVehiculo,
      requestOptions("GET")
    )
      .then(handleResponse)
      .then((data) => {
        resolve(data);
      })
      .catch((ex) => {
        reject(ex);
      });
  });
}

function getCompartimentosDisponibles() {
  // console.log(
  //   connectionConstants.ODATA_URL +
  //     "getCompartimentosDisponibles",
  //   requestOptions("GET")
  // );
  return new Promise((resolve, reject) => {
    fetch(
      connectionConstants.ODATA_URL + "getCompartimentosDisponibles",
      requestOptions("GET")
    )
      .then(handleResponse)
      .then((data) => {
        resolve(data);
      })
      .catch((ex) => {
        reject(ex);
      });
  });
}

function actualizarVehiculoCompartimento(idVehiculo, idCompartimento) {
  // console.log(
  //   connectionConstants.ODATA_URL +
  //     "actualizarVehiculoCompartimento" +
  //    "?idVehiculo=" +
  //    idVehiculo +
  //    "&idCompartimento=" +
  //    idCompartimento,
  //   requestOptions("Patch")
  // );
  return new Promise((resolve, reject) => {
    fetch(
      connectionConstants.ODATA_URL +
        "actualizarVehiculoCompartimento" +
        "?idVehiculo=" +
        idVehiculo +
        "&idCompartimento=" +
        idCompartimento,
      requestOptions("Patch")
    )
      .then(handleResponse)
      .then((data) => {
        resolve(data);
      })
      .catch((ex) => {
        reject(ex);
      });
  });
}
