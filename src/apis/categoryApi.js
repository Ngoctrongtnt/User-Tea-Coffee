import axiosClient from "../untils/axiosClient";

//get all categories
export const loadCategoryApi = async () =>
    await axiosClient.get("categories")

//create product
export const createCategoryApi = async (category) =>
    await axiosClient.post("categories", category)

//delete category
export const deleteCategoryApi = async (id) =>
    await axiosClient.delete(`categories/${id}`)

//get category with id
export const getCategoryById = async (id) => {
    const { data } = await axiosClient.get(`categories/${id}`)
    return data;
}

//UPDATE category
export const updateCategoryApi = async (id, categoryInfo) =>
    await axiosClient.put(`categories/${id}`, categoryInfo)