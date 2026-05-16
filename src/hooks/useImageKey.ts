"use client"

import { useState, useEffect } from "react";
import { toast } from "sonner";
import { ImageData } from "@/common/types/imageData";
import { axiosClient } from "@/libs/axiosClient";
import { API_ENDPOINTS } from "@/common/apiConstants";


const useImageKey = (key: string) => {
    const [ imageByKey, setImageByKey ] = useState<ImageData | null>(null);
    const [ isLoading, setIsLoading ] = useState<boolean>(false);

    useEffect(() => {
        const getImages = async () => {
            try{
                setIsLoading(true);
                const response = await axiosClient.get<ImageData>(API_ENDPOINTS.GET_IMAGE_BY_KEY(key));

                if(response.status !== 200) {
                    toast.error("Failed to fetch images");
                    return;
                }

                setImageByKey(response.data);
                
            } catch (error) {
                toast.error("Failed to fetch images", {
                    description: error instanceof Error ? error.message : "Unknown error"
                });
            } finally {
                setIsLoading(false);
            }
        };

        getImages();
    }, [key])

    return { imageByKey, isLoading };
}

export default useImageKey;