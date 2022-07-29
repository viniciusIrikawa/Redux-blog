import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = []

const postSlice = createSlice({
    name: 'posts',
    initialState: initialState,
    reducers:{
        postAdded: {
            reducer(state, action){
                state.unshift(action.payload)
            },
            prepare(title, content, userId){
                return{
                    payload: {
                        id: nanoid(),
                        title,
                        content,
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