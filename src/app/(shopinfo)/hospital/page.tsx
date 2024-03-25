import HospitalCatalog from "@/components/HospitalCatalog";
import { LinearProgress } from "@mui/material";
import { Suspense } from "react";


export default function HospitalPage(){
    return(
        <main>
            <Suspense fallback={<p>Loading...<LinearProgress/></p>}>
                <HospitalCatalog/>
            </Suspense>
        </main>
    );
}