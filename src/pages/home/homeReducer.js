const actionTypes = {
	TEST: 'TEST'
}

const initialState = {
	test: false
}

export default function homeReducer(state = initialState, action) {
	switch(action.type) {
		case actionTypes.TEST:
			return Object.assign({}, state, {test: action.payload})
		default:
			return state
	}
}
