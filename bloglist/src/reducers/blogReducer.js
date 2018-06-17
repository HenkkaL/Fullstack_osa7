import blogs from '../services/blogs'

const reducer = (store = [], action) => {
//   if (action.type === 'CREATE') {
//     console.log(action.content)
//     return store.concat(action.content)
//   }

  if (action.type === 'INITIALIZE') {    
      console.log(action.content)
    return store = action.content
  }

  return store
}

// export const createBlog = (blog) => {
//   return async (dispatch) => {
//     const newBlog = await blogs.create(blog)
//     dispatch({
//       type: 'CREATE',
//       content: newBlog
//     })
//   }
// }

export const initializeBlogs = () => {
  return async (dispatch) => {
    const content = await blogs.getAll()
    dispatch({
      type: 'INITIALIZE',
      content
    })
  }
}

export default reducer