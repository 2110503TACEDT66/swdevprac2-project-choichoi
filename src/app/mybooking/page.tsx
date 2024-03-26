"use client"
import BookingList from "@/components/BookingList";
import { useSession } from "next-auth/react";
import { revalidateTag } from "next/cache";
import { useRouter } from "next/navigation";
import { Suspense } from "react";
import reValAction from "@/app/action"

export default function myBooking(){
    const session = useSession()
    const router = useRouter()
    const Rerender = () => {
        reValAction()
    }
    return(
        <main>
            <Suspense>
                <BookingList token={session.data?.user.token as string} rerender={Rerender}></BookingList>
            </Suspense>
        </main>
    );
}