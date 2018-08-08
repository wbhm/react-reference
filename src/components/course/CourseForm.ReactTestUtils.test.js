import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import CourseFrom from './CourseForm';

function setup(saving) {

    let props = {
        course: {},
        saving: saving,
        errors: {},
        onSave: () => { },
        onChange: () => { }
    };

    let renderer = TestUtils.createRenderer();
    renderer.render(<CourseFrom {...props} />);
    let output = renderer.getRenderOutput();

    return {
        props,
        output,
        renderer
    };
}

describe('Testing CourseForm via React Test Utils', () => {

    it('renders form and h1', () => {
        const { output } = setup();
        expect(output.type).toBe('form');
        let [h1] = output.props.children;
        expect(h1.type).toBe('h1');
    });

    it('Submit button labelled Save when props.saving is false', () => {
        const { output, props } = setup(false);
        expect(props.saving).toBeFalsy;
        const button = output.props.children[5];
        expect(button.props.value).toBe('Save');
    });

    it('Submit button labelled Saving... when props.saving is true', () => {
        const { output, props } = setup(true);
        expect(props.saving).toBeTruthy;
        const button = output.props.children[5];
        expect(button.props.value).toBe('Saving...');
    });

});