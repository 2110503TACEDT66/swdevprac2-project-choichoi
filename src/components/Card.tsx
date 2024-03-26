import styles from "./card.module.css"
import Image from "next/image"
import InteractiveCard from "./InteractiveCard";
import { Rating } from "@mui/material";
import { useState } from "react";

type Props = {
    hospitalName: string;
    imgSrc: string;
    rating?:Function;
}
export default function ProductCard(hospital:Props) {
    const [rating,setRating] = useState(5);

    return (
        <InteractiveCard>
            <div className="w-full h-[70%] relative rounded-t-lg">
                    <Image src={hospital.imgSrc} alt="hospital" fill={true} className="object-cover rounded-t-lg"/>
            </div>
            <div className="w-full h-[15%] p-[10px]">
                {hospital.hospitalName}
            </div>
            {hospital.rating ? <div className="w-full h-[15%] p-[10px]">
                <Rating
                    name={hospital.hospitalName + " Rating"}
                    id={hospital.hospitalName + " Rating"}
                    data-testid={hospital.hospitalName + " Rating"}
                    value={rating}
                    onChange={(event, newValue) => {
                        setRating(newValue as number);
                        (hospital.rating as Function)(hospital.hospitalName,newValue as number);
                    }}
                />
            </div> : null}
        </InteractiveCard>
    );
};