"use client"
import DateReserve from "@/components/DateReserve";
import {Select, MenuItem, TextField} from "@mui/material";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";

import { Suspense, useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { useSearchParams } from "next/navigation";
import ShopInfoCard from "@/components/ShopInfoCard";
import updateReservation from "@/libs/updateReservation";
import { useSession } from "next-auth/react";

export default function ReserveEdit({params}:{params:{rid:string}}){
    const router = useRouter();
    const session = useSession();

    let date:Dayjs|null = null;

    const makeBooking = () => {
        updateReservation(params.rid,session.data?.user.token as string,date as Dayjs)
        router.push("/mybooking")
    }

    return(
        <main>
            <div className="w-full flex flex-col items-center">
                <div className="w-fit flex flex-col space-y-4">
                    <DateReserve onDateChange={(value:Dayjs)=>{date = value}}/>
                    <button name="Reserve" className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-1 text-white shadow-sm  w-[70%] self-center" onClick={makeBooking}>Submit Edit Reserve</button>
                </div>
            </div>
        </main>
    );
}