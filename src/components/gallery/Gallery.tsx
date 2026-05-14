"use client"

import Image from 'next/image';
import useImages from "@/hooks/useImages";
import Loading from "../ui/Loading";

const Gallery = () => {
    const { images, isLoading } = useImages();

    console.log(images);

    return (
        isLoading ? <Loading></Loading> :
        images?.length === 0 ? <div className="text-center text-2xl font-bold"></div> :

        <div id="gallery" className="animate-fade-in delay-300 grid grid-cols-1 md:grid-cols-3 gap-5">
            {images?.map((image,index) => (
                <Image 
                    key={index}
                    height={295}
                    width={419}
                    src={image.url}
                    alt={image.key}
                    className="relative object-cover w-full h-auto"
                />
            ))}
        </div>
    )
}

export default Gallery;