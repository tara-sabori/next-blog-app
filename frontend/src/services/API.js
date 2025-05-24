const { default: axios } = require("axios");

const app = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    withCredentials: true
})
// get new refresh token
app.interceptors.request.use((res) => res, (err) => Promise.reject(err));

app.interceptors.response.use(res => res,
    async (err) => {
        const originalConfig = err.config;
        if (err.response.status === 401 && !originalConfig._retry) {
            originalConfig._retry = true;
            try {
                const { data } = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/user/refresh-token`
                    , { withCredentials: true }
                );
                if (data) return app(originalConfig)
            } catch (error) {
                return Promise.reject(err)
            }
        }
        return Promise.reject(err)
    })

const API = ({
    get: app.get,
    post: app.post,
    patch: app.patch,
    put: app.put,
    delete: app.delete,
})

export default API;