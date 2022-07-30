import { createSlice, nanoid } from '@reduxjs/toolkit'
import { sub } from 'date-fns'


const initialState = [{
    id: '1',
    title: 'teste',
    content: 'content teste',
    date: sub(new Date(), {minutes: 10}).toISOString()
}]

const postSlice = createSlice({
    name: 'posts',
    initialState: initialState,
    reducers:{
        postAdded: {
            reducer(state, action){
                state.unshift(action.payload)
            },
            prepare(title, content, userId, date){
                return{
                    payload: {
                        id: nanoid(),
                        title,
                        content,
                        date: new Date().toISOString(),
                        userId
                    }
                }
            } 
        },
        removeAllPosts: () => initialState
    }
})

export const selectAllPosts = (state) => state.posts;
export const { postAdded, removeAllPosts } = postSlice.actions 
export default postSlice.reducer