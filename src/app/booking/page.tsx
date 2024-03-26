"use client"
import DateReserve from "@/components/DateReserve";
import {Select, MenuItem, TextField} from "@mui/material";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { useRouter } from "next/navigation";

import { addBooking } from "@/redux/features/bookSlice";
import { Suspense, useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { useSearchParams } from "next/navigation";
import ShopInfoCard from "@/components/ShopInfoCard";
import postReservation from "@/libs/postReservation";
import { useSession } from "next-auth/react";

export default function Booking(){

    const param = useSearchParams()
    const hospital = param.get("shop")
    const router = useRouter();
    const session = useSession();

    const dispatch = useDispatch<AppDispatch>();

    let date:Dayjs|null = null;

    const makeBooking = () => {
        postReservation(hospital as string,session.data?.user.token as string,date as Dayjs)
        router.push("/mybooking")
    }

    return(
        <main>
            <div className="w-full flex flex-col items-center">
                <div className="w-fit flex flex-col space-y-4">
                    <Suspense>
                        <ShopInfoCard hid={hospital as string}/>
                    </Suspense>
                    <div>Store ID: {param.get("shop")}</div>
                    <DateReserve onDateChange={(value:Dayjs)=>{date = value}}/>
                    <button name="Reserve" className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-1 text-white shadow-sm  w-[70%] self-center" onClick={makeBooking}>Reserve</button>
                </div>
            </div>
        </main>
    );
}