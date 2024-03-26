'use client'
import getUserProfile from "@/libs/getUserProfile";
import { useSession } from "next-auth/react";

export default async function AboutMe(){
    const {data:session} = useSession()
    const user = await getUserProfile(session?.user.token as string);
    console.log(user);
    
    return(
        <div className="w-[80%] shadow-lg mx-[10%] my-10 p-2 rounded-lg bg-gray-200
        flex flex-row">
            <div className="m-5 flex flex-col text-black space-y-10 mx-8 ">
                <div>Name: {user.data.name}</div>
                <div>Email: {user.data.email}</div>
                <div>Tel: {user.data.tel}</div>
                <div>Role: {user.data.role}</div>
            </div>
        </div>
    );
}