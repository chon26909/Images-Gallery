import axios from "axios";
import { ENDPOINTS } from "./api";

export const getGalleryList = async () => {

    const offset = 5;
    const limit = 20;

    try {
        const { data } = await axios.get(ENDPOINTS.GET_GALLERY, { params: { offset, limit} });

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