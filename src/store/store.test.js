import expect from 'expect';
import { createStore } from 'redux';
import rootReducer from '../reducers';
import initialState from '../reducers/initialState';
import * as courseActions from '../actions/courseActions';

describe('Testing App Store', () => {
    it('should handle creating courses', () => {
        //arrange
        const store = createStore(rootReducer, initialState);
        const course = {
            title: 'TEST COURSE'
        };

        //act
        const action = courseActions.createCourseSuccess(course);
        store.dispatch(action);

        //assert
        const actual = store.getState().courses[0];
        //expect(actual.length).toEqual(1);
        expect(actual).toEqual(course);

    });
}); 