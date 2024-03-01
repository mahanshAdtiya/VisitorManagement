import React from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  IconButton,
} from "@mui/material";

import { Delete as DeleteIcon, Edit as EditIcon } from "@mui/icons-material";
import { Header } from "../components";
import { ordersData, ordersGrid } from "../data/dummy";

const AllMeetings = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Meetings" title="All Meetings" />
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              {ordersGrid.map((column, index) => (
                <TableCell key={index}>{column.headerText}</TableCell>
              ))}
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {ordersData.map((row, rowIndex) => (
              <TableRow key={rowIndex}>
                {ordersGrid.map((column, colIndex) => (
                  <TableCell key={colIndex}>{row[column.field]}</TableCell>
                ))}
                <TableCell>
                  <IconButton aria-label="edit">
                    <EditIcon />
                  </IconButton>
                  <IconButton aria-label="delete">
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default AllMeetings;
