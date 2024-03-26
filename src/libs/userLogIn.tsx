export default async function userLogIn(email:string,password:string) {
    const response = await fetch("https://presentation-day-1-choichoi.vercel.app/api/v1/auth/login", {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email: email,
            password: password
        }),
    });

    if(!response.ok){
        throw new Error("Wrong username or password")
    }
    return await response.json();
}