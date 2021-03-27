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

  return (
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
            <TableCell component="th" scope="row">
              USD
            </TableCell>
            {Object.keys(prices).map((key, value) => (
              <>
                <TableCell align="right">
                  {formatter.format(prices[key])}
                </TableCell>
              </>
            ))}
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default PriceTable;
