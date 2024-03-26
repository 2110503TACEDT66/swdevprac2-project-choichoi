'use client'
export default function InteractiveCard({children}:{children: React.ReactNode}){
    
    function onMouseHover(event:React.SyntheticEvent){
        if(event.type == "mouseover"){
            event.currentTarget.classList.remove("shadow-lg","bg-white");
            event.currentTarget.classList.add("shadow-2xl","bg-neutral-200");
        }else{
            event.currentTarget.classList.remove("shadow-2xl","bg-neutral-200");
            event.currentTarget.classList.add("shadow-lg","bg-white");
        }
    }
    
    return (
        <div className=" w-[500px] h-[300px] rounded-lg shadow-lg bg-white">
            {children}
        </div>
    );
}