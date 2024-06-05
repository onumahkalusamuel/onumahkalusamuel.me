import React from "react";
import Link from "next/link";
import {LogoLarge} from "../Logo";

const Nav = ({children, className = ""}: {
    children: React.ReactNode,
    className?: string
}) => {
    return (
        <ul className={`flex items-center h-full ${className}`}>{children}</ul>
    );
};

const NavItem = ({children}: { children: React.ReactNode }) => {
    return (
        <li className="px-3 sm:px-4 hover:underline text-base md:text-lg last:pr-0 first:pl-0">
            {children}
        </li>
    );
};

export const Navbar = () => {
    return (
        <div className="flex flex-wrap md:flex-no-wrap justify-between md:border-b dark:border-gray-100">
            <div className="w-1/2 md:w-64 p-4">
                <Link href="/">
                    <LogoLarge/>
                </Link>
            </div>

            <div
                className="w-full md:flex-1 justify-center md:justify-end flex bg-gray-100 dark:bg-gray-800 md:bg-transparent md:dark:bg-transparent py-2 px-4">
                <Nav>
                    <NavItem>
                        <Link href="/about">About Me</Link>
                    </NavItem>
                    <NavItem>
                        <Link href="/uses">Tech Stack</Link>
                    </NavItem>
                    <NavItem>
                        <Link href="/contact">Contact</Link>
                    </NavItem>
                </Nav>
            </div>
        </div>
    );
};
