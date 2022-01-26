import React from "react";

import Header from "../Components/Header/Header";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./ViewLearningResourses.css";

const ViewLearningResourses = () => {
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  return (
    <>
      <div>
        {/* <Header /> */}

        <div className="resource_container">
          <h3>View Learning Resources</h3>

          <div className="view_resources">
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell align="centre">
                      Uploaded By
                    </StyledTableCell>
                    <StyledTableCell align="centre">Subject</StyledTableCell>
                    <StyledTableCell align="centre">
                      Uploaded Date and Time
                    </StyledTableCell>
                    <StyledTableCell align="centre">
                      Uploaded File
                    </StyledTableCell>
                  </TableRow>
                </TableHead>
              </Table>
            </TableContainer>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewLearningResourses;
