import { skipLinks } from "@/types/skipLinks";

const Footer = () => {
    
    return (
        <footer className="grid grid-cols-1 w-full py-10 border-t border-border">
            <div className="grid grid-cols-1 md:flex md:justify-between gap-y-4 md:gap-y-0 md:mx-24">
                <label className="text-sm md:text-md text-center md:text-start">EL PORTAFOLIO DE LAU</label>
                <nav className="grid grid-cols-1 gap-1">
                    {skipLinks.map((link, index) => (
                    <a key={index} href={`#${link.slug}`} className="text-center text-muted-foreground uppercase md:text-start hover:underline hover:text-accent-foreground">
                    <small>{link.label}</small>
                    </a>
                    ))}
                </nav>
                <small className="my-4 text-muted-foreground text-center">&copy; {new Date().getFullYear()} EL PORTAFOLIO DE LAU. Todos los derechos reservados.</small>
            </div>
        </footer>
    )
}

export default Footer;