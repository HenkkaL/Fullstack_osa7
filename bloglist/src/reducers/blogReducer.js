import blogs from '../services/blogs'

const reducer = (store = [], action) => {
  if (action.type === 'CREATE') {
    console.log(action.content)
    return store.concat(action.content)
  }

  if (action.type === 'INITIALIZEBLOGS') {         
    return store = action.content
  }

  if (action.type==='LIKE') {
    const old = store.filter(a => a._id !==action.id)
    const liked = store.find(a => a._id === action.id)

    return [...old, { ...liked, likes: liked.likes+1 } ]
  }

  return store
}

export const createBlog = (blog) => {
  return async (dispatch) => {
    console.log(blog)
    const newBlog = await blogs.create(blog)
    dispatch({
      type: 'CREATE',
      content: newBlog
    })
  }
}

export const initializeBlogs = () => {
  return async (dispatch) => {
    const content = await blogs.getAll()
    dispatch({
      type: 'INITIALIZEBLOGS',
      content
    })
  }
}

export const likeBlog = (blog) => {
  const voted = { ...blog, likes: blog.likes + 1 }
  return async (dispatch) => {
    await blogs.update(blog._id, voted)
    dispatch({
      type: 'LIKE',
      id: blog._id
    })
  }
}

export default reducer