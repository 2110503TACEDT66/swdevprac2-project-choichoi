'use server'
import { dbConnect } from "@/db/dbConnect"
import User from "@/db/models/User"
import { redirect } from "next/dist/server/api-utils"

export const createUser = async (name:string,tel:string,email:string,password:string,role:string) => {
    
    try{
        await dbConnect()
        const user = User.create({
            'name':name,
            'tel':tel,
            'email':email,
            'password':password,
            'role':role
        })
    }catch(error){
        console.log(error)
    }
}
