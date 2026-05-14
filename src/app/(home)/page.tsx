import Gallery from '@/components/gallery/Gallery';
import Image from 'next/image'
import { Suspense } from 'react';

const Home = () => {
  return (
    <div className="grid grid-cols-1 gap-y-20 mx-20">
      <div id="home" className="animate-fade-in-up delay-200 flex items-center justify-between ">
          <section className="grid grid-cols-1 gap-y-4">
            <h2 className="font-bold italic text-4xl">Lorem Ipsum</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.</p>
          </section>
          <aside className="">
            <div className="border-40 border-ring" >
              <Image
              src="/path/to/image.jpg"
              alt="Description"
              //fill
              width={300}
              height={500}
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