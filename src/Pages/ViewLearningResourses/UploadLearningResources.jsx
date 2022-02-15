import React, { useState } from "react";

import Header from "../Components/Header/Header";
import TextField from "@mui/material/TextField";
import "./UploadLearningResources.css";
import { useDispatch, useSelector } from "react-redux";

import Button from "@mui/material/Button";
import { uploadResources } from "../../Redux/Actions/uploadResouces";

const UploadLearningResources = () => {
  const [file_name, setFile_name] = useState("");
  const [subject, setSubject] = useState("");
  const [file_path, setFile_path] = useState("");
  const [file_nameError, setFile_nameError] = useState(false);
  const [subjectError, setSubjectError] = useState(false);

  const teacher = useSelector((state) => state.teacher);
  const hod = useSelector((state) => state.hod);
  const dispatch = useDispatch();

  const uploadResource = async (e) => {
    e.preventDefault();

    let name = "";

    if (teacher.authenticate) name = teacher.user.name;
    else name = hod.user.name;

    if (document.getElementById("file_name").value.length === 0) {
      setFile_nameError(true);
      alert("Enter file name");
    } else if (document.getElementById("subject").value.length === 0) {
      setSubjectError(true);
      alert("Enter Subject");
    }
    const currentdate = new Date();
    const time =
      currentdate.getFullYear() +
      "-" +
      (currentdate.getMonth() + 1) +
      "-" +
      currentdate.getDate() +
      " " +
      currentdate.getHours() +
      ":" +
      currentdate.getMinutes() +
      ":" +
      currentdate.getSeconds();

    const newResources = new FormData();
    newResources.append("file_name", file_name);
    newResources.append("uploaded_by", name);
    newResources.append("subject", subject);
    newResources.append("time", time);
    newResources.append("file_path", file_path);

    dispatch(uploadResources(newResources));
  };

  return (
    <>
      <div>
        <Header />

        <div className="upload_container">
          {/* <h3>Upload Learning Resources</h3> */}
          <form className="upload_resources" onSubmit={uploadResource}>
            <TextField
              id="file_name"
              color="info"
              label="File Name"
              variant="outlined"
              className="file_name"
              onChange={(e) => setFile_name(e.target.value)}
              value={file_name}
              style={{ width: "65%", margin: "4px" }}
              error={file_nameError}
            />
            <div
              className="upload_data"
              style={{ width: "65%", margin: "4px" }}
            >
              <TextField
                value={subject}
                id="subject"
                color="info"
                label="Subject"
                variant="outlined"
                className="subject_name"
                error={subjectError}
                onChange={(e) => setSubject(e.target.value)}
              />

              <input
                type="file"
                name="file_path"
                className="file_path"
                onChange={(e) => setFile_path(e.target.files[0])}
              />

              <Button
                type="submit"
                variant="contained"
                autoCapitalize="0"
                style={{
                  margin: "20px",
                  textTransform: "none",
                  backgroundColor: "Blue",
                  color: "white",
                }}
                color="inherit"
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default UploadLearningResources;
