"use client"
import {TextField} from "@mui/material";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { useState } from "react";
import userSignup from "@/libs/userSignup";
import { dbConnect } from "@/db/dbConnect";
import User from "@/db/models/User";
import { revalidateTag } from "next/cache";

export default function Signup(){

    const dispatch = useDispatch<AppDispatch>();

    const [name,setName] = useState("");
    const [tel,setTel] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [role,setRole] = useState('');
    
    function reset(){
        setName('')
        setTel('')
        setEmail('')
        setPassword('')
        setRole('')
    }
    return(
        <main>
            <div className="w-full flex flex-col items-center">
                <div className="w-fit flex flex-col space-y-4">
                    <TextField id="Name" name="Name" label="Name" variant="standard" value={name} onChange={(event: React.ChangeEvent<HTMLInputElement>) => {setName(event.target.value);}}/>
                    <TextField id="Tel" name="Tel" label="Tel." variant="standard" value={tel} onChange={(event: React.ChangeEvent<HTMLInputElement>) => {setTel(event.target.value);}}/>
                    <TextField id="Email" name="Email" label="Email" variant="standard" value={email} onChange={(event: React.ChangeEvent<HTMLInputElement>) => {setEmail(event.target.value);}}/>
                    <TextField id="Password" name="Password" label="Password" variant="standard" value={password} onChange={(event: React.ChangeEvent<HTMLInputElement>) => {setPassword(event.target.value);}}/>
                    <TextField id="Role" name="Role" label="Role" variant="standard" value={role} onChange={(event: React.ChangeEvent<HTMLInputElement>) => {setRole(event.target.value);}}/>
                    
                    
                    <button name="Register" className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-1 text-white shadow-sm  w-[70%] self-center" onClick={()=>{userSignup(name,tel,email,password,role)}} >Register</button>
                </div>
            </div>
        </main>
    );
}