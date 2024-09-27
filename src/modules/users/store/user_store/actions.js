import {apiClient} from "@/api/api";

export const EliminarUsurs = ({commit}, Data)=>{
    const Url = `api/${Data.Url}`
    const responseUsers = apiClient.delete(Url)
    console.log(responseUsers, commit);
}
