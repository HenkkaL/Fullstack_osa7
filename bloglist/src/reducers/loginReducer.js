import loginService from '../services/login'
import blogService from '../services/blogs'


const reducer = (store = JSON.parse(window.localStorage.getItem('loggedBlogAppUser')), action) => {
    if (action.type === 'LOGIN') {
        return store = action.user
    }
    if (action.type === 'ERROR') {
        return action.user
    }
    if (action.type === 'LOGOUT') {
        return store = action.user
    }
    return store
}


export const logout = () => {
    return async (dispatch) => {
        window.localStorage.removeItem('loggedBlogAppUser')
        dispatch({
            type: 'LOGOUT',
            user: window.localStorage.getItem('loggedBlogAppUser')
        })
    }
}


export const login = (credentials) => {
    return async (dispatch) => {
        try {
            const user = await loginService.login({
                username: credentials.username,
                password: credentials.password
            })

            window.localStorage.setItem('loggedBlogAppUser', JSON.stringify(user))
            blogService.setToken(user.token)
            dispatch({
                type: 'LOGIN',
                user: window.localStorage.getItem('loggedBlogAppUser')
            })
        } catch (exception) {
            dispatch({
                type: 'ERROR',
                user: null
            })
        }
    }
}

export default reducer