import React from 'react'
import { connect } from 'react-redux'
import { likeBlog, addComment } from '../reducers/blogReducer'
import { notify } from '../reducers/notificationReducer'

class Blog extends React.Component {
    
  like = (blog) => async () => {
    this.props.likeBlog(blog)
    this.props.notify(`You just liked ${blog.title}`, 5000)
  }

  addComment = (event, blog) => {    
    event.preventDefault()
    this.props.addComment(blog, event.target.comment.value)
    this.props.notify(`comment '${ event.target.comment.value }' added to blog '${blog.title}'`, 5000)
    event.target.comment.value = ''
  }

  render() {
    const blog = this.props.blog

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
        <div>
          <h3>Comments</h3>
          <form onSubmit={(event) => this.addComment(event, blog)}>
          <input name='comment'/>
          <button type="submit">Add comment</button>
            </form>
            <ul>
              {blog.comments.map((comment, index) => 
                <li key={index} >{comment}</li>
              )}
              </ul>
          </div>
      </div>  
    )
    return (
      <div> 
      </div> 
    )    
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log("omat propsit", ownProps.id)
  const blog = state.blogs.find(a => a._id === ownProps.id)
  console.log("mitä tapahtuu", blog)
  return {
    blog
  }
}

export default connect(mapStateToProps, { notify, likeBlog, addComment } )(Blog)