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

  if (action.type==='COMMENT') {
    const old = store.filter(a => a._id !==action.content._id)
    const commented = store.find(a => a._id === action.content._id)

    return [...old, { ...commented, comments: action.content.comments } ]
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

export const addComment = (blog, comment) => {
  //const updatedBlog = { ...blog, comments: [ ...blog.comments, comment] }
  return async (dispatch) => {
    const updatedBlog = await blogs.comment(blog._id, comment) 
    dispatch({
      type: 'COMMENT',
      content: updatedBlog
    })
  }
}

export default reducer