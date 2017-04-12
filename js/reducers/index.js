import * as newsActions from '../actions/index';

const initialState = {
	articles: [],
	error: null
};

export const newsReducer = (state=initialState, action) => {
	if (action.type === newsActions.FETCH_NEWS_SUCCESS) {
		return {...state, articles: action.articles, error: null};
	}
	if (action.type === newsActions.FETCH_NEWS_ERROR){
		return {...state, error: action.error};
	}

	return state;
};