export const setState = (state, { key, value }) => {
  console.log("EL ESTATE: ", state[key], key, state);
  state[key] = value;
};
export const removeState = (state, { key, keySearch, value }) => {
  state[key] = state[key].filter((item) => item[keySearch] !== value);
};
export const addToState = (state, { key, value }) => {
  state[key] = [value, ...state[key]];
};
export const updateState = (state, { key, keySearch, value }) => {
  console.log(key, keySearch, value);
  let index = state[key].findIndex((item) => item[keySearch] === value);
  console.log("INDEX: ", index);
  state[key][index] = value;
};


