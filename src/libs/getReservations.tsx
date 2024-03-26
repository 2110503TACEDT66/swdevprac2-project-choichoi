export default async function getUserProfile(token:string) {
    const response = await fetch("https://presentation-day-1-choichoi.vercel.app/api/v1/reservations",{
        method:"GET",
        headers: {
            authorization: "Bearer " + token,
        }
    })
    
    if(!response.ok){
        return null
    }

    return await response.json()
}