import React from 'react';
import App from '../App';
import {mount} from 'enzyme';
import Root from '../../Root'

let wrapped;
beforeEach(()=>{      //This is a method of Jest
  wrapped=mount(<Root><App/></Root>)
});

afterEach(()=>{
  wrapped.unmount();
});

it('Should render Comment Box', () => {
  expect(wrapped.find('CommentBox').length).toEqual(1)
  
});

it('Should render Comment List', () => {
  expect(wrapped.find('CommentList').length).toEqual(1)
  
});

