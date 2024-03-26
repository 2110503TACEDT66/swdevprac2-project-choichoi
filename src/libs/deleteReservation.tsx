export default async function deleteReservations(hid:string,token:string) {
    const response = await fetch("https://presentation-day-1-choichoi.vercel.app/api/v1/reservations/"+hid,{
        method:"DELETE",
        headers: {
            authorization: "Bearer " + token,
        }
    })
    
    if(!response.ok){
        return null
    }

    return await response.json()
}