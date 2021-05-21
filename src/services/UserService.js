//import api from './api'
import axios from 'axios'
const AUTHORIZER_URL = "auth"

const api = axios.create({
  baseUrl: 'http://localhost:8000/'
});
class User{ 

    static async newUser(username, password){
        //const token = localStorage.getItem('token')
        const url = 'http://localhost:8000/' + AUTHORIZER_URL + '/signup'
        console.log(url)
        
        return await api.post(url, {
            email:username,
            password: password,
            type: "normal",
          })
          .then(response =>{
              return response
          })
          .catch(error =>{
            return error
          })
    }

    static async login(username, password){
      const url = 'http://localhost:8000/' + AUTHORIZER_URL + '/login'
      
      await this.getUser(username)
      console.log("Voltei para o login")
      return await api.post(url, {
          email: username,
          password: password
        })
        .then( (response) => {
           
            localStorage.setItem('token',response.data.token)
        })
        .catch(error=>{
          console.log("err", error)
          throw error
        })
    }

    static async getUser(username){
      const url = 'http://localhost:8000/' + AUTHORIZER_URL + '/getUser'
      console.log("username", username)
      return await api.post(url, {
        email: username,
      })
      .then( (response) => {
          console.log("response:", response)
          localStorage.setItem('userType',response.data.type)
          return
      })
      .catch(error=>{
        console.log("err", error)
        throw error
      })
    }
}

export default User