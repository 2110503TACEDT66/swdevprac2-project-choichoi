import styles from "./card.module.css"
import Image from "next/image"
import InteractiveCard from "./InteractiveCard";
import { Link, Rating } from "@mui/material";
import { useState } from "react";

export default function ProductCard({hospital}:{hospital:HospitalItem}) {
    const toTimeString = (input:number) => {
        let hour = Math.floor(input/60).toString();
        let min = (input%60).toString()
        if(hour.length<2)hour = "0"+hour
        if(min.length<2)min = "0"+min
        return hour + ":" + min;
    }

    return (
        <InteractiveCard>
            <div className="w-full h-[50%] relative rounded-t-lg">
                    <Image src={hospital.picture} alt="hospital" fill={true} className="object-cover rounded-t-lg"/>
            </div>
            <div className="w-full h-[50%] p-[10px]">
                <div>{hospital.name}</div>
                <div>{hospital.address}</div>
                <div>Open: {toTimeString(hospital.open_time)} - {toTimeString(hospital.close_time)}</div>
                <div>{hospital.tel}</div>
                <Link href={"/booking?shop="+hospital._id} className="block rounded-md bg-[#c6c2c2] hover:bg-[#d9d9d9] px-3 py-1 text-black shadow-sm  w-fit self-center">Reserve Now</Link>
            </div>
        </InteractiveCard>
    );
};