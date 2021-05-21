import api from './api'

class Coin{
    static async getAllCrypto(){
        const token = localStorage.getItem('token')
        
        await api.get("listings/", {
            headers:{
                'Authorization': `Bearer ${token}`
            }
        })
        .then(response => {
            return response
        })
        .catch(error =>{
            throw error
        })
    }

    static async createCrypto(payload){
        const token = localStorage.getItem('token')
        const url = AUTHORIZER_URL + '/login'
        await api.post("listings/",payload, {
            headers:{
                'Authorization': `Bearer ${token}`
            }
        })
        .then(response => {
            return response.listing
        })
        .catch(error =>{
            throw error
        })
    }

    static async getCryptoByID(id){
        const token = localStorage.getItem('token')
        const url = `listings/${id}`
        await api.get(url, {
            headers:{
                'Authorization': `Bearer ${token}`
            }
        })
        .then(response => {
            return response
        })
        .catch(error =>{
            return error
        })
    }

    static async patchCrypto(payload){
        const token = localStorage.getItem('token')
        const url = `listings/${id}`

        await api.patch(url, payload,{
            headers:{
                'Authorization': `Bearer ${token}`
            }
        })
        .then(response => {
            return response
        })
        .catch(error =>{
            return error
        })
    }

    static async deleteListings(id){
        const token = localStorage.getItem('token')
        const url = `listings/${id}`

        await api.delete(url, {
            headers:{
                'Authorization': `Bearer ${token}`
            }
        })
        .then(response => {
            return response
        })
        .catch(error =>{
            return error
        })
    }
}

export default Coin