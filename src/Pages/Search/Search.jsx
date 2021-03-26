import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import axios from "axios";
import "./styles.css";

function Search() {
  const [cryptoNames, setCryptoNames] = useState([]);

  useEffect(() => {
    const getCryptoNames = async () => {
      const response = await axios.get(
        "https://api.coingecko.com/api/v3/coins/list?include_platform=false"
      );
      console.log("Making get request");
      setCryptoNames(
        response.data
          .map((crypto) => crypto.name + " - " + crypto.symbol.toUpperCase())
          .filter(
            (name) =>
              !name.startsWith("0.5X") &&
              !name.startsWith("1X") &&
              !name.startsWith("2X") &&
              !name.startsWith("3X")
          )
      );
    };
    getCryptoNames();
  }, []);

  const getCryptoPrices = () => {
    console.log("Clicked");
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
                options={cryptoNames}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Cryptocurrency Prices"
                    margin="normal"
                    variant="outlined"
                  />
                )}
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
        </>
      )}
    </div>
  );
}

export default Search;
