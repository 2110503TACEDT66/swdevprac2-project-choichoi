import { Dayjs } from "dayjs";
export default async function updateReserve(resID:string,token:string,date:Dayjs) {
    const response = await fetch("https://presentation-day-1-choichoi.vercel.app/api/v1/reservations/" + resID, {
        method: "PUT", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
            authorization: "Bearer " + token,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            date:date
        }),
    });

    if(!response.ok){
        return null
    }

    return await response.json();

}