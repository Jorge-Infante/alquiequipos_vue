import {apiClient} from "@/api/api";

export const EliminarUsurs = ({commit}, Data)=>{
    const Url = `api/${Data.Urnnl}`
    const responseUsers = apiClient.delete(Url)
    console.log(responseUsers, commit);
}
