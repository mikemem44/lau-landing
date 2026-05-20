import { skipLinks } from "@/common/types/skipLinks";
import Link from "next/link";

const Footer = () => {
    
    return (
        <footer className="grid grid-cols-1 w-full py-10 border-t border-border">
            <div className="grid grid-cols-1 md:flex md:justify-between gap-y-4 md:gap-y-0 md:mx-24">
                <Link href="#home" className="font-serif text-xl tracking-wide text-foreground text-center md:text-start hover:text-sidebar-accent-foreground ease-in-out transition duration-200">Laura Zambrano</Link>
                <nav className="grid grid-cols-1 gap-1">
                    {skipLinks.map((link, index) => (
                        <a key={index} href={`#${link.slug}`} className="text-center text-muted-foreground uppercase md:text-start ease-in-out transition duration-200 hover:text-accent-foreground">
                            <small>{link.label}</small>
                        </a>
                    ))}
                </nav>
                <small className="my-4 text-muted-foreground text-center">&copy; {new Date().getFullYear()} Laura Zambrano. Todos los derechos reservados.</small>
            </div>
        </footer>
    )
}

export default Footer;