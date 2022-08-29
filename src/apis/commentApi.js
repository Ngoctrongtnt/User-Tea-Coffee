import axiosClient from "../untils/axiosClient";

//get all Order
export const loadCommentApi = async () =>
    await axiosClient.get("commentUsers")

//create Order
export const createCommentApi = async (comment) =>
    await axiosClient.post("commentUsers", comment)

// //delete Order
export const deleteCommentApi = async (id) =>
    await axiosClient.delete(`commentUsers/${id}`)

