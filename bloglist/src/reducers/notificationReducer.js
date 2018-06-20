const reducer = (state = '', action) => {    
    switch (action.type) {
    case 'NOTIFY':
      return action.content
    case 'CLEAR':
      return action.content
    default:
      return state
    }
  
  }
  
  export const notify = (message, time) => {
    return async (dispatch) => {
      dispatch({
        type: 'NOTIFY',
        content: message
      })
      setTimeout(() => {
        dispatch({
          type: 'CLEAR',
          content: ''
        })
      }, time)
    }
  }
  
  export default reducer