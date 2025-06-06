import API from "./API"

export const createCommentApi = async (data, options) => {
    return API.post('/comment/add', data, options)
        .then(({ data }) => data?.data);
}

export const listCommentApi = async (options) => {
    return API.get('/comment/list', options)
        .then(({ data }) => data?.data);
}