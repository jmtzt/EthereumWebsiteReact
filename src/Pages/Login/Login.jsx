import React from "react";
import styles from './styles.module.css';
import Button from '@material-ui/core/Button';
import { TextField } from "@material-ui/core";
import EthLoginPage from "../../static/Figures/eth-login-page.png"

function Login() {
  return (
    <div className={styles.container}>
        <div className={styles.content}> 
            <div className={styles.logoHeader}>
                <img src={EthLoginPage} alt="Ethereum login page"  className={styles.logo}></img>
            </div>

            <div className={styles.inputs}>
                <TextField id="standard-basic" label="Login"/>
                <div className={styles.password}>
                  <TextField id="standard-basic" label="Senha" style={{width:'100%'}}/>
                </div>
            </div>

            <div className={styles.button}>
              <Button variant="contained" color="secondary">
                Login
              </Button>
            </div>
            
        </div>
    </div>
  );
}

export default Login;
