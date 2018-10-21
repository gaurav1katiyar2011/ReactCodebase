import React from 'react'
import { mount } from 'enzyme'
import CommentBox from '../CommentBox'
import Root from '../../Root'

let wrapped
beforeEach(() => {
    wrapped = mount(<Root><CommentBox /></Root>)
})

afterEach(()=>{
    wrapped.unmount()
})

describe('Simulate Events', () => {
    beforeEach(() => {
        wrapped.find('textarea').simulate('change', { target: { value: 'Entered text' } });
        wrapped.update()
    })


    it('text input should be entered', () => {
        expect(wrapped.find('textarea').prop('value')).toEqual('Entered text');
    });

    it('should be visible two buttons ', () => {
        expect(wrapped.find('button').length).toEqual(2);
    });

    it('input should be cleared on submit', () => {
        wrapped.find('form').simulate('submit')
        wrapped.update()
        expect(wrapped.find('textarea').prop('value')).toEqual('');
    });
})
