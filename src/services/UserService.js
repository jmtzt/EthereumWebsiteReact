
const AUTHORIZER_URL = "auth"
import api from './api_heroku'

class User{ 

    static async newUser(username, password){
        //const token = localStorage.getItem('token')
        const url = AUTHORIZER_URL + '/signup'

        await api.post(url, {
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
      const url = AUTHORIZER_URL + '/login'
      await api.post(url, {
          email: username,
          password: password
        })
        .then(function (response) {
            //loginSucceed()
            localStorage.setItem('token',response.data.token)
            //history.push("/home")
            //setOnloading(false)
            
        })
        .catch(error=>{
          //notify()
          //setOnloading(false)
          console.log("err", error)
          throw error
        })
    }
}

export default User