import React from 'react'
import { connect } from 'react-redux'
import { likeBlog, addComment } from '../reducers/blogReducer'
import { notify } from '../reducers/notificationReducer'
import PropTypes from 'prop-types'
import { Jumbotron, Button, FormGroup, FormControl, Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap'


class Blog extends React.Component {

  like = (blog) => async () => {
      this.props.likeBlog(blog)
      this.props.notify(`You just liked ${blog.title}`, 5000)
  }

  addComment = (event, blog) => {
      this.props.addComment(blog, event.target.comment.value)
      this.props.notify(`comment '${event.target.comment.value}' added to blog '${blog.title}'`, 5000)
      event.target.comment.value = ''
  }

  render() {
      const blog = this.props.blog

      if (blog)
          return (
              <Jumbotron>
                  <h2>{blog.title} by {blog.author}</h2>
                  <div>
                      <a href={blog.url}>{blog.url}</a>
                  </div>
                  <div>
                      {blog.likes} likes <Button onClick={this.like(blog)}>like</Button>
                  </div>
                  <div>
            added by {blog.user ? blog.user.name : 'anonymous'}
                  </div>
                  <div>
                      {/*deletable && <div><button onClick={remove}>delete</button></div>*/}
                  </div>
                  <div>
                      <Row>
                          <Col md={6}>
                              <h3>Comments</h3>
                              <ListGroup>
                                  {blog.comments.map((comment, index) =>
                                      <ListGroupItem key={index} >{comment}</ListGroupItem>
                                  )}
                              </ListGroup>
                              <form onSubmit={(event) => this.addComment(event, blog)}>
                                  <FormGroup>
                                      <FormControl type="text" name="comment" />
                                  </FormGroup>
                                  <FormGroup>
                                      <Button className="btn-success" placeholder="...comment" type="submit">Add comment</Button>
                                  </FormGroup>
                              </form>
                          </Col>
                      </Row>
                  </div>
              </Jumbotron>
          )
      return (
          <div>
          </div>
      )
  }
}

Blog.propTypes = {
    id: PropTypes.string.isRequired,
    blog: PropTypes.object
}

const mapStateToProps = (state, ownProps) => {
    console.log('omat propsit', ownProps.id)
    const blog = state.blogs.find(a => a._id === ownProps.id)
    console.log('mitä tapahtuu', blog)
    return {
        blog
    }
}

export default connect(mapStateToProps, { notify, likeBlog, addComment })(Blog)