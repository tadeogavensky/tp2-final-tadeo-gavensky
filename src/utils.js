export const validarId = (id) => {
  const regexId = /^[A-Za-z0-9]{6}$/;
  if (!regexId.test(id)) {
    return false;
  }
  return true;
};

export const validarCoordenadas = (latitud, longitud) => {
  if (typeof latitud !== "number" || typeof longitud !== "number") {
    return false;
  }
  return true;
};

export function distanciaGPS(lat1, lon1, lat2, lon2) {
  const R = 6371000; // radio terrestre en metros
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const lat1Rad = (lat1 * Math.PI) / 180;
  const lat2Rad = (lat2 * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1Rad) * Math.cos(lat2Rad) * Math.sin(dLon / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; // distancia en metros
}
