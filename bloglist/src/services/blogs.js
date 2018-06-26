import axios from 'axios'
const baseUrl = '/api/blogs'

let token = null

const config = () => {
    return {
        headers: { 'Authorization': token }
    }
}

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const setToken = (newToken) => {
    console.log('tokenuusi', newToken)
    token = `bearer ${newToken}`
    console.log('tokenuusitehty', token)
}

const create = async (newObject) => {
    console.log('vastaus', config())
    const response = await axios.post(baseUrl, newObject, config())
    return response.data
}

const update = (id, newObject) => {
    const request = axios.put(`${baseUrl}/${id}`, newObject, config())
    return request.then(response => response.data)
}

const comment = (id, comment) => {
    const request = axios.post(`${baseUrl}/${id}/comments`, { comment: comment })
    return request.then(response => response.data)
}

const remove = (id) => {
    const request = axios.delete(`${baseUrl}/${id}`, config())
    return request.then(response => response.data)
}

export default { getAll, create, update, remove, setToken, comment }