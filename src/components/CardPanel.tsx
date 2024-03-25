'use client'
import { useReducer, useState } from "react";
import Card from "@/components/Card";
import { Link } from "@mui/material";

export default function CardPanel(){

    const [update,setUpdate] = useState(true)
    
    const ratingReducer = (ratingMap:Map<string,number>, action:{type:string, hospitalName:string, rating?:number})=>{
        switch(action.type){
            case "set": {
                return new Map<string,number>(ratingMap.set(action.hospitalName,action.rating as number))
            }
            case "remove": {
                ratingMap.delete(action.hospitalName)
                return ratingMap
            }
            default : return ratingMap
        }
    }

    const [rating,dispatchRating] = useReducer(ratingReducer, new Map<string,number>([
        ["Chulalongkorn Hospital",5],
        ["Rajavithi Hospital", 5],
        ["Thammasat University Hospital", 5]
    ]));

    const hospitalList = [
        {hid:"001", name:"Chulalongkorn Hospital", imgSrc:"/img/chula.jpg"},
        {hid:"002", name:"Rajavithi Hospital", imgSrc:"/img/rajavithi.jpg"},
        {hid:"003", name:"Thammasat University Hospital", imgSrc:"/img/thammasat.jpg"}
    ]

    return(
        <div>
            <div className="m-[20px] flex flex-row flex-wrap justify-around content-around">
                {hospitalList.map((hospital)=>
                    (<Link href={"/hospital/"+hospital.hid} key={hospital.hid}>
                        <Card rating={(hospitalName:string,newRating:number)=>dispatchRating({type:"set", hospitalName:hospitalName, rating:newRating})} hospitalName={hospital.name} imgSrc={hospital.imgSrc}/>
                    </Link>)
                )}
            </div>
            <div className="text-center h-[300px]">
                {Array.from(rating).map(([hospital,rate])=>(
                    <div key={hospital} onClick={()=>{dispatchRating({type:"remove",hospitalName:hospital}); setUpdate(!update)}} data-testid={hospital}>{hospital} Rating : {rate}</div>
                ))}
            </div>
        </div>
    );
}