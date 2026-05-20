"use client"

import { skipLinks } from "@/common/types/skipLinks";
import { useState } from "react";
import { Menu, X } from 'lucide-react';
import { cn } from "@/utils/twUtils";
import Link from "next/link";

const Header = () => {
const [ isOpen, setIsOpen ] = useState<boolean>(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
            <nav className="max-w-full outline mx-auto px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <Link href="/">
                        <h1 className="font-serif tracking-wide text-center text-sidebar-foreground md:text-start text-xl hover:text-sidebar-accent-foreground ease-in-out transition duration-200">Laura Zambrano</h1>
                    </Link>

                    {/* Desktop */}
                    <ul className="hidden md:flex items-center gap-6">
                        {skipLinks.map((item,index) => (
                            <li key={index}>
                                <a href={`#${item.slug}`} className="text-muted-foreground uppercase  hover:text-accent-foreground ease-in-out transition duration-200">
                                    {item.label}
                                </a>
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
                                <a 
                                    href={`#${item.slug}`}
                                    onClick={() => setIsOpen(false)}
                                    className="block text-sm text-muted-foreground hover:text-foreground transition-colors uppercase"
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
            
        </header>
    )
}

export default Header;