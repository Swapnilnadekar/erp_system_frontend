import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../Components/Header";
import { getAllStudents, deleteStudents } from "../../Redux/Actions/student";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import IconButton from "@mui/material/IconButton";
import "./GetAllStudents.css";

const GetAllStudents = () => {
  const studentsList = useSelector((state) => state.studentList.students_list);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllStudents());
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
      <div className="all_students_container">
        <div className="student_table">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell align="centre">Student Id</StyledTableCell>
                  <StyledTableCell align="centre">Name</StyledTableCell>
                  <StyledTableCell align="centre">Email</StyledTableCell>
                  <StyledTableCell align="centre">Contact</StyledTableCell>
                  <StyledTableCell align="centre">Roll&nbsp;no</StyledTableCell>
                  <StyledTableCell align="centre">Branch</StyledTableCell>
                  <StyledTableCell align="centre">
                    Date of birth
                  </StyledTableCell>
                  <StyledTableCell align="centre"></StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {studentsList.map((std) => (
                  <StyledTableRow key={std.std_id}>
                    <StyledTableCell component="th" scope="row" align="centre">
                      {std.std_id}
                    </StyledTableCell>
                    <StyledTableCell align="centre">{std.name}</StyledTableCell>
                    <StyledTableCell align="centre">
                      {std.email}
                    </StyledTableCell>
                    <StyledTableCell align="centre">
                      {std.contact}
                    </StyledTableCell>
                    <StyledTableCell align="centre">
                      {std.roll_no}
                    </StyledTableCell>
                    <StyledTableCell align="centre">
                      {std.branch}
                    </StyledTableCell>
                    <StyledTableCell align="centre">
                      {std.dob.toString().substring(0, 10)}
                    </StyledTableCell>
                    <StyledTableCell align="centre">
                      <div className="delete_update_btn_container">
                        <IconButton
                          aria-label="delete item"
                          onClick={() => {
                            if (
                              window.confirm(
                                "Are you sure you want to delete ?"
                              )
                            ) {
                              dispatch(deleteStudents(std.std_id));
                            }
                          }}
                        >
                          <DeleteIcon className="delete_btn" />
                        </IconButton>
                        <IconButton aria-label="edit item">
                          <ModeEditIcon className="edit_btn" />
                        </IconButton>
                      </div>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </>
  );
};

export default GetAllStudents;
