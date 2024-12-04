"use client"

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

export function MainNav({
    className,
    ...props
}:React.HTMLAttributes<HTMLElement>){
    const pathname = usePathname();
    const params = useParams();

    const routes = [
        {
            href:`/home`,
            label:'Home',
            active: pathname === `/${params.storeId}`
        },
        {
            href:`/about`,
            label:'About',
            active: pathname === `/${params.storeId}/settings`
        },
    ];

    return(
        <nav className={"flex items-center space-x-4 lg:space-x-6"}>
            {routes.map((route)=>(
                <Link key={route.href} href={route.href}>
                    {route.label}
                </Link>
            ))}
        </nav>
    )
}