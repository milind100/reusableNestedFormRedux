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

export function stringToNestedObjectRecrssive111(keyPath, value = "", state) {
  if (!keyPath.includes(".")) {
    return { ...state, [keyPath]: value };
  }

  const paths = keyPath?.split(".");

  const createNestObj = (comingArray, prevState) => {
    if (comingArray.length === 0) {
      return value;
    }
    const [first, ...rest] = comingArray;
    const beforeState = prevState?.[first];
    return { [first]: { ...beforeState, ...createNestObj(rest, beforeState) } };
  };
  return { ...state, ...createNestObj(paths, state) };
}

export function stringToNestedObjectRecursive(keyPath, value = "", state = {}) {
  if (!keyPath.includes(".")) {
    return { ...state, [keyPath]: value };
  }

  const paths = keyPath.split(".");

  const createNestObj = (pathsArray, prevState) => {
    const [first, ...rest] = pathsArray;
    if (rest.length === 0) {
      return { [first]: value };
    }
    const nextState = prevState && prevState[first] ? prevState[first] : {};
    return {
      [first]: {
        ...nextState,
        ...createNestObj(rest, nextState),
      },
    };
  };

  return {
    ...state,
    ...createNestObj(paths, state),
  };
}
