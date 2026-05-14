import Gallery from '@/components/gallery/Gallery';
import Image from 'next/image'
import { Suspense } from 'react';

const Home = () => {
  return (
    <div className="grid grid-cols-1 gap-y-20 ">
      <div id="home" className="animate-fade-in-up delay-200 grid grid-cols-1 gap-y-6 md:gap-y-1 md:flex md:items-center md:justify-between ">
          <section className="grid grid-cols-1 gap-y-4">
            <h2 className="font-bold italic text-4xl">Lorem Ipsum</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.</p>
          </section>
          <aside className="flex justify-center">
            <div className="border-10 md:border-40 border-ring" >
              <Image
              src="/path/to/image.jpg"
              alt="Description"
              width={300}
              height={500}
              className="object-cover w-full h-auto"
              />
            </div>
          </aside>
        </div>

        <Suspense>
          <Gallery />
        </Suspense>
    </div>
  
    


  );
}

export default Home;