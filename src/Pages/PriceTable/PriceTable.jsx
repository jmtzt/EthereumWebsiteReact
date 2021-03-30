import React, { useState, useEffect } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

function PriceTable({ prices }) {
  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  var cryptoName = Object.keys(prices)[0];
  var cryptoPrices = Object.entries(prices)[0][1];
  var keysCryptoPrices = Object.keys(cryptoPrices);

  return (
    <>
      <h1>Current price for {cryptoName}</h1>
      <TableContainer component={Paper}>
        <Table aria-label="price table">
          <TableHead>
            <TableRow>
              <TableCell>Currency</TableCell>
              <TableCell align="right">Value</TableCell>
              <TableCell align="right">Market Cap</TableCell>
              <TableCell align="right">24h Volume</TableCell>
              <TableCell align="right">24h Change </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell key={"USD"} component="th" scope="row">
                USD
              </TableCell>
              {keysCryptoPrices.map((key, value) => (
                <>
                  <TableCell key={key} align="right">
                    {key === "usd_24h_change"
                      ? parseFloat(cryptoPrices[key]).toFixed(2) + "%"
                      : formatter.format(cryptoPrices[key])}
                  </TableCell>
                </>
              ))}
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default PriceTable;
