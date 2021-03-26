import React, { useState } from "react";
import styles from './styles.module.css';
import Button from '@material-ui/core/Button';
import { TextField } from "@material-ui/core";
import EthLoginPage from "../../static/Figures/eth-login-page.png"
import axios from 'axios';



const api = axios.create({
  baseURL: 'https://reqres.in/api'
});



function Login() {

  const [username, setUsername] = useState()
  const [password, setPassword] = useState()

  const loginMethod = async () =>{
    console.log("username", username)
    await api.post('/login', {
      email: username,
      password: password
    }).then(function (response) {
      console.log(response);
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
              <Button variant="contained" color="secondary" onClick={loginMethod}>
                Login
              </Button>
            </div>

        </div>
    </div>
  );
}

export default Login