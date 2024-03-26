import Image from "next/image"
import TopMenuItem from "./TopMenuItem";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Link from "next/link";

export default async function TopMenu (){
    const session = await getServerSession(authOptions);
    return (
        <div className="h-[50px] bg-[white] fixed z-30 flex flex-row border-y-[lightgrey] border-t border-solid border-b top-0 inset-x-0 justify-end">
            <div className="text-gray-600 absolute flex flex-row left-5 justify-around w-[20%] self-center">
                <div>{ session ? <Link href="/api/auth/signout">Sign-Out</Link> : <div><Link href="/api/auth/signin" className="mr-10">Sign-In</Link> <Link href="/signup">Sign-Up</Link></div>}</div>
                <div>{ session ? <Link href="/mybooking">My Booking</Link> : null}</div>
                <div>{ session ? <Link href="/aboutme">About Me</Link> : null}</div>
            </div>
            
            { false ? <TopMenuItem title="Booking" pageRef="/booking"/> : null}
            <Image src={'/img/logo.png'} className="h-full w-auto" alt="logo" width={0} height={0} sizes="100vh"/>   
        </div>
    );
}