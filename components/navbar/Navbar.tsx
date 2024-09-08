import Link from "next/link";
import { HomeIcon } from "@primer/octicons-react";
import ActiveLink from "../active-link/ActiveLink";

const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/pricing", label: "Pricing" },
];


export function Navbar() {

    return (
        <nav
            className="flex items-center gap-3 bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
            <Link
                href="/"
                className="flex items-center gap-2 hover:underline hover:underline-offset-4">
                <HomeIcon size={16} /><span>{navItems[0].label}</span>
            </Link>
            <div
                className="flex-1"></div>
            {navItems.slice(1).map((item) => (
                <ActiveLink key={item.href} {...item} />
            ))}
        </nav>
    )
}
