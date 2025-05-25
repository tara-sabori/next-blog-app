import API from "./API"

export const createCommentApi = async (data, options) => {
    return API.post('/comment/add', data, options)
        .then(({ data }) => data?.data);
}