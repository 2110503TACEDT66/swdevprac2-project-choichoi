import { Dayjs } from "dayjs";
export default async function userLogIn(shopID:string,token:string,date:Dayjs) {
    const response = await fetch("http://localhost:5002/api/v1/shops/" + shopID + "/reservations", {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
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
        throw new Error("cannot post reservations")
    }

    return await response.json();

}