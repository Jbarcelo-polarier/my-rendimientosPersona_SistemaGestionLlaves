import { connectionConstants } from "../constants/connection";
import {
  requestOptions,
  handleResponse,
  fetchWithTimeout,
} from "../helpers/connection";

export const rendimientoPersonasService = {
  getTokensPersona,
};

function getTokensPersona(idPersona, fechaIni, fechaFin) {
  console.log(
    connectionConstants.ODATA_URL +
      "getTokensPersona" +
      "?idPersona=" +
      idPersona +
      "&fechaIni=" +
      fechaIni +
      "&fechaFin=" +
      fechaFin,
    requestOptions("GET")
  );

  return new Promise((resolve, reject) => {
    fetch(
      connectionConstants.ODATA_URL +
        "getTokensPersona" +
        "?idPersona=" +
        idPersona +
        "&fechaIni=" +
        fechaIni +
        "&fechaFin=" +
        fechaFin,
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
