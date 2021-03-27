import React, { useEffect, useState } from "react";
import styles from './styles.module.css';
import Button from '@material-ui/core/Button';
import { TextField, CircularProgress } from "@material-ui/core";
import EthLoginPage from "../../static/Figures/eth-login-page.png"
import axios from 'axios';
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import {useHistory} from 'react-router-dom';
import {useStickyState} from '../../services/stickyState'


const api = axios.create({
  baseURL: 'https://reqres.in/api'
});

function Login() {

  let history = useHistory()
  const notify = () => toast("Wrong Username/Password !");

  const [localStorage, setLocalStorage] = useStickyState(0, "")
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  const [onLoading, setOnloading] = useState(false)

  useEffect(()=>{
    const loggedUser = localStorage

    if (loggedUser == "QpwL5tke4Pnpja7X4") {
      history.push("/home")
    }
  }, [])

  const loginMethod = async () =>{
    setOnloading(true)

    await api.post('/login', {
      email: username,
      password: password
    })
    .then(function (response) {
      if(response){
        
        setLocalStorage(response.data.token)
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
                <TextField id="standard-basic" label="Username" value={username} onChange={(e)=> setUsername(e.target.value)} />
                <div className={styles.password}>
                  <TextField id="standard-basic" label="Password" value={password} onChange={(e)=> setPassword(e.target.value)}   style={{width:'100%'}}/>
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