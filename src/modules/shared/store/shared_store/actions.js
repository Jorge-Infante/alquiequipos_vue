import { apiClient } from "@/api/api";
import { authApiClient } from "@/api/authApi";

export const getEnty = async ({ commit }, params) => {
  const url = `/api/${params.url}`;
  const res = await apiClient.get(url);
  console.log(`(* GET *), Url de la petición: ${url}`, res);

  // Llamar a la mutación global
  commit(
    "SET_GLOBAL_STATE",
    {
      moduleName: "user_store",
      key: params.enty,
      value: res.data,
    },
    { root: true }
  );
};
export const postEnty = async ({ commit }, params) => {
  console.log("(* POST* ) data: ", params.data);
  const url = `/api/${params.url}`;
  const res = await apiClient.post(url, params.data);
  console.log(` (* POST *), Url de la petición: ${url}`, res);
  commit(params.mutation, { key: params.enty, value: res.data });
  return res;
};
export const patchEnty = async ({ commit }, params) => {
  console.log("(* PATCH *) data: ", params.data);
  const url = `/api/${params.url}/`;
  const res = await apiClient.patch(url, params.data);
  console.log(`(* PATCH *), Url de la petición: ${url}`, res);
  commit(params.mutation, {
    key: params.enty,
    keySearch: params.keySearch,
    value: res.data,
  });
  return res;
};
export const deleteEnty = async ({ commit }, params) => {
  console.log("(* DELETE *) data: ", params);
  const url = `/api/${params.url}`;
  const res = await apiClient.delete(url);
  console.log(`(* DELETE *), Url de la petición: ${url}`, res);
  commit(params.mutation, {
    key: params.enty,
    keySearch: params.keySearch,
    value: res.data,
  });
};
export const loginApp = async ({ commit }, params) => {
  console.log("(* LOGIN* ) data: ", params.data);
  const url = `/api/${params.url}`;
  const res = await authApiClient.post(url, params.data);
  console.log(` (* LOGIN *), Url de la petición: ${url}`, res);
  commit(params.mutation, { key: params.enty, value: res.data });
  return res;
};
