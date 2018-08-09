import expect from 'expect';
import * as types from './actionTypes';
import * as courseActions from './courseActions';

import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';

describe('Testing Course Actions', () => {
    describe('createCourseSuccess', () => {
        it('should create a CREATE_COURSE_SUCCESS action', () => {
            //arrange
            const course = { id: 'test=passed', title: 'test passed' };
            const expectedAction = { type: types.CREATE_COURSE_SUCCESS, course: course };
            //act
            const action = courseActions.createCourseSuccess(course);
            //assert
            expect(action).toEqual(expectedAction);
        });
    });
});

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Testing Course Thunks', () => {
    describe('Async Actions', () => {
        afterEach(() => {
            nock.cleanAll();
        });
        it('should create BEGIN_AJAX_CALL and LOAD_COURSE_SUCCESS when loading courses', (done) => {
            //arrange
            //sample call to nock when 'mocking actual HTTP API
            //nock('http://example.com).get('/courses').reply(200, {body: {course: {id:1, title:'TITLE', ...}}})

            const expectedActions = [
                { type: types.BEGIN_AJAX_CALL },
                { type: types.LOAD_COURSES_SUCCESS, body: { courses: [{ id: 'test=pass', title: 'test pass' }] } }
            ];
            //act
            const store = mockStore({ courses: [] }, expectedActions);
            store.dispatch(courseActions.loadCourses()).then(() => {
                const actions = store.getActions();
                //assert
                expect(actions[0].type).toEqual(types.BEGIN_AJAX_CALL);
                expect(actions[1].type).toEqual(types.LOAD_COURSES_SUCCESS);
                done();
            });
        });
    });
});