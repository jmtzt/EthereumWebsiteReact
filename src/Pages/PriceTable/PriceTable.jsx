import React from "react";
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

  var cryptoName = Object.keys(prices.name)[0];
  var cryptoPrices = Object.entries(prices)[0][1];
  var keysCryptoPrices = Object.keys(cryptoPrices);

  return (
    <>
      <h1>Current price for {prices.name}</h1>
      <TableContainer component={Paper}>
        <Table aria-label="price table">
          <TableHead>
            <TableRow>
              <TableCell>Currency</TableCell>
              <TableCell align="right">Value</TableCell>
              <TableCell align="right">Creator</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell key={"USD"} component="th" scope="row">
                USD
              </TableCell>
              {
                console.log("Crypto",prices )
              /* keysCryptoPrices.map((key, value) => (
                <>
                  <TableCell key={key} align="right">
                    {key === "usd_24h_change"
                      ? parseFloat(cryptoPrices[key]).toFixed(2) + "%"
                      : formatter.format(cryptoPrices[key])}
                  </TableCell>
                </>
              )) */}
                <TableCell key={"value"} align="right">
                  {prices.price}
                </TableCell>

                <TableCell key={"author"} align="right">
                  {prices.author}
                </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default PriceTable;
