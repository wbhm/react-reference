import expect from 'expect';
import { authorsFormattedForDropDown } from './selectors';

describe('Test Selectors', () => {
    describe('authorsFormattedForDropDown', () => {
        it('should return author data formatted for use in a drop down', () => {
            const authors = [
                { id: 'bruce-wayne', firstName: 'bruce', lastName: 'wayne' },
                { id: 'peter-parker', firstName: 'peter', lastName: 'parker' }
            ];

            const expected = [
                { value: 'bruce-wayne', text: 'bruce wayne' },
                { value: 'peter-parker', text: 'peter parker' }
            ];
            expect(authorsFormattedForDropDown(authors)).toEqual(expected);
        });
    });
});