import { data } from "autoprefixer"
import API from "./API"

export const getAllUserApi = async (options) => {
    return API.get('/user/list', options).then(({ data }) => data?.data)
}