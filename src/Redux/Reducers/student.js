import { studentConstants } from "../constants";

const initState = {
    token: "",
    user: {
        name: "",
        email: "",
        branch: "",
        roll_no: "",
        DOB: "",
        contact: "",
        username: "",
    },
    authenticate: false,
    authenticating: false,
    loading: false,
    error: "",
    message: "",
}

export default (state = initState, action) => {
    switch(action.type){
        case studentConstants.STUDENT_LOGIN_REQUEST:
            state = { ...state, authenticating: true, loading: true };
            break;
        
        case studentConstants.STUDENT_LOGIN_SUCCESS:
            state = { ...state, authenticating:false, authenticate: true, loading:false, user :action.payload.user, token: action.payload.token,};
            break;
        
        case studentConstants.STUDENT_LOGIN_FAILURE:
            state = { ...state, authenticating: false, authenticate:false, loading: false, error: action.payload.error,};

        
        // case studentConstants.STUDENT_LOGOUT_REQUEST:
        //     state = { ...state, loading:true, };
        //     break;

        // case studentConstants.STUDENT_LOGOUT_SUCCESS:
        //     state : { ...initState, loading: true,};
        //     break; 
        // case studentConstants.STUDENT_LOGOUT_FAILURE:
        //     state: { ...initState, error: action.payload.error, loading: false,};
    }
    return state;
}