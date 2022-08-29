import axiosClient from "../untils/axiosClient";

//get all products
export const loadProductApi = async () =>
    await axiosClient.get("products")

//create product
export const createProductApi = async (product) =>
    await axiosClient.post("products", product)

//delete product
export const deleteProductApi = async (id) =>
    await axiosClient.delete(`products/${id}`)

//get product with id
export const getProductById = async (id) => {
    const { data } = await axiosClient.get(`products/${id}`)
    return data;
}

//UPDATE product
export const updateProductApi = async (id, productInfo) =>
    await axiosClient.put(`products/${id}`, productInfo)