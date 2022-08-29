import axiosClient from "../untils/axiosClient";


export const getUserAdmin = async () => {
    const { data } = await axiosClient.get('usersAdmin')
    return data;
}

export const getUserUI = async () => {
    const { data } = await axiosClient.get('usersUI')
    return data;
}
