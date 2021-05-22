import React, { useState, useEffect } from "react";
import Button from '@material-ui/core/Button';
import { TextField, CircularProgress } from "@material-ui/core";
import {ToastContainer, toast} from 'react-toastify'
import './styles.css';
import Coin from "../../services/CoinService"
import CurrencyTextField from '@unicef/material-ui-currency-textfield'


function CreateCoin() {
    const [coin, setCoin] = useState()
    const [price, setPrice] = useState()
    const [coinError, setCoinError] = useState(false)
    const [fileState, setFileState] = useState(null)

    const handleFile = (e)=>{
        let file = e.target.files[0]
        console.log(file)
        setFileState(file)
    }

    const addCoin = () =>{
            const author = localStorage.getItem('userEmail')
            let formData = new FormData()

            formData.append('cryptoName', coin)
            formData.append('price', price)
            formData.append('author', author)
            if(fileState){
                formData.append('coinImage', fileState)
            }
        
           
            Coin.createCrypto(formData)
                .then(response =>{
                    toast("New crypto added!")
                    return
                })
                .catch(error =>{
                    toast("An error Ocurred...")
                })
    }

    return (
        <div className="container">
            <h1>Add new Cryptocurrencies</h1>
            <div className="inputs">
                <TextField error={coinError}  id="filled-error" color="primary" helperText={coinError} id="standard-basic" label="Coin Name" value={coin} onChange={(e)=> setCoin(e.target.value)} />
               
                <CurrencyTextField
                    label="Price"
                    color="primary"
                    onChange={(e)=> setPrice(e.target.value)}
                    currencySymbol="$"
		        />

                <label>Select File</label>
                <input type="file" name="file" onChange={(e) => handleFile(e)}></input>
            </div>
           
            <div className="button" > 
                <Button variant="contained" color="primary" onClick={addCoin}>
                    Save
                </Button>
            </div>
        </div>
    );
}

export default CreateCoin;
