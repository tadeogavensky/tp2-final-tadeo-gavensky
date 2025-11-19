export const validateId = (id) => {
  if (typeof id !== "string" || id.length !== 6) {
    return false;
  }
  return true;
};

export const validateCoordinates = (xa, ya, za) => {
  if (
    typeof xa !== "number" ||
    typeof ya !== "number" ||
    typeof za !== "number"
  ) {
    return false;
  }
  return true;
};
