import { useNavigation } from '@react-navigation/native'
import _ from 'lodash'
import React, { useCallback, useContext, useState } from 'react'
import { StyleSheet, Text, View, Keyboard } from 'react-native'
import { UserContext } from '../context/Providers/UserContext'
import AppointmentButton from '../ui/AppointmentButton'
import UserInput from '../ui/UserInput'
import { Colors } from '../utils/Colors'

const userInputStyle = {
  marginBottom: 20
}

const SignIn = () => {

  const {navigate} = useNavigation()

  const {patientSignIn, signin_error} = useContext(UserContext)

  const goToSignUp = useCallback(() => navigate('SignUp'), [navigate])

  const [values, setValues] = useState({
    email: "",
    password: "",
  })

  const isError = _.isEmpty(signin_error)

  return (
    <View style={styles.container}>
      <Text 
        style={{
          fontSize: 30,
          fontWeight: 'bold',
          color: Colors.medicalPink,
          marginBottom: 30
        }}
      >Sign In</Text>

      <View style={{alignItems: 'center'}}>
        <Text style={{
          color: 'orangered'
        }}>{!isError && signin_error}</Text>
      </View>
        <UserInput placeholder="Email Address" keyboardType={"email-address"} secureTextEntry={false} onChange={(text: string) => setValues({...values, email: text})} style={userInputStyle} />
        <UserInput placeholder="Password" secureTextEntry={true} onChange={(text: string) => setValues({...values, password: text})} style={userInputStyle} />

      <AppointmentButton 
        title="Sign In" 
        textColor={Colors.white}
        style={{
          backgroundColor: Colors.medicalPink,
          height: 40,
          marginTop: 20
        }}
        onClick={() => {
          patientSignIn(values, navigate)
          Keyboard.dismiss()
        }}
      />

      <View style={styles.account}>
        <Text>You dont have an account? </Text>
        <Text style={{color: Colors.medicalPink, marginLeft: 5}} onPress={goToSignUp}>Create Your Profile</Text>
      </View>
    </View>
  )
}

export default SignIn

const styles = StyleSheet.create({
  account: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: Colors.white
  },
})
