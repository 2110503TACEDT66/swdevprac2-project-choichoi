import Image from "next/image"
import TopMenuItem from "./TopMenuItem";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Link from "next/link";

export default async function TopMenu (){
    const session = await getServerSession(authOptions);
    return (
        <div className="h-[50px] bg-[white] fixed z-30 flex flex-row border-y-[lightgrey] border-t border-solid border-b top-0 inset-x-0 justify-end">
            <div className="absolute flex flex-row left-5 justify-around w-[20%] self-center">
                <div>{ session ? <Link href="/api/auth/signout">Sign-Out</Link> : <Link href="/api/auth/signin">Sign-In</Link>}</div>
                <div>{ session ? <Link href="/mybooking">My Booking</Link> : ""}</div>
                <div>{ session ? <Link href="/aboutme">About Me</Link> : ""}</div>
            </div>
            
            <TopMenuItem title="Booking" pageRef="/booking"/>   
            <Image src={'/img/logo.png'} className="h-full w-auto" alt="logo" width={0} height={0} sizes="100vh"/>   
        </div>
    );
}