import * as actions from '../actions/types'
import _ from 'lodash'
const initialState = {
    articleArray: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case actions.SET_HISTORY_ARRAY: {
            if(_.find(state.articleArray,action.newItem)){
                return state;
            }
            else return {
                ...state,
                articleArray: [...state.articleArray,action.newItem]
            };
        }
        default:
            return state;
    }
}