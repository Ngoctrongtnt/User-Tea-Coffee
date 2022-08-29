import axiosClient from "../untils/axiosClient";

//get all banner
export const loadBannerApi = async () =>
    await axiosClient.get("banners")

//create banner
export const createBannerApi = async (banner) =>
    await axiosClient.post("banners", banner)

//delete banner
export const deleteBannerApi = async (bannerId) =>
    await axiosClient.delete(`banners/${bannerId}`)

//get task with id
export const getBannerById = async (bannerId) => {
    const { data } = await axiosClient.get(`banners/${bannerId}`)
    return data;
}

//UPDATE banner
export const updateBannerApi = async (bannerId, bannerInfo) =>
    await axiosClient.put(`banners/${bannerId}`, bannerInfo)