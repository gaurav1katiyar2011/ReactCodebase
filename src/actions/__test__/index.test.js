import {saveComment} from '../index'
import {SAVE_COMMENT} from '../types'

describe('Save Comment',()=>{
    it('should be correct type',()=>{
        const action=saveComment();
        expect(action.type).toEqual(SAVE_COMMENT)

    })

    it('should be correct payload',()=>{
        const action=saveComment('New Comment');
        expect(action.payload).toEqual('New Comment')
    })
})