import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { ListGroup, ListGroupItem } from 'react-bootstrap'


class Blogs extends React.Component {
  vote = (anecdote) => {
      this.props.voteAnecdote(anecdote)
      this.props.notify(`anecdote ${anecdote.content} voted`, 5000)
  }

  render() {
      console.log('blogilista', this.props.blogsToShow)
      return (
          <div>
              <h2>blogs</h2>
              <ListGroup>
                  {this.props.blogsToShow.map(blog =>
                      <ListGroupItem key={blog._id}>
                          <Link to={`/blogs/${blog._id}`}>author: {blog.author} title: {blog.title}</Link></ListGroupItem>
                  )}
              </ListGroup>
          </div>
      )
  }
}

const byLikes = (b1, b2) => b2.likes - b1.likes

const mapStateToProps = (state) => {
    const blogsToShow = state.blogs.sort(byLikes)
    return {
        blogsToShow
    }
}

export default connect(mapStateToProps)(Blogs)