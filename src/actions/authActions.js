
import * as actions from './types';

export const getAllPost = (baseURL) => {
    return (dispatch) => {

        fetch(baseURL)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(isLoading(false));
                return response;
            })
            .then((response) => response.json())
            .then((res) => {
                dispatch(setArticleArray(res));
            })
            .catch(err => { console.log(err) });
    }
}
export const searchArticle = (baseURL) => {
    return (dispatch) => {
        fetch(baseURL)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response;
            })
            .then((response) => response.json())
            .then((res) => {
                dispatch(setArticleArrayWhenSearching(res));
            })
            .catch(err => { console.log(err) });
    }
}


export function setCurrentUser(user) {
    return {
        type: actions.SET_CURRENT_USER,
        payload: user
    }
}

export function isLoading(loading) {
    return {
        type: actions.IS_LOADING,
        loading
    }
}

export const logoutUser = (userData) => {
    return (dispatch) => {
        localStorage.removeItem('jwtToken');
        dispatch(setCurrentUser({}));
    }
}
export const setArticleArray = (res) => {
    return {
        type: actions.SET_ARTICLE_ARRAY,
        res
    }
}
export const setArticleArrayWhenSearching = (res) => {
    return {
        type: actions.SET_ARTICLE_ARRAY_WHEN_SEARCHING,
        res
    }
}


export function isLoadingWhenSearching(loading) {
    return {
        type: actions.IS_LOADING_WHEN_SEARCHING,
        loading
    }
}
export function setHistoryArray (newItem){
    return {
        type: actions.SET_HISTORY_ARRAY,
        newItem
    }
}