"use client"

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

export function MainNav({
    className,
    ...props
}: React.HTMLAttributes<HTMLElement>) {
    const pathname = usePathname();
    const params = useParams();

    const routes = [
        {
            href: `/`,
            label: 'Home',
        },
        {
            href: `/about`,
            label: 'About',
        },
    ];

    return (
        <nav className={"fixed w-full z-10 justify-between items-center h-32 px-10 text-white font-thin "}>
            
            <div className='flex justify-end h-full items-center gap-5'>
                {routes.map((route) => (
                    <Link key={route.href} href={route.href}>
                        {route.label}
                    </Link>
                ))}
            </div>
        </nav>
    )
}