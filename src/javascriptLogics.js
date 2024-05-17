export function stringToNestedObject(keyPath, value) {
  const paths = keyPath.split(".");
  const result = {};
  let current = result;

  paths.forEach((pathKey, i) => {
    if (i === paths.length - 1) {
      current[pathKey] = value;
    } else {
      current[pathKey] = {};
      current = current[pathKey];
    }
  });

  return result;
}

//This is main fuction here
export function stringToNestedObjectRecrssive(keyPath, value = "", state) {
  const paths = keyPath.split(".");

  const createNestObj = (commingArray, prevState) => {
    if (commingArray.length === 0) return value;
    const [first, ...rest] = commingArray;
    const beforeState = prevState?.[first];
    return { [first]: { ...beforeState, ...createNestObj(rest, beforeState) } };
  };
  return createNestObj(paths, state);
}
