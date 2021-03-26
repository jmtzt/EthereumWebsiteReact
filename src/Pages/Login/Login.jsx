import React from "react";
import styles from './styles.module.css';
import Button from '@material-ui/core/Button';
import { TextField } from "@material-ui/core";

function Login() {
  return (
    <div className={styles.container}>
        <div className={styles.content}> 
            <div className={styles.item1}>
                logo
                
            </div>

            <div className={styles.inputs}>
                <TextField id="standard-basic" label="Login"/>
                <div className={styles.password}>
                  <TextField id="standard-basic" label="Senha" style={{width:'100%'}}/>
                </div>
            </div>

            <div className={styles.button}>
              <Button variant="contained" color="primary">
                Login
              </Button>
            </div>
        </div>
    </div>
  );
}

export default Login;
