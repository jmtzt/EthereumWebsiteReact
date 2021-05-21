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
    const [priceError, setPriceError] = useState(false)


    const addCoin = () =>{
        
            const author = localStorage.getItem('userEmail')
            let payload = {
                cryptoName: coin,
                price: price,
                author: author
            } 
            console.log(payload)
            Coin.createCrypto(payload)
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
               
              {/*   <CurrencyTextField variant="filled"  error={priceError} currencySymbol="$"  id="filled-error" color="primary"  helperText={priceError} id="standard-basic" label="Price" value={price} onChange={(e)=> setPrice(e.target.value)} /> */}
                <CurrencyTextField
                    label="Price"
                    color="primary"
                   
                    onChange={(e)=> setPrice(e.target.value)}
                    currencySymbol="$"
			
		        />
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
