import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../Components/Header/Header";
import {
  getAllAdmin,
  deleteAdmin,
  updateAdmin
} from "../../Redux/Actions/admin";
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
import CheckIcon from "@mui/icons-material/Check";
import Button from "@mui/material/Button";
import "./GetAllAdmin.css";

const GetAllAdmin = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [adm_id, setAdm_id] = useState(0);
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [contactError, setContactError] = useState(false);

  // const adminList = useSelector((state) => state.adminList.admin_list);
  const adminsList = useSelector((state) => state.adminList.admins_list);
  // const adminsList = ["swapnil", "ankit"];
  // const studentsList = useSelector((state) => state.studentList.students_list);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllAdmin());
  }, []);

  const updateData = () => {
    const updatedAdmin = {
      adm_id,
      name,
      email,
      contact,
      username,
      password,
    };

    dispatch(updateAdmin(updatedAdmin));
    handleClose();
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
              <h3>Edit Admin Details</h3>
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

  const renderENTCList = () => {
    return (
      <div className="comp_admin_details">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="centre">Admin Id</StyledTableCell>
                <StyledTableCell align="centre">Name</StyledTableCell>
                <StyledTableCell align="centre">Email</StyledTableCell>
                <StyledTableCell align="centre">Contact</StyledTableCell>
                <StyledTableCell align="centre"></StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {adminsList.map((adm) =>(
                  <StyledTableRow key={adm.adm_id}>
                    <StyledTableCell component="th" scope="row" align="centre">
                      {adm.adm_id}
                    </StyledTableCell>
                    <StyledTableCell align="centre">{adm.name}</StyledTableCell>
                    <StyledTableCell align="centre">
                      {adm.email}
                    </StyledTableCell>
                    <StyledTableCell align="centre">
                      {adm.contact}
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
                              dispatch(deleteAdmin(adm.adm_id));
                            }
                          }}
                        >
                          <DeleteIcon className="delete_btn" />
                        </IconButton>
                        <IconButton
                          aria-label="edit item"
                          onClick={() => {
                            setAdm_id(adm.adm_id);
                            setUsername(adm.username);
                            setPassword(adm.password);
                            setName(adm.name);
                            setEmail(adm.email);
                            setContact(adm.contact);
                            setEmail(adm.email);
                            setOpen(true);
                          }}
                        >
                          <ModeEditIcon className="edit_btn" />
                        </IconButton>
                      </div>
                    </StyledTableCell>
                  </StyledTableRow>
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
      <div className="all_admin_container">
        <div className="admin_table">
          {renderENTCList()}
        </div>
      </div>
      {modalFunc()}
    </>
  );
};

export default GetAllAdmin;
