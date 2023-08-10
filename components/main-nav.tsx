"use client"

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation"

interface MainNavProps {
    data: any;
}

export const revalidate = 0;

const MainNav: React.FC<MainNavProps> = ({ data }) => {

    const pathname = usePathname();

    const routes = data.map((route: any) => ({
        href: `/category/${route.id}`,
        label: route.name,
        active: pathname === `/category/${route.id}`
    }))

    return (
        <div className="gap-5 flex">
            {routes.map((route: any) => (
                <Link key={route.label} href={route.href} className={cn("font-medium text-md transition-colors hover:text-black cool-link", route.active ? "text-black" : "text-muted-foreground")}>
                    {route.label}
                </Link>
            ))}
        </div>
    )
}

export default MainNav