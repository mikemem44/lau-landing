"use client"

import { useState, useEffect } from "react";
import { toast } from "sonner";
import { ImageData } from "@/common/types/ImageData";
import { axiosClient } from "@/libs/axiosClient";
import { API_ENDPOINTS } from "@/common/apiConstants";

const useImages = () => {
    const [ images, setImages ] = useState<ImageData[]>([]);
    const [ isLoading, setIsLoading ] = useState<boolean>(false);

    useEffect(() => {
        const getImages = async () => {
            try{
                setIsLoading(true);
                const response = await axiosClient.get<ImageData[]>(API_ENDPOINTS.GET_IMAGES);

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