import React from 'react'
import { connect } from 'react-redux'
import { createBlog } from '../reducers/blogReducer'
import { notify } from '../reducers/notificationReducer'

class BlogForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const content = { title: form.title.value, author: form.author.value, url: form.url.value }
    this.props.createBlog(content)
    this.props.notify(`New blog: ${ form.title.value } is been added`, 5000)

    form.title.value = ''
    form.author.value = ''
    form.url.value = ''
  }

  render() {
    return (
      <div>
        <h2>Luo uusi blogi</h2>

        <form onSubmit={this.handleSubmit}>
          <div>
            title
          <input name='title'/>
          </div>
          <div>
            author
          <input name='author' />
          </div>
          <div>
            url
          <input
              name='url'
            />
          </div>

          <button type="submit">Luo</button>
        </form>
      </div>
    )
  }

}


export default connect(null, { createBlog, notify })(BlogForm)