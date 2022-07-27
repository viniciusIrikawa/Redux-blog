import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    {id: '0', name: 'Author 1'},
    {id: '1', name: 'Author 2'},
    {id: '2', name: 'Author 3'}
]

const userSlice = createSlice({
    name: 'users',
    initialState: initialState,
    reducers: {

    } 
})


export const selectAllUsers = (state) => state.users
export default userSlice.reducer