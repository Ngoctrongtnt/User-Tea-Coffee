import axiosClient from "../untils/axiosClient";

//get all Order
export const loadOrderApi = async () =>
    await axiosClient.get("orders")

//create Order
export const createOrderApi = async (order) =>
    await axiosClient.post("orders", order)

//delete Order
export const deleteOrderApi = async (id) =>
    await axiosClient.delete(`orders/${id}`)

//get order with id
export const getOrderById = async (id) => {
    const { data } = await axiosClient.get(`orders/${id}`)
    return data;
}

//UPDATE Order
export const updateOrderApi = async (id, orderInfo) =>
    await axiosClient.put(`orders/${id}`, orderInfo)