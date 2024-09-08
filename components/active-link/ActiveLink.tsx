'use client';

import Link from "next/link";
import styles from "./ActiveLink.module.css";
import { usePathname } from "next/navigation";


interface Props {
    href: string;
    label: string;
}
export default function ActiveLink({ href, label }: Props) {
    const pathname = usePathname();

    return (
        <Link href={href}
            className={`${styles.link} ${(pathname === href) && styles["active-link"]}`}>
            <span>{label}</span>
        </Link>
    );
} 