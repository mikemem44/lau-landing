import Gallery from '@/components/layout/main/Gallery';
import About from '@/components/layout/main/About';
import Image from 'next/image'
import { Suspense } from 'react';
import Link from 'next/link';
import ContactMe from '@/components/layout/main/ContactMe';
import Loading from '@/components/ui/Loading';

const Home = () => {
  return (
    <div className="grid grid-cols-1 gap-y-20 ">
      <div id="home" className="grid grid-cols-1 gap-y-6 md:gap-y-1 md:flex md:items-center md:justify-between ">
        
          <section className="animate-fade-in-up md:animate-fade-in-right delay-200 grid grid-cols-1 gap-y-4">
            <h2 className="font-bold text-4xl md:text-5xl">Lorem Ipsum</h2>
            <p className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.</p>

            <div className="hidden md:flex mt-6 gap-x-6">
              <Link href="#gallery" className="uppercase border border-border p-3 rounded-xl text-foreground hover:bg-accent hover:text-accent-foreground transition duration-200">Mi trabajo</Link>
              <Link href="#about" className="uppercase border border-border p-3 rounded-xl text-foreground hover:bg-accent hover:text-accent-foreground transition duration-200">Sobre mi</Link>
            </div>
          </section>

          <aside className="animate-fade-in-up md:animate-fade-in-left delay-200 flex md:justify-center">
            <div className="border-10 md:border-40 border-ring" >
              <Image
              src="https://r2-worker.mikelmm1999.workers.dev/about-me.jpeg"
              alt="placeholder"
              width={300}
              height={500}
              quality={75}
              loading="eager"
              className="object-cover w-full h-auto"
              />
            </div>
          </aside>

          <div className="flex md:hidden gap-x-2">
              <Link href="#gallery" className="w-1/2 text-center uppercase bg-accent border border-border py-6 text-foreground">Mi trabajo</Link>
              <Link href="#about" className="w-1/2 text-center uppercase border border-border py-6 text-foreground">Sobre mi</Link>
          </div>
        </div>

        <Suspense fallback={<Loading />}>
          <Gallery />
        </Suspense>

        <About />

        <ContactMe />
    </div>
  
    


  );
}

export default Home;