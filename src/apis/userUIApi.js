import axiosClient from "../untils/axiosClient";

//get all usersUI
export const loadUsersUIApi = async () =>
    await axiosClient.get("usersUI")

//get task with id
export const getUserUIById = async (id) => {
    const { data } = await axiosClient.get(`usersUI/${id}`)
    return data;
}

//create user Admin
export const createUserUIApi = async (user) =>
    await axiosClient.post("usersUI", user)

//delete user Admin
export const deleteUserUIApi = async (id) =>
    await axiosClient.delete(`usersUI/${id}`)

//UPDATE user Admin
export const updateUserUIApi = async (id, userInfo) =>
    await axiosClient.put(`usersUI/${id}`, userInfo)