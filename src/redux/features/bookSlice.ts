import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type BookState = {
    bookItems: BookingItem[]
}

const initialState:BookState = { bookItems:[] };

export const bookSlice = createSlice({
    name: "book",
    initialState,
    reducers: {
        addBooking: (state,action:PayloadAction<BookingItem>)=>{
            let newBookItem = state.bookItems.filter(item => {return item.id !== action.payload.id});
            newBookItem.push(action.payload);
            state.bookItems = newBookItem;
        },
        removeBooking: (state,action:PayloadAction<string>)=>{
            const newBookItem = state.bookItems.filter(item => {return item.id !== action.payload});
            state.bookItems = newBookItem;
        }
    }
})
export const { addBooking, removeBooking } = bookSlice.actions
export default bookSlice.reducer