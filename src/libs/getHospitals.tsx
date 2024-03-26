export default async function getHospitals(page:number){
    await new Promise((resolve)=>setTimeout(resolve,1000));

    const response = await fetch("https://presentation-day-1-choichoi.vercel.app/api/v1/shops?sort=name&page=" + page,{next: {tags:['shops']}});

    if(!response.ok){
        throw new Error("failed to fetch hospitals");
    }
    const data = await response.json()
    return data
}