import { CREATE_DOCTOR, CREATE_PATIENT, ERROR, GET_DOCTORS, GET_PATIENT, LOADING, SIGNIN_ERROR, SIGNUP_ERROR, SIGN_IN_DOCTOR, SIGN_IN_PATIENT } from "../Types/UserTypes";

type ActionType = {
  payload: any;
  type: string;
}

export const userReducer = (state: any, action: ActionType) => {
  switch (action.type) {
    case CREATE_DOCTOR:
      return {
        ...state,
        create_doctor: action.payload
      }
    case CREATE_PATIENT:
      return {
        ...state,
        create_patient: action.payload
      }
    case SIGN_IN_DOCTOR:
      return {
        ...state,
        sign_in_doctor: action.payload
      }
    case SIGN_IN_PATIENT:
      return {
        ...state,
        sign_in_patient: action.payload
      }
    case GET_DOCTORS:
      return {
        ...state,
        doctors: action.payload
      }
    case GET_PATIENT:
      return {
        ...state,
        patient: action.payload
      }
    case LOADING:
      return {
        ...state,
        loading: action.payload
      }
    case ERROR:
      return {
        ...state,
        error: action.payload
      }
    case SIGNIN_ERROR:
      return {
        ...state,
        signin_error: action.payload
      }
    case SIGNUP_ERROR:
      return {
        ...state,
        signup_error: action.payload
      }
  
    default:
      return state;
  }
}