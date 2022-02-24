import axios from "axios"

const baseUrl = 'https://jsonplaceholder.typicode.com/users'



export const getUsersData = async () => {

    let allUsers = [];

    await axios.get(baseUrl)
        .then((response) => {
            allUsers = response.data
        })
        .catch((error) => {
            console.log(error)
        })
    return {
        type: 'USERS_DATA',
        payload: allUsers
    }
}

export const getUserDetails = async (id) => {

    let singleUser = [];

    await axios.get(`${baseUrl}/${id}`)
        .then((response) => {
            singleUser = response.data
        })
        .catch((error) => {
            console.log(error)
        })
    return {
        type: 'SINGLE_USER_DATA',
        payload: singleUser
    }
}


export const stateClearance = () => {
    return {
        type: 'ClEAR_DERAILS_STATE',
        payload: {}
    }
}