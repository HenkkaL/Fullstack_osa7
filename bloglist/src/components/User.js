import React from 'react'
import { connect } from 'react-redux'

class User extends React.Component {
  render() {
    const user = this.props.users.find(a => a._id === this.props.id)
console.log(user)
    if (user)
    return (      
      <div>
        <h2>{user.name}</h2>
        <h3>Added blogs</h3>
        <ul>
            {user.blogs.map(blog => 
            <li key={blog._id}>
                {blog.title} by {blog.author}</li>
            )}
        </ul>
      </div>  
    )
    return (
      <div> 
      </div> 
    )    
  }
}

const mapStateToProps = (state) => {
  const users = state.users
  return {
    users
  }
}

export default connect(mapStateToProps )(User)