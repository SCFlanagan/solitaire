import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  //auth: require('./auth').default,
  game: require('./cards').default  
})

export default rootReducer
