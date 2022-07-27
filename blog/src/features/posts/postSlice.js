import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    {id: 1, title: 'Title of post 1', content: 'Content of post 1'},
    {id: 2, title: 'Title of post 2', content: 'Content of post 2'}
]

const postSlice = createSlice({
    name: 'posts',
    initialState: initialState,
    reducers:{
        postAdded: (state, action) => {
            state.push(action.payload)
        }
    }

})

export const selectAllPosts = (state) => state.posts;
export const { postAdded } = postSlice.actions 
export default postSlice.reducer