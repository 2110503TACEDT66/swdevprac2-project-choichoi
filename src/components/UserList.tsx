"use client"
import { addUser,removeUser } from "@/redux/features/signupSlice";
import { AppDispatch, useAppSelector } from "@/redux/store"
import { Button } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function UserList(){
    const users = useAppSelector((state)=> state.signupSlice.users)
    const dispatch = useDispatch<AppDispatch>()
    return (
        <div>
            {
                users.length?
                users.map((user)=>(
                    <div className="text-black bg-slate-200 rounded px-5 mx-5 py-2 my-2" key={user.email}>
                        <div>Name: {user.name}</div>
                        <div>Tel.: {user.tel}</div>
                        <div>Email: {user.email}</div>
                        <div>Password: {user.password}</div>
                        <div>Role: {user.role}</div>
                        <Button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-1 text-white shadow-sm" onClick={()=>dispatch(removeUser(user.email))}>remove user</Button>
                    </div>
                )):<div className="text-black ml-10">No User</div>
            }
        </div>
    );
}