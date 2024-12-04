import Navbar from "@/components/navbar"
import { redirect } from "next/navigation"

export default async function SetupLayout({
    children,
}:{
    children:React.ReactNode
}){

    return(
        <>
            
            {children}
        </>
    )
}