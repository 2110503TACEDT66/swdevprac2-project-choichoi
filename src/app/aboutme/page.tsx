import AboutMe from "@/components/AboutMe";
import { LinearProgress, TextField } from "@mui/material";
import Link from "next/link";
import { Suspense, useState } from "react";


export default function AboutMePage(){
    return(
        <main>
            <Suspense fallback={<p>Loading...<LinearProgress/></p>}>
                <AboutMe/>
            </Suspense>
        </main>
    );
}