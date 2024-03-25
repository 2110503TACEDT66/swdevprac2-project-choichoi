'use client'
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Dayjs } from "dayjs";
export default function DateReserve({onDateChange}:{onDateChange:Function}){
    return(
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker className="bg-white" onChange={(value)=>{onDateChange(value)}}/>
        </LocalizationProvider>
    );
}