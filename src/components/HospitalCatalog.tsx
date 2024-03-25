'use client'
import getHospitals from "@/libs/getHospitals";
import Card from "@/components/Card";
import Link from "next/link";
import { Button } from "@mui/material";
import { useState } from "react";


export default async function HospitalCatalog() {
    const [page,setPage] = useState(1)
    const hospitalJsonReady = await getHospitals(page)

    return (
        <div>
            <div className=" my-10 mx-[40%] flex flex-row flex-wrap justify-around content-around">
                {hospitalJsonReady.pagination.prev ? 
                    <Button variant='outlined' className='bg-white hover:bg-slate-200' onClick={()=>{setPage(hospitalJsonReady.pagination.prev.page)}}>{"<"}</Button> : <div className=" w-[62px]"></div>}
                <div className="mx-5">{page}</div>
                {hospitalJsonReady.pagination.next ? 
                    <Button variant='outlined' className='bg-white hover:bg-slate-200' onClick={()=>{setPage(hospitalJsonReady.pagination.next.page)}}>{">"}</Button> : <div className=" w-[62px]"></div>}
            </div>
            <div className="m-[20px] flex flex-row flex-wrap justify-around content-around">
                {hospitalJsonReady.data.map((hospital:HospitalItem)=>(
                    <Link className=" my-5" href={"/hospital/"+hospital.id} key={hospital.id}>
                        <Card hospitalName={hospital.name} imgSrc={hospital.picture}/>
                    </Link>
                    )
                )}
            </div>
        </div>

    );
}