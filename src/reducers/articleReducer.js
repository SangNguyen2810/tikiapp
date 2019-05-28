import * as actions from '../actions/types'
const initialState = {
    articleArray: [],
    page: 0,
    totalResult: 0,
    currentResult: 0,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case actions.SET_ARTICLE_ARRAY:{
            let newArticleArray = state.articleArray.concat(action.res.articles)
            return {
                ...state,
                articleArray: newArticleArray,
                page: state.page + 1,
                totalResult: action.res.totalResult,
                currentResult: state.currentResult + action.res.articles.length
            }
        }
    
        case actions.SET_ARTICLE_ARRAY_WHEN_SEARCHING:{
            return {
                ...state,
                articleArray: action.res.articles,
                page: 2,
                totalResult: action.res.totalResults,
                currentResult: action.res.articles.length
            }
        }
       
        default:
            return state;
    }


}
