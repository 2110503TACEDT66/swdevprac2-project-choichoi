export default async function getReservatioms(token:string) {
    const response = await fetch("https://presentation-day-1-choichoi.vercel.app/api/v1/reservations",{
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