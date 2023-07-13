import axios from "axios";
import { ENDPOINTS } from "./api";

interface IGalleryListRequest {
    limit: number;
    offset: number;
}

export const getGalleryList = async (arg: IGalleryListRequest) => {

    try {
        const { data } = await axios.get(ENDPOINTS.GET_GALLERY, { params: arg });

        console.log("data", data)
      
        return data;
    } catch (error) {
        console.log("error",  error);
    }
}

export const getGalleryById = async (id: string) => {

    try {
        const { data } = await axios.get(ENDPOINTS.GET_GALLERY + "/" + id);
      
        return data;
    } catch (error) {
        console.log(error);
    }
}