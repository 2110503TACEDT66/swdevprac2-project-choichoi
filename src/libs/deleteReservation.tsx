export default async function deleteReservations(hid:string,token:string) {
    const response = await fetch("http://localhost:5002/api/v1/reservations/"+hid,{
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