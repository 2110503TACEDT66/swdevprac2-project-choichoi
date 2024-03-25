export default async function getHospital(hid:string){
    //await new Promise((resolve)=>setTimeout(resolve,1000));

    const response = await fetch("http://localhost:5002/api/v1/shops/"+hid);

    if(!response.ok){
        throw new Error("failed to fetch hospital");
    }
    const data = await response.json()
    return data
}