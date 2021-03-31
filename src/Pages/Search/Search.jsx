import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import Button from "@material-ui/core/Button";
import PriceTable from "../PriceTable/PriceTable";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./styles.css";

function Search() {
  const [cryptoNames, setCryptoNames] = useState([]);
  const [crypto, setCrypto] = useState(null);
  const [coinPrices, setCoinPrices] = useState(null);
  const noCryptoNotify = () => toast.error("Invalid Cryptocurrency");
  const noCryptoResponse = () =>
    toast.error("Failed to get cryptocurrency price");
  const noCryptoList = () => toast.error("Failed to get cryptocurrencies");
  const [onLoading, setOnloading] = useState(false);

  useEffect(() => {
    const getCryptoNames = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/coins/list?include_platform=false"
        );
        setCryptoNames(
          response.data.map((c) => {
            return {
              name: c.symbol.toUpperCase() + " " + c.name,
              id: c.id,
            };
          })
          //.filter((c) => c.name.split(" ")[1].startsWith("Ethereum"))
        );
      } catch (err) {
        noCryptoList();
      }
    };
    getCryptoNames();
  }, []);

  const getCryptoPrices = async () => {
    setOnloading(true);
    if (crypto) {
      let cryptoId = cryptoNames.filter((c) => c.name === crypto)[0].id;
      try {
        const priceResponse = await axios.get(
          "https://api.coingecko.com/api/v3/simple/price?ids=" +
            cryptoId +
            "&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true"
        );
        setCoinPrices(priceResponse.data);
      } catch (err) {
        noCryptoResponse();
      }
    } else {
      noCryptoNotify();
      setCoinPrices(null);
    }
    setCrypto(null);
    setOnloading(false);
  };

  return (
    <div>
      <h1>Search for Cryptocurrency Prices</h1>
      {cryptoNames && (
        <>
          <Grid container spacing={3} alignItems={"center"}>
            <Grid item xs={10}>
              <Autocomplete
                id="free-solo-demo"
                freeSolo
                options={cryptoNames.map((c) => c.name)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Cryptocurrency Prices"
                    margin="normal"
                    variant="outlined"
                  />
                )}
                value={crypto}
                onChange={(event, newValue) => setCrypto(newValue)}
              />
            </Grid>
            <Grid item xs={2}>
              {onLoading ? (
                <CircularProgress />
              ) : (
                <Button
                  variant="contained"
                  className="search-button"
                  onClick={getCryptoPrices}
                >
                  Search
                </Button>
              )}
            </Grid>
          </Grid>
          {coinPrices && <PriceTable prices={coinPrices} />}
          <ToastContainer
            position="top-left"
            autoClose={4000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </>
      )}
    </div>
  );
}

export default Search;
