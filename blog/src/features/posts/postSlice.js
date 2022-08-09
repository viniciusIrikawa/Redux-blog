import { createSlice, nanoid } from '@reduxjs/toolkit'
import { sub } from 'date-fns'

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
                        date: new Date().toISOString(),
                        userId,
                        reactions: {
                            like: 0,
                            loveIt: 0,
                            haha: 0
                        }
                    }
                }
            } 
        },
        removeAllPosts: () => initialState,
        reactionAdded: (state, action) => {
            const { postId, reaction } = action.payload;
            const existingPost = state.find(post => post.id === postId)

            if(existingPost) {
                existingPost.reactions[reaction]++
            }
        }
    }
})

export const selectAllPosts = (state) => state.posts;
export const { postAdded, removeAllPosts, reactionAdded } = postSlice.actions 
export default postSlice.reducer