import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    {id: '0', name: 'Mike'},
    {id: '1', name: 'Juliet'},
    {id: '2', name: 'Yankee'}
]

const userSlice = createSlice({
    name: 'users',
    initialState: initialState,
    reducers: {} 
})


export const selectAllUsers = (state) => state.users
export default userSlice.reducer