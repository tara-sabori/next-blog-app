import API from "./API"

export const getAllPost = async (query) => {
    return API.get(`/post/list?${query}`).then(({ data }) => data?.data)
}

export const deletPost = async (id) => {
    return API.delete(`/post/remove/${id}`)
}

export const getPostByIdApi = async (id) => {
    return API.get(`/post/${id}`).then(({ data }) => data?.data);
}

export const createPostApi = async (data) => {
    return API.post(`/post/create`, data).then(({ data }) => data?.data);
}

export const editPostApi = async (data, id) => {
    return API.patch(`/post/update/${id}`, data).then(({ data }) => data?.data);
}