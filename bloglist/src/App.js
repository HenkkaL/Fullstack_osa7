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

class App extends React.Component {
  componentDidMount() {  
    this.props.initializeBlogs()
    this.props.initializeUsers()    
  }

  logout = () => {
    this.props.logout()
    this.props.notify(`You just logged out!`, 3000)
  }

  render() {
    console.log("Usertesti", this.props.user)
    return (
      <Router>
      <div>
      <Notification/>
        <div>
          <Link to="/">blogs</Link> &nbsp;
          <Link to="/users">users</Link> &nbsp;
          {this.props.user ? <em>{this.props.user.name} logged in <button onClick={this.logout}>logout</button></em>
                : <Link to="/login"><button>login</button></Link>
              }
          
        </div>    
        {this.props.user? <Link to="/createBlog"><button>create new</button></Link> : <div></div>}
        <Route path="/login" render={({history}) => <LoginForm history={history} />}/>  
        <Route exact path="/" render={() => <Blogs/>} />
        <Route exact path="/createBlog" render={() =>
          this.props.user? <BlogForm/> : <Redirect to="/login" /> } />
        <Route exact path="/users" render={() => 
          this.props.user? <Users/> : <Redirect to="/login" /> } />
        <Route exact path="/blogs/:id" render={({match}) => 
          this.props.user? <Blog id={match.params.id} /> : <Redirect to="/login" /> } />
        <Route exact path="/users/:id" render={({match}) =>
          this.props.user? <User id={match.params.id} /> : <Redirect to="/login" /> } /> 
      </div>
    </Router>
    );
  }
}

const mapStateToProps = (state) => {
  const user = state.login
  console.log("mapstate", state) 
  return {
    user
  }
}

export default connect(mapStateToProps, { notify, initializeBlogs, initializeUsers, logout })(App);