import API from "./API";

export const getGategoryList = async () => {
    return API.get('/category/list').then(({ data }) => data.data);
}