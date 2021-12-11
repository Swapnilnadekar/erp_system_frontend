import { studentConstants } from "../constants";
import axios from "../axios";

export const studentLogin = (user) =>{
    return async (dispatch) => {
        dispatch({ type: studentConstants.STUDENT_LOGIN_REQUEST});
        const res = await axios.post(`/student/signin`, {...user});
        if (res.status == 201) {
            const {token, user } = res.data;
            localStorage.setItem("token", token);
            localStorage.setItem("user", JSON.stringify(user));

            dispatch({
                type: studentConstants.STUDENT_LOGIN_SUCCESS,
                payload: {
                    token, 
                    user,
                },
            });
        } else {
            dispatch({
                type: studentConstants.STUDENT_LOGIN_FAILURE,
                payload: {
                    error: "error",
                },
            });
         }
    };
};

export const isUserLoggedIn = () =>{
    return async (dispatch) =>{
        const token = localStorage.getItem("token");
        
        if(token) {
            const user = JSON.parse(localStorage.getItem("user"));
            dispatch({
                type:studentConstants.STUDENT_LOGIN_SUCCESS,
                payload: {token, user},
            });
          }  else{
                dispatch({
                    type:studentConstants.STUDENT_LOGIN_FAILURE,
                    payload: {error: "Failed to Login" },

                });
            }
        };
    };


export const studentLogout = () => {
    return async (dispatch) => {
      dispatch({ type: studentConstants.STUDENT_LOGOUT_REQUEST });
  
      const res = await axios.post(`/student/signout`);
  
      if (res.status == 201) {
        localStorage.clear();
        dispatch({
          type: studentConstants.STUDENT_LOGOUT_SUCCESS,
        });
      } else {
        dispatch({
          type: studentConstants.STUDENT_LOGOUT_FAILURE,
          payload: { error: "error" },
        });
      }
    };
  };