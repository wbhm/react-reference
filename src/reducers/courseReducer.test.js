import expect from 'expect';
import courseReducer from './courseReducer';
import * as actions from '../actions/courseActions';

describe('Testing Course Reducer', () => {
    it('should add a course when passed CREATE_COURSE_SUCCESS', () => {
        //arrange
        const initialState = [
            { title: 'A' },
            { title: 'B' }
        ];

        const newCourse = { title: 'C' };
        const action = actions.createCourseSuccess(newCourse);

        //act
        const newState = courseReducer(initialState, action);

        //assert
        expect(newState.length).toEqual(3);
        expect(newState[0].title).toEqual('A');
        expect(newState[1].title).toEqual('B');
        expect(newState[2].title).toEqual('C');

    });

    it('should update a course when passed UPDATE_COURSE_SUCCESS', () => {
        //arrange
        const initialState = [
            { id: 'A', title: 'A' },
            { id: 'B', title: 'B' },
            { id: 'C', title: 'C' },
        ];

        const newtitle = 'New Title';
        const updateId = 'B';
        const untouchedId = 'A';
        const untouchedTitle = 'A';

        const course = { id: updateId, title: newtitle };
        const action = actions.updateCourseSuccess(course);

        //act
        const newState = courseReducer(initialState, action);
        const updateCourse = newState.find(a => a.id == course.id);
        const untouchedCourse = newState.find(a => a.id == untouchedId);

        //assert
        expect(updateCourse.title).toEqual(newtitle);
        expect(untouchedCourse.title).toEqual(untouchedTitle);
        expect(newState.length).toEqual(3);
    });
});
