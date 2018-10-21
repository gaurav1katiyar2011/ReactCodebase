import commentReducer from '../comments'
import {SAVE_COMMENT} from '../../actions/types'

it('handle actions of type SAVE_COMMENT',()=>{
    const action={
        type:SAVE_COMMENT,
        payload: 'data'
    }

    const newState=commentReducer([],action)
    expect(newState).toEqual(['data'])
})