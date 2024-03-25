"use client"
import DateReserve from "@/components/DateReserve";
import {Select, MenuItem, TextField} from "@mui/material";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { useRouter } from "next/router";

import { addBooking } from "@/redux/features/bookSlice";
import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";

export default function Booking(){

    const dispatch = useDispatch<AppDispatch>();

    const [name,setName] = useState("");
    const [lastname,setLastname] = useState("");
    const [id,setId] = useState("");
    const [hospital,setHospital] = useState("Chula");
    const [date,setDate] = useState<Dayjs|null>(null);

    const makeBooking = () => {
        if(name && lastname && hospital && id && date){
            const item:BookingItem = {
                name: name,
                surname: lastname,
                id: id,
                hospital: hospital,
                bookDate: dayjs(date).format("YYYY/MM/DD")
            }
            dispatch(addBooking(item));
            return item;
        }
    
    }

    return(
        <main>
            <div className="w-full flex flex-col items-center">
                <div className="w-fit flex flex-col space-y-4">
                    <TextField id="Name" name="Name" label="Name" variant="standard" onChange={(event: React.ChangeEvent<HTMLInputElement>) => {setName(event.target.value);}}/>
                    <TextField id="Lastname" name="Lastname" label="Lastname" variant="standard" onChange={(event: React.ChangeEvent<HTMLInputElement>) => {setLastname(event.target.value);}}/>
                    <TextField id="Citizen ID" name="Citizen ID" label="Citizen ID" variant="standard" onChange={(event: React.ChangeEvent<HTMLInputElement>) => {setId(event.target.value);}}/>
                    <Select id="hospital" label="Hospital" variant="standard" className="w-full" value={hospital} onChange={(e)=>{setHospital(e.target.value);}}>
                        <MenuItem value="Chula">Chulalongkorn Hospital</MenuItem>
                        <MenuItem value="Rajavithi">Rajavithi Hospital</MenuItem>
                        <MenuItem value="Thammasat">Thammasat University Hospital</MenuItem>
                    </Select>
                    <DateReserve onDateChange={(value:Dayjs)=>{setDate(value)}}/>
                    <button name="Book Vaccine" className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-1 text-white shadow-sm  w-[70%] self-center" onClick={makeBooking}>Book Vaccine</button>
                </div>
            </div>
        </main>
    );
}