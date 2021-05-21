import React, {  useState } from "react";
import styles from './styles.module.css';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import EthLoginPage from "../../static/Figures/eth-login-page.png"
import {useHistory} from 'react-router-dom';
import {ToastContainer, toast} from 'react-toastify'
import { TextField, CircularProgress } from "@material-ui/core";
import 'react-toastify/dist/ReactToastify.css';
import User from "../../services/UserService"


function Signup() {

  let history = useHistory()
  const notifyEmailError = () => toast("Invalid Email Address!")

  const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i

  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  
  const [emailError, setEmailError] = useState()
  const [errorMessage, setErrorMessage] = useState('')
  const [onLoading, setOnloading] = useState(false)

  const userTypes = [
    {
      label:'Normal',
      value:'1'
    }, 
    {
      label:'Admin',
      value:'2'
    }
  ]
  const [userType, setUserType] = useState('Normal')
  const signUp = async () =>{
    setOnloading(true)
    if(!emailRegex.test(username)){
      setEmailError(true)
      notifyEmailError()
      setErrorMessage('Invalid Email Address!')
      setOnloading(false)
      return
    }
    
    try{
      const response = User.newUser()
      toast(response)
      setOnloading(false)
    }catch (error){
      toast(error)
      setOnloading(false)
    }

  }

  const goBack = () =>{
    history.push("/")
  }

  const handleChange = (event) =>{
    setUserType(event.target.value)
  }

  return (
    <div className={styles.container}>
        <div className={styles.content}> 
            <div className={styles.logoHeader}>
                <img src={EthLoginPage} alt="Ethereum login page"  className={styles.logo}></img>
            </div>

            <div className={styles.inputs}>
                <TextField error={emailError}   helperText={errorMessage} id="standard-basic" label="New Username" value={username} onChange={(e)=> setUsername(e.target.value)} />
                <div className={styles.password}>
                  <TextField id="standard-basic" label="New Password" type="password" value={password} onChange={(e)=> setPassword(e.target.value)}   style={{width:'100%'}}/>
                </div>

                <div className={styles.password}>
                  <TextField id="standard-basic" select label="User Type" helperText="Please select your user type" value={userType} onChange={handleChange}   style={{width:'100%'}}>
                    {userTypes.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </div>
            </div>

            <div className={styles.button}>
              {
                onLoading ? <CircularProgress /> :  
                <>
                  <Button variant="contained" color="secondary" onClick={signUp}>
                     Create
                  </Button>
                  <div className={styles.signup} > 
                    <Button variant="contained" color="secondary" onClick={goBack}>
                      Go back
                    </Button>
                  </div>
                </>
              }
  
            </div>

            <ToastContainer
              position="bottom-right"
            />

        </div>
    </div>
  );
}

export default Signup