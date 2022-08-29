import axiosClient from "../untils/axiosClient";

//get all usersAdmin
export const loadUsersAdminApi = async () =>
    await axiosClient.get("usersAdmin")

//create user Admin
export const createUserAdminApi = async (user) =>
    await axiosClient.post("usersAdmin", user)

//delete user Admin
export const deleteUserAdminApi = async (userId) =>
    await axiosClient.delete(`usersAdmin/${userId}`)

//get task with id
export const getUserAdminById = async (userId) => {
    const { data } = await axiosClient.get(`usersAdmin/${userId}`)
    return data;
}

//UPDATE user Admin
export const updateUserAdminApi = async (userId, userInfo) =>
    await axiosClient.put(`usersAdmin/${userId}`, userInfo)

//get data userAdmin by name
export const getUserByEmail = async (email) => {
    const { data } = await axiosClient.get('usersAdmin', {
        params: { email: email }
    });
    return data[0];
}