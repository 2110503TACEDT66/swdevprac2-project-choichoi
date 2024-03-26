export default async function getHospital(hid:string){
    //await new Promise((resolve)=>setTimeout(resolve,1000));

    const response = await fetch("https://presentation-day-1-choichoi.vercel.app/api/v1/shops/"+hid);

    if(!response.ok){
        throw new Error("failed to fetch hospital");
    }
    const data = await response.json()
    return data
}