'use client'
import getUserProfile from "@/libs/getUserProfile";
import { TextField } from "@mui/material";
import { useSession } from "next-auth/react";
import { useState } from "react";

export default async function AboutMe(){
    const {data:session} = useSession()
    const user = await getUserProfile(session?.user.token as string);
    console.log(user);
    
    return(
        <div>
            <div>Name: {user.data.name}</div>
            <div>Tel: {user.data.tel}</div>
            <div>Email: {user.data.email}</div>
            <div>Created At: {user.data.createdAt}</div>
            <div>Role: {user.data.role}</div>
        </div>
    );
}