import Link from 'next/link';
import Image from 'next/image'


const Hero = () => {
    return (
        <section className="min-h-screen flex items-center pt-20 md:pt-16">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Text Content */}
                    <div className="space-y-6 lg:order-1">
                        <p className="text-accent text-sm tracking-widest uppercase">
                        Artista Visual Contemporánea
                        </p>
                        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-foreground leading-tight text-balance">
                        Explorando los límites de la abstracción y la emoción
                        </h1>
                        <p className="text-muted-foreground text-lg leading-relaxed max-w-lg">
                        A través de obras de técnica mixta, investigo la intersección del color, la textura y la experiencia humana. Cada pieza es un diálogo entre lo consciente y lo inconsciente.
                        </p>
                        <div className="flex gap-4 pt-4">
                            <Link
                                href="#gallery"
                                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground text-sm tracking-wide uppercase hover:bg-primary/90 transition-colors"
                            >
                                Ver trabajo
                            </Link>
                            <Link
                                href="#contact"
                                className="inline-flex items-center justify-center px-6 py-3 border border-border text-foreground text-sm tracking-wide uppercase hover:bg-secondary transition-colors"
                            >
                                Contáctame
                            </Link>
                        </div>
                    </div>

                    {/* Featured Image */}
                    <div className="lg:order-2">
                        <div className="relative aspect-4/5 overflow-hidden">
                            <Image
                                src="https://r2-worker.mikelmm1999.workers.dev/06-portrait.jpeg"
                                alt="Featured artwork - Abstract expressionist oil painting"
                                fill
                                className="object-cover"
                                priority
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                            <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Hero;