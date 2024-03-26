export default async function userSignup(name:string,tel:string,email:string,password:string,role:string) {
    const response = await fetch("https://presentation-day-1-choichoi.vercel.app/api/v1/auth/register", {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: name,
            tel: tel,
            email: email,
            password: password,
            role: role
        }),
    });

    if(!response.ok){
        throw new Error("Something went wrong")
    }else alert('success')

    return await response.json();

}