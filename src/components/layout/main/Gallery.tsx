"use client"

import Image from 'next/image';
import useImages from "@/hooks/useImages";
import Loading from "../../ui/Loading";
import * as Dialog from "@radix-ui/react-dialog";
import { cn } from '@/utils/twUtils';
import { useState } from 'react';


const Gallery = () => {
    const { images, isLoading } = useImages();
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

    const filteredImages = images.filter((image) => image.key !== "about-me.jpeg");

    return (
        isLoading ? <Loading></Loading> :
        images?.length === 0 ? <div className="text-center text-2xl font-bold"></div> :

        <section id="work" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 lg:mb-16">
          <p className="text-accent text-sm tracking-widest uppercase mb-3">
            Obras seleccionadas
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-foreground">
            Mi trabajo
          </h2>
        </div>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredImages.map((artwork, index) => (
            <div
              key={index}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative aspect-4/5 overflow-hidden bg-secondary">
                <Image
                  src={artwork.url}
                  alt={artwork.key}
                  fill
                  className={cn(
                    "object-cover transition-transform duration-500",
                    hoveredIndex === index && "scale-105"
                  )}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div 
                  className={cn(
                    "absolute inset-0 bg-background/60 flex items-end p-6 transition-opacity duration-300",
                    hoveredIndex === index ? "opacity-100" : "opacity-0"
                  )}
                >
                </div>
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

        // <div id="gallery" className="mx-6 md:mx-20 animate-fade-in-up delay-300 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10">
        //     {filteredImages?.map((image,index) => (
        //         <Dialog.Root key={index}>
        //             <Dialog.Trigger >
        //                 <Image 
        //                     key={index}
        //                     height={295}
        //                     width={419}
        //                     quality={75}
        //                     unoptimized={true}
        //                     src={image.url}
        //                     alt={image.key}
        //                     className="relative object-cover w-full h-auto cursor-zoom-in"
        //                 />
        //             </Dialog.Trigger>
        //             <Dialog.Portal>
        //                 <Dialog.Overlay className="fixed inset-0 bg-black/80 z-2"/>
        //                 <Dialog.Content className="fixed left-1/2 top-1/2 w-full md:w-[90vw] max-w-screen md:max-w-xl max-h-[90vh] -translate-x-1/2 -translate-y-1/2 z-50 p-4 overflow-y-auto focus:outline-none">
        //                     <Dialog.Title className="hidden">{image.key}</Dialog.Title>
        //                     <Dialog.Description />
        //                     <div className="flex items-center justify-center h-full">
        //                         <Image 
        //                             key={index}
        //                             height={800}
        //                             width={1200}
        //                             quality={75}
        //                             unoptimized={true}
        //                             src={image.url}
        //                             alt={image.key}
        //                             className="max-h-[85vh] w-auto object-contain"
        //                         />
        //                     </div>
        //                 </Dialog.Content>
        //             </Dialog.Portal>
        //         </Dialog.Root>


                
        //     ))}
        // </div>
    )
}

export default Gallery;

