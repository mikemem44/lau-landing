"use client"

import { useState, useEffect } from "react";
import { toast } from "sonner";
import { ImageData } from "@/types/imageData";
import axios from "axios";

const WORKER_URL = process.env.NEXT_PUBLIC_WORKER_URL;

const useImages = () => {
    const [ images, setImages ] = useState<ImageData[]>([]);
    const [ isLoading, setIsLoading ] = useState<boolean>(false);

    useEffect(() => {
        const getImages = async () => {
            try{
                setIsLoading(true);
                const response = await axios.get<ImageData[]>(`${WORKER_URL}api/images`);

                if(response.status !== 200) {
                    toast.error("Failed to fetch images");
                    return;
                }

                setImages(response.data);
            } catch (error) {
                toast.error("Failed to fetch images", {
                    description: error instanceof Error ? error.message : "Unknown error"
                });
            } finally {
                setIsLoading(false);
            }
        };

        getImages();
    }, [])

    return { images, isLoading };
}

export default useImages;