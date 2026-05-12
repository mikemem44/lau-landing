import { skipLinks } from "@/types/skipLinks";

const Header = () => {

    return (
        <header className="py-6 border-b border-border">
            <div className="flex flex-row items-center justify-between mx-10">
                <h1 className="">EL PORTAFOLIO DE LAU</h1>
                <nav className="flex gap-6">
                    {skipLinks.map((item,index) => (
                    <a key={index} href={`#${item.slug}`} className="hover:underline hover:text-accent-foreground">{item.label}</a>
                    ))}
                </nav>
            </div>
        </header>
    )
}

export default Header;