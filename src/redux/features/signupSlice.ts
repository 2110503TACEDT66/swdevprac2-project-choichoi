import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type signupState = {
    users: SignUpFormState[]
}

const initialState:signupState = { users:[] };

export const signupSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addUser: (state,action:PayloadAction<SignUpFormState>)=>{
            let newUsers = state.users.filter(item => {return item.email !== action.payload.email});
            newUsers.push(action.payload);
            state.users = newUsers;
        },
        removeUser: (state,action:PayloadAction<string>)=>{
            const newUsers = state.users.filter(item => {return item.email !== action.payload});
            state.users = newUsers;
        }
    }
})
export const { addUser, removeUser } = signupSlice.actions
export default signupSlice.reducer