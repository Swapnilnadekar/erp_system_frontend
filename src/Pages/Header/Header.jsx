import React, { useEffect } from 'react';
import { studentLogout } from '../../Redux/Actions/student';


const Header = () => {
      const dispatch = useDispatch();

      const userLogout =(e) =>{
        e.preventDefault();
      }
      if(true)
        dispatch(userLogout(user));
      }
  


  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-black bg-black">
        <div className="container-fluid">
        <img height="40px" width="50px" src="https://cdn.imgbin.com/25/14/17/imgbin-cartoon-student-school-child-student-wGcXwrtj3vVWCWFgUZbLJEbYi.jpg" className="img-thumbnail" alt="..." />
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/home">Home</a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="/">Link</a>
              </li> */}
            </ul>
            <form className="d-flex">
              <button className="btn btn-outline-success mx-3" type="submit" >Contact</button>
              <button className="btn btn-outline-success mx-3" type="submit">Edit Profile</button>
              
            </form>
            <button className="btn btn-outline-success mx-3" type="submit" onClick={userLogout}>LogOut</button>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header

