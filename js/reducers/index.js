import * as GetResults from '../actions/index';

const initialState = [];

export const resultsReducer = (state=initialState, action) => {
	if (action.type === actions.fetchResults) {
		return [...state, {
			success:
			fail:
		}];
	}

	return state;
};