import users from '../services/users'

const reducer = (store = [], action) => {
  if (action.type === 'INITIALIZEUSER') {
    return store = action.content
  }

  return store
}

export const initializeUsers = () => {
  return async (dispatch) => {
    const content = await users.getAll()
    console.log(content)
    dispatch({
      type: 'INITIALIZEUSER',
      content
    })
  }
}

export default reducer