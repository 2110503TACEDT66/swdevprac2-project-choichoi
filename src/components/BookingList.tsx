import getReservations from "@/libs/getReservations";
import { Button } from "@mui/material";
import ShopInfoCard from "./ShopInfoCard";
import deleteReservations from "@/libs/deleteReservation";
import Link from "next/link";
export default async function BookingList({token,rerender}: {token:string,rerender:Function}){
    
    const bookItems = await getReservations(token)

    async function removeBooking(bookingID:string){
        await deleteReservations(bookingID,token);
        rerender()
    }

    return (
        <div>
            {
                bookItems.data.length?
                bookItems.data.map((bookItem:BookingItem)=>(
                    <div className="bg-slate-200 rounded px-5 mx-5 py-2 my-2">
                        <ShopInfoCard hid={bookItem.shop.id}/>
                        <div>Reservation Time = {bookItem.date}</div>
                        <Button className="rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-1 text-white shadow-sm" onClick={()=>removeBooking(bookItem._id)}>remove booking</Button>
                        <Link href={"/mybooking/"+bookItem._id} className="rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-1 text-white shadow-sm" >edit booking</Link>
                    </div>
                )):<div>No Vaccine Booking</div>
            }
        </div>
    );
}