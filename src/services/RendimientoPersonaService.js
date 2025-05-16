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
  actualizarEstadoAutomatico,
  crearRegistro,
  getNumCompartimento,
  actualizarEstadoAutomatico,
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
        "getCompartimentoVehiculo" +
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
  //   requestOptions("PATCH")
  // );
  return new Promise((resolve, reject) => {
    fetch(
      connectionConstants.ODATA_URL +
        "actualizarVehiculoCompartimento" +
        "?idVehiculo=" +
        idVehiculo +
        "&idCompartimento=" +
        idCompartimento,
      requestOptions("PATCH")
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

function actualizarEstadoAutomatico() {
  // console.log(
  //   connectionConstants.ODATA_URL +
  //     "actualizarEstadoAutomatico",
  //   requestOptions("PATCH")
  // );
  return new Promise((resolve, reject) => {
    fetch(
      connectionConstants.ODATA_URL + "actualizarEstadoAutomatico",
      requestOptions("PATCH")
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

function crearRegistro(
  idVehiculo,
  idPersona,
  idAccion,
  idTaquilla,
  idCompAnt,
  idCompAct
) {
  console.log(
    connectionConstants.ODATA_URL +
      "crearRegistro" +
      "?idVehiculo=" +
      idVehiculo +
      "&idPersona=" +
      idPersona +
      "&idAccion=" +
      idAccion +
      "&idTaquilla=" +
      idTaquilla +
      "&idCompAnt=" +
      idCompAnt +
      "&idCompAct=" +
      idCompAct,
    requestOptions("POST")
  );
  return new Promise((resolve, reject) => {
    fetch(
      connectionConstants.ODATA_URL +
        "crearRegistro" +
        "?idVehiculo=" +
        idVehiculo +
        "&idPersona=" +
        idPersona +
        "&idAccion=" +
        idAccion +
        "&idTaquilla=" +
        idTaquilla +
        "&idCompAnt=" +
        idCompAnt +
        "&idCompAct=" +
        idCompAct,
      requestOptions("POST")
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

function getNumCompartimento(idCompartimento) {
  // connectionConstants.ODATA_URL + "getNumCompartimento" +
  // "?idCompartimento=" + idCompartimento, requestOptions("GET");
  return new Promise((resolve, reject) => {
    fetch(
      connectionConstants.ODATA_URL +
        "getNumCompartimento" +
        "?idCompartimento=" +
        idCompartimento,
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

  function actualizarEstadoAutomatico() {
    connectionConstants.ODATA_URL + "actualizarEstadoAutomatico",
      requestOptions("PATCH");
    return new Promise((resolve, reject) => {
      fetch(
        connectionConstants.ODATA_URL + "actualizarEstadoAutomatico",
        requestOptions("PATCH")
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
}
