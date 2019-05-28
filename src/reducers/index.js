import { combineReducers } from 'redux'
import loading from './loading'
import auth from './authReducer'
import article from './articleReducer'
import historyArticle from './historyArticleReducer'
export default combineReducers({
  loading,
  auth,
  article,
  historyArticle
})