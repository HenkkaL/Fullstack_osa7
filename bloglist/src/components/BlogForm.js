import React from 'react'
import { connect } from 'react-redux'
import { createBlog } from '../reducers/blogReducer'
import { notify } from '../reducers/notificationReducer'
import { Row, Col, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap'

class BlogForm extends React.Component {
  handleSubmit = (e) => {
      e.preventDefault()
      const form = e.target
      const content = { title: form.title.value, author: form.author.value, url: form.url.value }
      this.props.createBlog(content)
      this.props.notify(`New blog: ${form.title.value} is been added`, 5000)

      form.title.value = ''
      form.author.value = ''
      form.url.value = ''
  }

  render() {
      return (
          <div>
              <h2>Luo uusi blogi</h2>
              <Row>
                  <Col md={6}>
                      <form onSubmit={this.handleSubmit}>
                          <FormGroup>
                              <ControlLabel>Title</ControlLabel>
                              <FormControl type="text" name='title' />
                          </FormGroup>
                          <FormGroup>
                              <ControlLabel>Author</ControlLabel>
                              <FormControl type="text" name='author' />
                          </FormGroup>
                          <FormGroup>
                              <ControlLabel>Url</ControlLabel>
                              <FormControl type="text" name='url' />
                          </FormGroup>
                          <FormGroup>
                              <Button type="submit">Submit</Button>
                          </FormGroup>
                      </form>
                  </Col>
              </Row>
          </div>
      )
  }

}


export default connect(null, { createBlog, notify })(BlogForm)