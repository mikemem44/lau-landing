"use client"

import { skipLinks } from "@/types/skipLinks";
import { useState } from "react";
import { Menu, X } from 'lucide-react';
import { cn } from "@/utils/twUtils";
import Link from "next/link";

const Header = () => {
const [ isOpen, setIsOpen ] = useState<boolean>(false);

    return (
        <header className="border-b border-border">
            <nav className="max-w-full outline mx-auto px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <Link href="/">
                        <h1 className="text-center md:text-start text-xl hover:text-accent-foreground hover:underline">EL PORTAFOLIO DE LAU</h1>
                    </Link>

                    {/* Desktop */}
                    <ul className="hidden md:flex items-center gap-6">
                        {skipLinks.map((item,index) => (
                            <li key={index}>
                                <Link href={`#${item.slug}`} className="text-muted-foreground uppercase hover:underline hover:text-accent-foreground">
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Mobile */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 text-foreground hover:text-accent transition-colors"
                        aria-label={isOpen ? "Close menu" : "Open menu"}
                    >
                        {isOpen ? <X className="w-5 h-5"/> : <Menu className="w-5 h-5"/>}
                    </button>
                </div>

                <div className={cn("md:hidden overflow-hidden transition-all duration-300 ease-in-out", isOpen ? "max-h-48 pb-4" : "max-h-0")}>
                    <ul className="flex flex-col gap-4 pt-4 border-t border-border">
                        {skipLinks.map((item,index) => (
                            <li key={index}>
                                <Link 
                                    href={`#${item.slug}`}
                                    onClick={() => setIsOpen(false)}
                                    className="block text-sm text-muted-foreground hover:text-foreground transition-colors uppercase"
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
            
            {/* <div className="grid grid-cols-1 md:flex md:flex-row md:items-center md:justify-between mx-10">
                <h1 className="text-center md:text-start">EL PORTAFOLIO DE LAU</h1>
                <nav>

                    <ul className="hidden md:flex gap-6">
                        {skipLinks.map((item,index) => (
                            <li key={index}>
                                <a href={`#${item.slug}`} className="hover:underline hover:text-accent-foreground">{item.label}</a>
                            </li>
                        ))}
                    </ul>


                    <div className="flex md:hidden">

                    </div>
                </nav>
            </div> */}
        </header>
    )
}

export default Header;