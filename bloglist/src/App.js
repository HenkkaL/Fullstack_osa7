import React from 'react'
import Blog from './components/Blog'
import Blogs from './components/Blogs'
import BlogForm from './components/BlogForm'
import LoginForm from './components/LoginForm'
import User from './components/User'
import Users from './components/Users'
import Notification from './components/Notification'
import { connect } from 'react-redux'
import { notify } from './reducers/notificationReducer'
import { initializeBlogs } from './reducers/blogReducer'
import { initializeUsers } from './reducers/userReducer'
import { logout } from './reducers/loginReducer'
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'
import { Navbar, Nav, NavItem, Button } from 'react-bootstrap'

class App extends React.Component {
    componentDidMount() {
        this.props.initializeBlogs()
        this.props.initializeUsers()
    }

  logout = () => {
      this.props.logout()
      this.props.notify('You just logged out!', 3000)
  }

  render() {
      console.log('Usertesti', this.props.user)
      return (
          <div>
              <Router>
                  <div>
                      <Notification />
                      <Navbar inverse collapseOnSelect>
                          <Navbar.Header>
                              <Navbar.Brand>
                                  <Link to="/">Anecdote app</Link>
                              </Navbar.Brand>
                              <Navbar.Toggle />
                          </Navbar.Header>
                          <Navbar.Collapse>
                              <Nav>
                                  <NavItem href="#">
                                      <Link to="/">blogs</Link>
                                  </NavItem>
                                  <NavItem href="#">
                                      <Link to="/users">users</Link>
                                  </NavItem>
                              </Nav>
                              <Nav pullRight>
                                  {this.props.user ? <NavItem eventKey={1} href="#"><span>{this.props.user.name}</span> logged in <Button className="btn-sm" onClick={this.logout}>logout</Button></NavItem>
                                      : <NavItem href="#"><Link to="/login"><Button className="btn-sm">login</Button></Link></NavItem>
                                  }
                              </Nav>
                              <Nav pullRight>
                                  {this.props.user ? <NavItem href="#"><Link to="/createBlog"><Button className="btn-sm">create new blog</Button></Link></NavItem> : <div></div>}
                              </Nav>
                          </Navbar.Collapse>
                      </Navbar>
                      <div className="container">
                          <Route path="/login" render={({ history }) => <LoginForm history={history} />} />
                          <Route exact path="/" render={() => <Blogs />} />
                          <Route exact path="/createBlog" render={() =>
                              this.props.user ? <BlogForm /> : <Redirect to="/login" />} />
                          <Route exact path="/users" render={() =>
                              this.props.user ? <Users /> : <Redirect to="/login" />} />
                          <Route exact path="/blogs/:id" render={({ match }) =>
                              this.props.user ? <Blog id={match.params.id} /> : <Redirect to="/login" />} />
                          <Route exact path="/users/:id" render={({ match }) =>
                              this.props.user ? <User id={match.params.id} /> : <Redirect to="/login" />} />
                      </div>
                  </div>
              </Router>
          </div>
      )
  }
}

const mapStateToProps = (state) => {
    const user = state.login
    console.log('mapstate', state)
    return {
        user
    }
}

export default connect(mapStateToProps, { notify, initializeBlogs, initializeUsers, logout })(App)