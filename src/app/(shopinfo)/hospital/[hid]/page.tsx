import ShopInfoCard from "@/components/ShopInfoCard";
import getHospital from "@/libs/getHospital";
import { revalidatePath } from "next/cache";
import Image from "next/image";
import Link from "next/link";

export default function HospitalInfoPage({params}:{params:{hid:string}}){
    return(
        <main>
            <ShopInfoCard hid={params.hid}/>
            <Link href={"/booking?shop="+params.hid} className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-1 text-white shadow-sm  w-[70%] self-center">Reserve Now</Link>
        </main>
    );
}