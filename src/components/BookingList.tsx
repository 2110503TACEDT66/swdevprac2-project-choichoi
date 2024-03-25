"use client"
import { addBooking, removeBooking } from "@/redux/features/bookSlice";
import { AppDispatch, useAppSelector } from "@/redux/store"
import { Button } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function BookingList(){
    const bookItems = useAppSelector((state)=> state.bookSlice.bookItems);
    const dispatch = useDispatch<AppDispatch>()
    return (
        <div>
            {
                bookItems.length?
                bookItems.map((bookItem)=>(
                    <div className="bg-slate-200 rounded px-5 mx-5 py-2 my-2" key={bookItem.id}>
                        <div>Name: {bookItem.name}</div>
                        <div>Lastname: {bookItem.surname}</div>
                        <div>Citizen ID: {bookItem.id}</div>
                        <div>Hospital: {bookItem.hospital}</div>
                        <div>Booking Date: {bookItem.bookDate}</div>
                        <Button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-1 text-white shadow-sm" onClick={()=>dispatch(removeBooking(bookItem.id))}>remove booking</Button>
                    </div>
                )):<div>No Vaccine Booking</div>
            }
        </div>
    );
}