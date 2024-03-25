'use client'
import Image from "next/image"
import { useState } from 'react';
import { Button } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

export default function Banner () {
    const {data:session} = useSession()
    const router = useRouter()
    const [cover, setCover] = useState(0);
    const covers = ["/img/cover.jpg","/img/cover2.jpg","/img/cover3.jpg","/img/cover4.jpg"]

    return (
        <div className="block w-screen h-[80vh] relative m-0 p-[5px]">
            <Image src={covers[cover]}  alt="COVER" priority fill={true} objectFit='cover' onClick={()=>{setCover((cover+1)%4);}}/>
            {session?<div className="z-25 top-0 right-0 absolute font-semibold text-cyan-800 text-xl bg-white text-center">Welcome {session.user?.name}</div>:null}

            <div className="relative z-20 text-center bg-[rgba(255,255,255,0.5)] p-2.5 top-[100px]">
                <h1 className='text-4xl font-medium'>Vaccine Service Center</h1>
                <h3 className='text-xl font-serif'>Your health matters, Join us for free vaccine</h3>
            </div>
            <Button variant='outlined' className=' absolute right-5 bottom-5 bg-white hover:bg-slate-200' onClick={()=>{router.push("/hospital")}}>Select Hospital</Button>
        </div>
    );
} 