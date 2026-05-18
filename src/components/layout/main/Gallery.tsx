"use client"

import Image from 'next/image';
import useImages from "@/hooks/useImages";
import Loading from "../../ui/Loading";
import * as Dialog from "@radix-ui/react-dialog";


const Gallery = () => {
    const { images, isLoading } = useImages();

    const filteredImages = images.filter((image) => image.key !== "about-me.jpeg");

    return (
        isLoading ? <Loading></Loading> :
        images?.length === 0 ? <div className="text-center text-2xl font-bold"></div> :

        <div id="gallery" className="animate-fade-in-up delay-300 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10">
            {filteredImages?.map((image,index) => (
                <Dialog.Root key={index}>
                    <Dialog.Trigger>
                        <Image 
                            key={index}
                            height={295}
                            width={419}
                            quality={75}
                            unoptimized={true}
                            src={image.url}
                            alt={image.key}
                            className="relative object-cover w-full h-auto cursor-zoom-in"
                        />
                    </Dialog.Trigger>
                    <Dialog.Portal>
                        <Dialog.Overlay className="fixed inset-0 bg-black/80 z-2"/>
                        <Dialog.Content className="fixed left-1/2 top-1/2 w-full md:w-[90vw] max-w-screen md:max-w-xl max-h-[90vh] -translate-x-1/2 -translate-y-1/2 z-50 p-4 overflow-y-auto focus:outline-none">
                            <Dialog.Title className="hidden">{image.key}</Dialog.Title>
                            <Dialog.Description />
                            <div className="flex items-center justify-center h-full">
                                <Image 
                                    key={index}
                                    height={800}
                                    width={1200}
                                    quality={75}
                                    unoptimized={true}
                                    src={image.url}
                                    alt={image.key}
                                    className="max-h-[85vh] w-auto object-contain"
                                />
                            </div>
                        </Dialog.Content>
                    </Dialog.Portal>
                </Dialog.Root>


                
            ))}
        </div>
    )
}

export default Gallery;

