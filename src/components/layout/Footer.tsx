import { skipLinks } from "@/types/skipLinks";

const Footer = () => {
    
    return (
        <footer className="grid grid-cols-1 w-full py-10 border-t border-border">
            <div className="flex justify-between mx-24">
                <small>EL PORTAFOLIO DE LAU</small>
                <nav className="grid grid-cols-1 gap-1">
                    {skipLinks.map((link, index) => (
                    <a key={index} href={`#${link.slug}`} className="hover:underline hover:text-accent-foreground">
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