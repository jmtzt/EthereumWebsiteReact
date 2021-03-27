import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import PriceTable from "../PriceTable/PriceTable";
import axios from "axios";
import "./styles.css";

function Search() {
  const [cryptoNames, setCryptoNames] = useState([]);
  const [crypto, setCrypto] = useState(null);
  const [coinPrices, setCoinPrices] = useState(null);

  useEffect(() => {
    const getCryptoNames = async () => {
      const response = await axios.get(
        "https://api.coingecko.com/api/v3/coins/list?include_platform=false"
      );
      // Removendo variacoes das cryptos que nao comecam com Ethereum
      setCryptoNames(
        response.data.map((c) => {
          return {
            name: c.symbol.toUpperCase() + " " + c.name,
            id: c.id,
          };
        })
        // .filter((c) => c.name.split(" ")[1].startsWith("Ethereum"))
      );
    };
    getCryptoNames();
  }, []);

  const getCryptoPrices = async () => {
    if (crypto) {
      let cryptoId = cryptoNames.filter((c) => c.name === crypto)[0].id;
      const priceResponse = await axios.get(
        "https:api.coingecko.com/api/v3/simple/price?ids=" +
          cryptoId +
          "&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true"
      );
      setCoinPrices(priceResponse.data);
    } else {
      console.log("crypto undefined");
    }
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
              <Button
                variant="contained"
                className="search-button"
                onClick={getCryptoPrices}
              >
                Search
              </Button>
            </Grid>
          </Grid>
          {
            coinPrices && (
              <PriceTable prices={Object.entries(coinPrices)[0][1]} />
            )
            // Object.entries(coinPrices).map((p) => {
            //   return Object.keys(p[1]).map((key, price) => {
            //     return (
            //       <>
            //         <p key={key}>
            //           <span>{key}</span>
            //           <br />
            //           <span>{p[1][key]}</span>
            //         </p>
            //       </>
            //     );
            //   });
            // })
          }
        </>
      )}
    </div>
  );
}

export default Search;
