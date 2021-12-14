import React, { useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Header from "../Components/Header";
import { useSelector } from "react-redux";
import "./Home.css";

const Home = () => {
  const student = useSelector((state) => state.student);
  const teacher = useSelector((state) => state.teacher);
  useEffect(() => {
    console.log(student);
    console.log(teacher);
  }, [student, teacher]);
  return (
    <div className="home_container">
      <Header />
      <div className="card">
        <Card className="cards">
          <CardActionArea>
            <CardMedia
              component="img"
              height="300px"
              width="40px"
              image="https://www.zica.org/images/icon-student.jpg"
              alt="green iguana"
            />
            <CardContent className="cardc">
              <Typography gutterBottom variant="h5" component="div">
                Student Details
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Student Name: {teacher.user.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Student Roll No: {teacher.user.roll_no}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Contact No: {teacher.user.contact}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Date Of Birth:
              </Typography>

              <CardContent className="cardc2">
                <Typography variant="body2" color="text.secondary">
                  Student Class:
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Student Branch:
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Student Email:
                </Typography>
              </CardContent>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </div>
  );
};

export default Home;
