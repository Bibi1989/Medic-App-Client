import AsyncStorage from '@react-native-community/async-storage'
import Axios from 'axios'
import _ from 'lodash'
import React, {createContext, useReducer, useState} from 'react'

import { userReducer } from '../Reducers/UserReducer'
import { CREATE_PATIENT, ERROR, GET_PATIENT, LOADING, SIGNIN_ERROR, SIGNUP_ERROR, SIGN_IN_PATIENT } from '../Types/UserTypes'

type UserTypeContext = {
  doctorSignUp: (user: any) => void,
  patientSignUp: (user: any, navigate: any) => void,
  getUserProfile: () => void,
  doctorSignIn: (user: any) => void,
  patientSignIn: (user: any, navigate: any) => void,
  isAuth: () => void,
  logoutUser: (navigate: any) => void,
  patientProfile: any,
  doctorProfile: any,
  patient: any,
  loading: boolean,
  error: any,
  signin_error: any
  signup_error: any
}

export const UserContext = createContext<UserTypeContext>({
  doctorSignUp: (user: any) => {},
  patientSignUp: (user: any, navigate: any) => {},
  getUserProfile: () => {},
  doctorSignIn: (user: any) => {},
  patientSignIn: (user: any, navigate: any) => {},
  isAuth: () => {},
  logoutUser: (navigate: any) => {},
  patientProfile: null,
  patient: null,
  doctorProfile: null,
  loading: false,
  error: null,
  signup_error: null,
  signin_error: null,
})

type StateType = {
  create_doctor: any,
  create_patient: any,
  sign_in_doctor: any,
  sign_in_patient: any,
  doctors: any,
  patient: any,
  loading: boolean,
  error: any,
  signin_error: any,
  signup_error: any,
}
const initialState: StateType = {
  create_doctor: null,
  create_patient: null,
  sign_in_doctor: null,
  sign_in_patient: null,
  doctors: [],
  patient: null,
  loading: false,
  error: null,
  signup_error: null,
  signin_error: null,
}

export const UserProvider = ({children}: any) => {
  const [states, setState] = useState(false)
  const [state, dispatch] = useReducer(userReducer ,initialState)

  const patientSignUp = async (user: any, navigate: any) => {
    try {
      dispatch({type: LOADING, payload: true})
      const response = await Axios.post('/patient/signup', user)

      await AsyncStorage.setItem("mediToken", JSON.stringify(response?.data?.data?.token))
      await AsyncStorage.setItem("mediUser", JSON.stringify(response?.data?.data))
      
      dispatch({type: CREATE_PATIENT, payload: response.data})
      dispatch({type: LOADING, payload: false})
      navigate('HomeTab')
    } catch (error) {
      console.log(error?.response?.data?.error)
      dispatch({type: SIGNUP_ERROR, payload: error?.response?.data?.error})
      dispatch({type: LOADING, payload: false})
    }
  }
  const patientSignIn = async (user: any, navigate: any) => {
    try {
      dispatch({type: LOADING, payload: true})
      const response = await Axios.post('/patient/signin', user)

      console.log(response.data)

      await AsyncStorage.setItem("mediToken", JSON.stringify(response?.data?.data?.token))
      await AsyncStorage.setItem("mediUser", JSON.stringify(response?.data?.data))

      navigate('HomeTab')

      dispatch({type: LOADING, payload: false})

      dispatch({type: SIGN_IN_PATIENT, payload: response.data})
    } catch (error) {
      console.log(error?.response?.data?.error)
      dispatch({type: SIGNIN_ERROR, payload: error?.response?.data?.error})
      dispatch({type: LOADING, payload: false})
    }
  }
  
  const isAuth = async () => {
    const mediToken = await AsyncStorage.getItem("mediToken")
    // console.log(_.isEmpty(mediToken))
    return _.isEmpty(mediToken) ? false : true
  }

  const logoutUser = async (navigate: any) => {
    await AsyncStorage.removeItem("mediToken")
    await AsyncStorage.removeItem("mediUser")
    navigate('SignIn')
  }

  const getUserProfile = async () => {
    try {
      dispatch({type: LOADING, payload: true})
      let patient: any = await AsyncStorage.getItem("mediUser")
      let patientId = JSON.parse(patient)._id
      const response = await Axios.get(`/patients/${patientId}`)
      console.log(response?.data?.data, patientId)
      dispatch({type: GET_PATIENT, payload: response.data?.data})
      dispatch({type: LOADING, payload: false})
    } catch (error) {
      console.log(error?.response?.data?.error)
      dispatch({type: ERROR, payload: error?.response?.data?.error})
      dispatch({type: LOADING, payload: false})
    }
  }

  const values = {
    doctorSignUp: (user: any) => {},
    patientSignUp,
    getUserProfile,
    doctorSignIn: (user: any) => {},
    patientSignIn,
    isAuth,
    logoutUser,
    patientProfile: states,
    patient: state.patient,
    doctorProfile: null,
    loading: state.loading,
    error: state.error,
    signin_error: state.signin_error,
    signup_error: state.signup_error,
  }
  return (
    <UserContext.Provider value={values}>
      {children}
    </UserContext.Provider>
  )
}