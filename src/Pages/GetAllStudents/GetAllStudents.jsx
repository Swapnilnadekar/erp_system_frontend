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
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
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
  const [_id, setStd_id] = useState(0);
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [contactError, setContactError] = useState(false);
  const [branchError, setBranchError] = useState(false);
  const [roll_noError, setRoll_noError] = useState(false);
  const [selectBranch, setSelectBranch] = useState("COMP");
  const [search, setSearch] = useState("");
  const [searchList, setSearchList] = useState([]);

  const studentsList = useSelector((state) => state.studentList.students_list);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllStudents());
  }, []);

  const searchStudent = (e) => {
    setSearch(e.target.value);

    if (search !== "") {
      const new_list = studentsList.filter((current) => {
        const tbc =
          current.name.toLowerCase() +
          " " +
          current.email.toLowerCase() +
          " " +
          current.contact.toLowerCase();
        const tbcw = search.toLowerCase();
        return tbc.includes(tbcw);
      });
      setSearchList(new_list);
    }
  };

  const updateData = () => {
    const updatedStudent = {
      _id,
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

  const handleClose = () => {
    setOpen(false);
    window.location.reload(false);
  };

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
      <div className="list">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">Student Id</StyledTableCell>
                <StyledTableCell align="center">Name</StyledTableCell>
                <StyledTableCell align="center">Email</StyledTableCell>
                <StyledTableCell align="center">Contact</StyledTableCell>
                <StyledTableCell align="center">Roll&nbsp;no</StyledTableCell>
                <StyledTableCell align="center">Branch</StyledTableCell>
                <StyledTableCell align="center">Date of birth</StyledTableCell>
                <StyledTableCell align="center"></StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {studentsList.map((std) =>
                std.branch === "COMP" ? (
                  <StyledTableRow key={std._id}>
                    <StyledTableCell component="th" scope="row" align="center">
                      {std._id}
                    </StyledTableCell>
                    <StyledTableCell align="center">{std.name}</StyledTableCell>
                    <StyledTableCell align="center">
                      {std.email}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {std.contact}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {std.roll_no}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {std.branch}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {std.dob.toString().substring(0, 10)}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      <div className="delete_update_btn_container">
                        <IconButton
                          aria-label="delete item"
                          onClick={() => {
                            if (
                              window.confirm(
                                "Are you sure you want to delete ?"
                              )
                            ) {
                              dispatch(deleteStudents(std._id));
                            }
                          }}
                        >
                          <DeleteIcon className="delete_btn" />
                        </IconButton>
                        <IconButton
                          aria-label="edit item"
                          onClick={() => {
                            setStd_id(std._id);
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
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  };

  const renderITList = () => {
    return (
      <div className="list">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">Student Id</StyledTableCell>
                <StyledTableCell align="center">Name</StyledTableCell>
                <StyledTableCell align="center">Email</StyledTableCell>
                <StyledTableCell align="center">Contact</StyledTableCell>
                <StyledTableCell align="center">Roll&nbsp;no</StyledTableCell>
                <StyledTableCell align="center">Branch</StyledTableCell>
                <StyledTableCell align="center">Date of birth</StyledTableCell>
                <StyledTableCell align="center"></StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {studentsList.map((std) =>
                std.branch === "IT" ? (
                  <StyledTableRow key={std._id}>
                    <StyledTableCell component="th" scope="row" align="center">
                      {std._id}
                    </StyledTableCell>
                    <StyledTableCell align="center">{std.name}</StyledTableCell>
                    <StyledTableCell align="center">
                      {std.email}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {std.contact}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {std.roll_no}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {std.branch}
                    </StyledTableCell>
                    <StyledTableCell align="center">{std.dob}</StyledTableCell>
                    <StyledTableCell align="center">
                      <div className="delete_update_btn_container">
                        <IconButton
                          aria-label="delete item"
                          onClick={() => {
                            if (
                              window.confirm(
                                "Are you sure you want to delete ?"
                              )
                            ) {
                              dispatch(deleteStudents(std._id));
                            }
                          }}
                        >
                          <DeleteIcon className="delete_btn" />
                        </IconButton>
                        <IconButton
                          aria-label="edit item"
                          onClick={() => {
                            setStd_id(std._id);
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
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  };

  const renderENTCList = () => {
    return (
      <div className="list">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">Student Id</StyledTableCell>
                <StyledTableCell align="center">Name</StyledTableCell>
                <StyledTableCell align="center">Email</StyledTableCell>
                <StyledTableCell align="center">Contact</StyledTableCell>
                <StyledTableCell align="center">Roll&nbsp;no</StyledTableCell>
                <StyledTableCell align="center">Branch</StyledTableCell>
                <StyledTableCell align="center">Date of birth</StyledTableCell>
                <StyledTableCell align="center"></StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {studentsList.map((std) =>
                std.branch === "ENTC" ? (
                  <StyledTableRow key={std._id}>
                    <StyledTableCell component="th" scope="row" align="center">
                      {std._id}
                    </StyledTableCell>
                    <StyledTableCell align="center">{std.name}</StyledTableCell>
                    <StyledTableCell align="center">
                      {std.email}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {std.contact}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {std.roll_no}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {std.branch}
                    </StyledTableCell>
                    <StyledTableCell align="center">{std.dob}</StyledTableCell>
                    <StyledTableCell align="center">
                      <div className="delete_update_btn_container">
                        <IconButton
                          aria-label="delete item"
                          onClick={() => {
                            if (
                              window.confirm(
                                "Are you sure you want to delete ?"
                              )
                            ) {
                              dispatch(deleteStudents(std._id));
                            }
                          }}
                        >
                          <DeleteIcon className="delete_btn" />
                        </IconButton>
                        <IconButton
                          aria-label="edit item"
                          onClick={() => {
                            setStd_id(std._id);
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
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  };

  const renderSearchList = () => {
    return (
      <div className="searchlist">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">Student Id</StyledTableCell>
                <StyledTableCell align="center">Name</StyledTableCell>
                <StyledTableCell align="center">Email</StyledTableCell>
                <StyledTableCell align="center">Contact</StyledTableCell>
                <StyledTableCell align="center">Roll&nbsp;no</StyledTableCell>
                <StyledTableCell align="center">Branch</StyledTableCell>
                <StyledTableCell align="center">Date of birth</StyledTableCell>
                <StyledTableCell align="center"></StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {searchList.map((std) => (
                <StyledTableRow key={std._id}>
                  <StyledTableCell component="th" scope="row" align="center">
                    {std._id}
                  </StyledTableCell>
                  <StyledTableCell align="center">{std.name}</StyledTableCell>
                  <StyledTableCell align="center">{std.email}</StyledTableCell>
                  <StyledTableCell align="center">
                    {std.contact}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {std.roll_no}
                  </StyledTableCell>
                  <StyledTableCell align="center">{std.branch}</StyledTableCell>
                  <StyledTableCell align="center">{std.dob}</StyledTableCell>
                  <StyledTableCell align="center">
                    <div className="delete_update_btn_container">
                      <IconButton
                        aria-label="delete item"
                        onClick={() => {
                          if (
                            window.confirm("Are you sure you want to delete ?")
                          ) {
                            dispatch(deleteStudents(std._id));
                          }
                        }}
                      >
                        <DeleteIcon className="delete_btn" />
                      </IconButton>
                      <IconButton
                        aria-label="edit item"
                        onClick={() => {
                          setStd_id(std._id);
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
              ))}
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
        <div className="branch_search_container">
          {search < 1 ? (
            <div className="branch_select">
              <InputLabel id="demo-simple-select-label">Branch</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={selectBranch}
                label="Branch"
                onChange={(e) => setSelectBranch(e.target.value)}
              >
                <MenuItem value="COMP" style={{ color: "black" }}>
                  COMP
                </MenuItem>
                <MenuItem value="IT" style={{ color: "black" }}>
                  IT
                </MenuItem>
                <MenuItem value="ENTC" style={{ color: "black" }}>
                  ENTC
                </MenuItem>
              </Select>
            </div>
          ) : (
            <div className="branch_select"></div>
          )}
        </div>
        <div className="search_container">
          <Input
            id="input-with-icon-adornment"
            value={search}
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            }
            placeholder="Search ..."
            onChange={searchStudent}
          />
        </div>
        <div className="student_table">
          {search < 1 ? <></> : renderSearchList()}
          {selectBranch === "COMP" && search < 1 ? renderCompList() : <></>}
          {selectBranch === "IT" && search < 1 ? renderITList() : <></>}
          {selectBranch === "ENTC" && search < 1 ? renderENTCList() : <></>}
        </div>
      </div>
      {modalFunc()}
    </>
  );
};

export default GetAllStudents;
