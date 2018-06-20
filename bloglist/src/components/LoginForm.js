import React from 'react'
import { connect } from 'react-redux'
import { login } from '../reducers/loginReducer'
import { notify } from '../reducers/notificationReducer'

class LoginForm extends React.Component {
  logUser = async (event) => {
    event.preventDefault()
    const user = this.props.login({ username: event.target.username.value, password: event.target.password.value})
    
    event.target.username.value = ''
    event.target.password.value = ''
  }

  render() {
    return (
      <div>
      <h2>Kirjaudu sovellukseen</h2>
      <form onSubmit={this.logUser}>
        <div>
          käyttäjätunnus
          <input
            type="text"
            name="username"
          />
        </div>
        <div>
          salasana
          <input
            type="password"
            name="password"
          />
        </div>
        <button type="submit">kirjaudu</button>
      </form>
    </div>
    )
  }

}

const mapStateToProps = (state) => {
  const user = state.login
  console.log("mapstate", state) 
  return {
    user
  }
}
export default connect(mapStateToProps, { login, notify })(LoginForm)