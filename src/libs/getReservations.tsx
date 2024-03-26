export default async function getUserProfile(token:string) {
    const response = await fetch("http://localhost:5002/api/v1/reservations",{
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