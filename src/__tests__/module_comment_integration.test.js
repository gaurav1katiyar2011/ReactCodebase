import React from 'react'
import App from '../components/App'
import Root from '../Root'
import {mount} from 'enzyme'
import moxios from 'moxios'

beforeEach(()=>{
  moxios.install()
  moxios.stubRequest('https://jsonplaceholder.typicode.com/comments',{
      status:200,
      response:[{name:'Comment-1'},{name:'Comment-2'}]

  })
})

afterEach(()=>{
    moxios.uninstall()
})

it('should fetch comments from server', (done)=>{

    const wrapped=mount(<Root>
        <App/>
    </Root>)

    wrapped.find('.fetch-comments').simulate('click')

    moxios.wait(()=>{
        wrapped.update()
        expect(wrapped.find('li').length).toEqual(2)
        done()
    })
})
