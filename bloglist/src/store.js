import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import notificationReducer from './reducers/notificationReducer'
import userReducer from './reducers/userReducer'
import blogReducer from './reducers/blogReducer'
import loginReducer from './reducers/loginReducer'

const reducer = combineReducers({
  blogs: blogReducer,
  users: userReducer,
  notification: notificationReducer,
  login: loginReducer
})

const store = createStore(
  reducer,
  applyMiddleware(thunk)
)

export default store