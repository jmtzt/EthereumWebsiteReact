import api from './api'

const AUTHORIZER_URL = "auth"

class User{ 

    static async newUser(username, password, type){
        const url =  AUTHORIZER_URL + '/signup'

        return await api.post(url, {
            email:username,
            password: password,
            type: type,
          })
          .then(response =>{
              return response
          })
          .catch(error =>{
            return error
          })
    }

    static async login(username, password){
      const url = AUTHORIZER_URL + '/login'
      
      await this.getUser(username)

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
      const url = AUTHORIZER_URL + '/getUser'

      return await api.post(url, {
        email: username,
      })
      .then( (response) => {
          console.log("response:", response)
          localStorage.setItem('userType',response.data.type)
          localStorage.setItem('userEmail', response.data.email)
          return
      })
      .catch(error=>{
        console.log("err", error)
        throw error
      })
    }
}

export default User