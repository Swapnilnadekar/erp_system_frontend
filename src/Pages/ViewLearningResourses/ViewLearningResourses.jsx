import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
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
import { getAllResources } from "../../Redux/Actions/viewResources";
import DownloadIcon from '@mui/icons-material/Download';
import PreviewIcon from '@mui/icons-material/Preview';

const ViewLearningResourses = () => {

  const resourcesList = useSelector((state) => state.resourceList.resources_list);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllResources());
  }, []);

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  return (
    <>
    <Header />
      <div>
        

        <div className="resources_container">
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
                <TableBody>
                  {resourcesList.map((adm) => (
                    <StyledTableRow key={adm.uploaded_by}>
                      <StyledTableCell component="th" scope="row" align="centre">
                        {adm.uploaded_by}
                      </StyledTableCell>
                      <StyledTableCell align="centre">{adm.subject}</StyledTableCell>
                      <StyledTableCell align="centre">{adm.time}</StyledTableCell>
                      <StyledTableCell align="centre">
                        {adm.file_name}
                      </StyledTableCell>
                      <StyledTableCell align="centre">
                        <DownloadIcon />
                        <PreviewIcon />
                      </StyledTableCell>
                     </StyledTableRow>
                       ))}
                    </TableBody>
               </Table>
            </TableContainer>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewLearningResourses;
