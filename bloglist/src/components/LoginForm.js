import React from 'react'
import { connect } from 'react-redux'
import { login } from '../reducers/loginReducer'
import { notify } from '../reducers/notificationReducer'
import { Row, Col, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap'

class LoginForm extends React.Component {
  logUser = async (event) => {
      event.preventDefault()
      this.props.login({ username: event.target.username.value, password: event.target.password.value })
      event.target.username.value = ''
      event.target.password.value = ''
  }

  render() {
      return (
          <div>
              <h2>Login to Blog App</h2>
              <Row>
                  <Col md={6}>
                      <form onSubmit={this.logUser}>
                          <FormGroup>
                              <ControlLabel>Username</ControlLabel>
                              <FormControl type="text" name="username" />
                          </FormGroup>
                          <FormGroup>
                              <ControlLabel>Password</ControlLabel>
                              <FormControl type="password" name="password" />
                          </FormGroup>
                          <FormGroup>
                              <Button type="submit" className="btn-success">submit</Button>
                          </FormGroup>
                      </form>
                  </Col>
              </Row>
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
export default connect(mapStateToProps, { login, notify })(LoginForm)