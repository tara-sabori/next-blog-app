import API from "./API"

export const getAllPost = async (query) => {
    return API.get(`/post/list?${query}`).then(({ data }) => data?.data)
}

export const deletPost = async ({ id }) => {
    return API.delete(`/post/remove/${id}`)
}