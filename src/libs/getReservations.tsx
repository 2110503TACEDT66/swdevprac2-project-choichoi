export default async function getReservatioms(token:string) {
    const response = await fetch("http://localhost:5002/api/v1/reservations",{
        method:"GET",
        next: {tags:["getReserve"]},
        headers: {
            authorization: "Bearer " + token,
        },
    })
    
    if(!response.ok){
        return null
    }

    return await response.json()
}