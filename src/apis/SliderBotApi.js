import axiosClient from "../untils/axiosClient";

//get all slider
export const loadSliderApi = async () =>
    await axiosClient.get("sliders")

//create slider
export const createSliderApi = async (slider) =>
    await axiosClient.post("sliders", slider)

//delete slider
export const deleteSliderApi = async (id) =>
    await axiosClient.delete(`sliders/${id}`)

//get task with id
export const getSliderById = async (id) => {
    const { data } = await axiosClient.get(`sliders/${id}`)
    return data;
}

//UPDATE slider
export const updateSliderApi = async (id, sliderInfo) =>
    await axiosClient.put(`sliders/${id}`, sliderInfo)