import initialState from './initialState';
import * as types from '../actions/actionTypes';

export default function courseReducer(state = initialState.courses, action) {
    switch (action.type) {
        case types.LOAD_COURSES_SUCCESS:
            return action.courses;

        case types.CREATE_COURSE_SUCCESS:
            //remember - state is immutable, so do NOT push item onto array
            return [
                ...state,
                Object.assign({}, action.course)
            ];

        case types.UPDATE_COURSE_SUCCESS:
            //remember - state is immutable, so do 'replace' array item -> filter out the item being replaced!
            return [
                ...state.filter(course => course.id !== action.course.id),
                Object.assign({}, action.course)
            ];
        default:
            return state;
    }
}