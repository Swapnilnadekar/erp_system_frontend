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
  const [uploaded_by, setUploaded_by] = useState("");

  const [file_path, setFile_path] = useState("");

  const [file_nameError, setFile_nameError] = useState(false);
  const [subjectError, setSubjectError] = useState(false);

  const teacher = useSelector((state) => state.teacher);
  const hod = useSelector((state) => state.hod);
  const dispatch = useDispatch();

  const uploadResource = async (e) => {
    e.preventDefault();
    teacher.user.name || hod.user.name;

    if (document.getElementById("file_name").value.length == 0) {
      setFile_nameError(true);
      alert("Enter file name");
    } else if (document.getElementById("subject").value.length == 0) {
      setSubjectError(true);
      alert("Enter Subject");
    }
    const currentdate = new Date();
    const time =
      currentdate.getDate() +
      "/" +
      (currentdate.getMonth() + 1) +
      "/" +
      currentdate.getFullYear() +
      " " +
      currentdate.getHours() +
      ":" +
      currentdate.getMinutes() +
      ":" +
      currentdate.getSeconds();

    const newResources = new FormData();
    newResources.append("file_name", file_name);
    newResources.append("uploaded_by", uploaded_by);
    newResources.append("subject", subject);
    newResources.append("time", time);
    newResources.append("file_path", file_path);

    dispatch(uploadResources(newResources));
  };

  return (
    <>
      <div>
        {/* <Header /> */}

        <div className="upload_container">
          <h3>Upload Learning Resources</h3>
          <form className="upload_resources" onSubmit={uploadResource}>
            <TextField
              id="file_name"
              color="info"
              label="File Name"
              variant="outlined"
              onChange={(e) => setFile_name(e.target.value)}
              value={file_name}
              style={{ width: "65%", margin: "4px" }}
              error={file_nameError}
            />
            <div
              className="upload_container"
              style={{ width: "65%", margin: "4px" }}
            >
              <TextField
                value={uploaded_by}
                id="uploaded_by"
                color="info"
                label="Uploaded_by"
                variant="outlined"
                // error={subError}
                onChange={(e) => setUploaded_by(e.target.value)}
              />

              <TextField
                value={subject}
                id="subject"
                color="info"
                label="Subject"
                variant="outlined"
                error={subjectError}
                onChange={(e) => setSubject(e.target.value)}
              />

              <input
                type="file"
                name="file_path"
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
