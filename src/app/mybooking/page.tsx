"use client"
import BookingList from "@/components/BookingList";
import { useSession } from "next-auth/react";
import { Suspense } from "react";
import reValAction from "@/app/action"
import { LinearProgress } from "@mui/material";

export default function myBooking(){
    const session = useSession()
    const Rerender = () => {
        reValAction()
    }
    return(
        <main>
            <Suspense fallback={<p>Loading...<LinearProgress/></p>}>
                <BookingList token={session.data?.user.token as string} rerender={Rerender}></BookingList>
            </Suspense>
        </main>
    );
}