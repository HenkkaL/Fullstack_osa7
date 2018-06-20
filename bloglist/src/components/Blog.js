import React from 'react'
import { connect } from 'react-redux'
import { likeBlog } from '../reducers/blogReducer'
import { notify } from '../reducers/notificationReducer'

class Blog extends React.Component {
    
  like = (blog) => async () => {
    this.props.likeBlog(blog)
    this.props.notify(`You just liked ${blog.title}`, 5000)
  }
  render() {
    const blog = this.props.blogs.find(a => a._id === this.props.id)

    if (blog)
    return (      
      <div>
        <h2>{blog.title} by {blog.author}</h2>
          <div>
            <a href={blog.url}>{blog.url}</a>
          </div>
          <div>
            {blog.likes} likes <button onClick={this.like(blog)}>like</button>
          </div>
          <div>
            added by {blog.user ? blog.user.name : 'anonymous'}
          </div>
          <div>
            {/*deletable && <div><button onClick={remove}>delete</button></div>*/}
        </div>
      </div>  
    )
    return (
      <div> 
      </div> 
    )    
  }
}

const mapStateToProps = (state) => {
  const blogs = state.blogs
  return {
    blogs
  }
}

export default connect(mapStateToProps, { notify, likeBlog } )(Blog)