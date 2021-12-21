import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../Components/Header/Header";
import {
  getAllStudents,
  deleteStudents,
  updateStudent,
} from "../../Redux/Actions/student";
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
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import CheckIcon from "@mui/icons-material/Check";
import Button from "@mui/material/Button";
import "./GetAllStudents.css";

const GetAllStudents = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [branch, setBranch] = useState("");
  const [roll_no, setRoll_no] = useState("");
  const [dob, setDob] = useState(new Date());
  const [contact, setContact] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [std_id, setStd_id] = useState(0);
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [contactError, setContactError] = useState(false);
  const [branchError, setBranchError] = useState(false);
  const [roll_noError, setRoll_noError] = useState(false);

  const studentsList = useSelector((state) => state.studentList.students_list);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllStudents());
  }, []);

  const updateData = () => {
    const updatedStudent = {
      std_id,
      name,
      email,
      branch,
      roll_no,
      dob,
      contact,
      username,
      password,
    };

    dispatch(updateStudent(updatedStudent));
    handleClose();
  };

  const setDate = (e) => {
    var date = new Date(e),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    var date = [date.getFullYear(), mnth, day].join("-");
    setDob(date);
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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

  const modalFunc = () => {
    return (
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box className="box_style">
            <div className="edit_form">
              <h3>Edit Student Details</h3>
              <TextField
                id="register_name"
                color="info"
                label="Name"
                variant="outlined"
                error={nameError}
                onChange={(e) => setName(e.target.value)}
                value={name}
                style={{ width: "65%", margin: "4px" }}
              />
              <div
                className="email_contact_container"
                style={{ width: "65%", margin: "4px" }}
              >
                <TextField
                  value={email}
                  id="register_email"
                  color="info"
                  label="Email ID"
                  variant="outlined"
                  error={emailError}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                  value={contact}
                  id="register_contact"
                  color="info"
                  label="Mobile No."
                  variant="outlined"
                  error={contactError}
                  onChange={(e) => setContact(e.target.value)}
                />
              </div>
              <div
                className="class_details_container"
                style={{ width: "65%", margin: "4px" }}
              >
                <TextField
                  value={branch}
                  id="register_branch"
                  color="info"
                  label="Branch"
                  variant="outlined"
                  error={branchError}
                  onChange={(e) => setBranch(e.target.value)}
                />
                <TextField
                  value={roll_no}
                  id="register_roll"
                  color="info"
                  label="Roll No."
                  variant="outlined"
                  error={roll_noError}
                  onChange={(e) => setRoll_no(e.target.value)}
                />
              </div>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DesktopDatePicker
                  label="Date of birth"
                  inputFormat="MM/dd/yyyy"
                  value={dob}
                  onChange={setDate}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </div>
            <Button
              variant="outlined"
              startIcon={<CheckIcon />}
              onClick={updateData}
            >
              Update
            </Button>
          </Box>
        </Modal>
      </div>
    );
  };

  const renderCompList = () => {
    return (
      <div className="comp_student_details">
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
                <StyledTableCell align="centre">Date of birth</StyledTableCell>
                <StyledTableCell align="centre"></StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {studentsList.map((std) =>
                std.branch === "COMP" ? (
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
                    <StyledTableCell align="centre">{std.dob}</StyledTableCell>
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
                        <IconButton
                          aria-label="edit item"
                          onClick={() => {
                            setStd_id(std.std_id);
                            setUsername(std.username);
                            setPassword(std.password);
                            setName(std.name);
                            setEmail(std.email);
                            setContact(std.contact);
                            setBranch(std.branch);
                            setDate(std.dob);
                            setEmail(std.email);
                            setRoll_no(std.roll_no);
                            setOpen(true);
                          }}
                        >
                          <ModeEditIcon className="edit_btn" />
                        </IconButton>
                      </div>
                    </StyledTableCell>
                  </StyledTableRow>
                ) : (
                  <></>
                )
              )}
              {
                // Comment code
              }
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  };

  const renderITList = () => {
    return (
      <div className="comp_student_details">
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
                <StyledTableCell align="centre">Date of birth</StyledTableCell>
                <StyledTableCell align="centre"></StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {studentsList.map((std) =>
                std.branch === "IT" ? (
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
                    <StyledTableCell align="centre">{std.dob}</StyledTableCell>
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
                        <IconButton
                          aria-label="edit item"
                          onClick={() => {
                            setStd_id(std.std_id);
                            setUsername(std.username);
                            setPassword(std.password);
                            setName(std.name);
                            setEmail(std.email);
                            setContact(std.contact);
                            setBranch(std.branch);
                            setDate(std.dob);
                            setEmail(std.email);
                            setRoll_no(std.roll_no);
                            setOpen(true);
                          }}
                        >
                          <ModeEditIcon className="edit_btn" />
                        </IconButton>
                      </div>
                    </StyledTableCell>
                  </StyledTableRow>
                ) : (
                  <></>
                )
              )}
              {
                // Comment code
              }
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  };

  const renderENTCList = () => {
    return (
      <div className="comp_student_details">
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
                <StyledTableCell align="centre">Date of birth</StyledTableCell>
                <StyledTableCell align="centre"></StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {studentsList.map((std) =>
                std.branch === "ENTC" ? (
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
                    <StyledTableCell align="centre">{std.dob}</StyledTableCell>
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
                        <IconButton
                          aria-label="edit item"
                          onClick={() => {
                            setStd_id(std.std_id);
                            setUsername(std.username);
                            setPassword(std.password);
                            setName(std.name);
                            setEmail(std.email);
                            setContact(std.contact);
                            setBranch(std.branch);
                            setDate(std.dob);
                            setEmail(std.email);
                            setRoll_no(std.roll_no);
                            setOpen(true);
                          }}
                        >
                          <ModeEditIcon className="edit_btn" />
                        </IconButton>
                      </div>
                    </StyledTableCell>
                  </StyledTableRow>
                ) : (
                  <></>
                )
              )}
              {
                // Comment code
              }
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  };

  return (
    <>
      <Header />
      <div className="all_students_container">
        <div className="student_table">
          {renderCompList()}
          {renderITList()}
          {renderENTCList()}
        </div>
      </div>
      {modalFunc()}
    </>
  );
};

export default GetAllStudents;
