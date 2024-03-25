import getHospital from "@/libs/getHospital";
import { revalidatePath } from "next/cache";
import Image from "next/image";

export default async function HospitalInfoPage({params}:{params:{hid:string}}){
    const hospital = await getHospital(params.hid)
    const toTimeString = (input:number) => {
        let hour = Math.floor(input/60).toString();
        let min = (input%60).toString()
        if(hour.length<2)hour = "0"+hour
        if(min.length<2)min = "0"+min
        return hour + ":" + min;
    }

    return(
        <main>
            <div className="flex flex-row my-5">
                <Image src={hospital.data.picture} alt={hospital.data.picture + "_image"} width={0} height={0}   sizes="100vw" className="mx-5 rounded-lg w-[30%]"/>
                <div className="mx-5 flex flex-col">
                    <div>{hospital.data.name}</div>
                    <div>{hospital.data.address}</div>
                    <div>Open: {toTimeString(hospital.data.open_time)} - {toTimeString(hospital.data.close_time)}</div>
                    <div>{hospital.data.address}</div>
                    <div>Tel. {hospital.data.tel}</div>
                </div>
                
            </div>
        </main>
    );
}