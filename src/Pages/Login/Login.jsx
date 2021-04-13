import React, { useEffect, useState } from "react";
import styles from './styles.module.css';
import Button from '@material-ui/core/Button';
import EthLoginPage from "../../static/Figures/eth-login-page.png"
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import {useHistory} from 'react-router-dom';
import {ToastContainer, toast} from 'react-toastify'
import { TextField, CircularProgress } from "@material-ui/core";
import classes from "./styles.module.css";


const api = axios.create({
  baseURL: 'https://reqres.in/api'
});

function Login() {

  let history = useHistory()
  const notify = () => toast("Wrong Username/Password !");
  const loginSucceed = () => toast("Login Succeed!");
  const notifyEmailError = () => toast("Invalid Email Address!")

  const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i

  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  const [emailError, setEmailError] = useState()
  const [errorMessage, setErrorMessage] = useState('')
  const [onLoading, setOnloading] = useState(false)

  useEffect(()=>{
    const loggedUser = localStorage.getItem('token')

    if (loggedUser == "QpwL5tke4Pnpja7X4") {
      history.push("/home")
    }
  }, [])

  const loginMethod = async () =>{
    setOnloading(true)

    if(!emailRegex.test(username)){
      setEmailError(true)
      notifyEmailError()
      setErrorMessage('Invalid Email Address!')
      setOnloading(false)
      return
    }
   

    await api.post('/login', {
      email: username,
      password: password
    })
    .then(function (response) {
      if(response){
        loginSucceed()
        localStorage.setItem('token',response.data.token)
        
        history.push("/home")
        setOnloading(false)
      }
    })
    .catch(error=>{
      notify()
      setOnloading(false)
      console.log("err", error)
    })
  }
  

  return (
    <div className={styles.container}>
        <div className={styles.content}> 
            <div className={styles.logoHeader}>
                <img src={EthLoginPage} alt="Ethereum login page"  className={styles.logo}></img>
            </div>

            <div className={styles.inputs}>
                <TextField error={emailError}   helperText={errorMessage} id="standard-basic" label="Username" value={username} onChange={(e)=> setUsername(e.target.value)} />
                <div className={styles.password}>
                  <TextField id="standard-basic" label="Password" type="password" value={password} onChange={(e)=> setPassword(e.target.value)}   style={{width:'100%'}}/>
                </div>
            </div>

            <div className={styles.button}>
              {
                onLoading ? <CircularProgress /> :  
                  <Button variant="contained" color="secondary" onClick={loginMethod}>
                    Login
                  </Button>
              }
            </div>

            <ToastContainer
              position="bottom-right"
            />

        </div>
    </div>
  );
}

export default Login