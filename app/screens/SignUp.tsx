import { useNavigation } from '@react-navigation/native'
import React, { useCallback, useContext, useState } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { UserContext } from '../context/Providers/UserContext'
import AppointmentButton from '../ui/AppointmentButton'
import UserInput from '../ui/UserInput'
import { Colors } from '../utils/Colors'

const userInputStyle = {
  marginBottom: 20
}

const SignUp = () => {
  const {navigate} = useNavigation()
  const goToSignIn = useCallback(() => navigate('SignIn'), [navigate])

  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    sex: "",
    age: "",
    address: "",
    password: "",
  })

  const {patientSignUp, patient} = useContext(UserContext)

  const handleInput = (value: string) => {
    // setValues(...va)
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text 
          style={{
            fontSize: 30,
            fontWeight: 'bold',
            color: Colors.medicalPink,
            marginBottom: 30
          }}
        >Sign Up</Text>
        <UserInput placeholder="Name" secureTextEntry={false} onChange={(text: string) => setValues({...values, name: text})} style={userInputStyle} />
        <UserInput placeholder="Email Address" keyboardType={"email-address"} secureTextEntry={false} onChange={(text: string) => setValues({...values, email: text})} style={userInputStyle} />
        <UserInput placeholder="Phone Number" keyboardType={"phone-pad"} secureTextEntry={false} onChange={(text: string) => setValues({...values, phone: text})} style={userInputStyle} />
        <UserInput placeholder="Gender" secureTextEntry={false} onChange={(text: string) => setValues({...values, sex: text})} style={userInputStyle} />
        <UserInput placeholder="Age" keyboardType={"phone-pad"} secureTextEntry={false} onChange={(text: string) => setValues({...values, age: text})} style={userInputStyle} />
        <UserInput placeholder="Address" secureTextEntry={false} onChange={(text: string) => setValues({...values, address: text})} style={userInputStyle} />
        <UserInput placeholder="Password" secureTextEntry={true} onChange={(text: string) => setValues({...values, password: text})} style={userInputStyle} />

        <AppointmentButton 
          title="Create Profile" 
          textColor={Colors.white}
          style={{
            backgroundColor: Colors.medicalPink,
            height: 40,
            marginTop: 20
          }}
          onClick={() => {
            patientSignUp(values, navigate)
            console.log("values == ", values)
          }}
        />

        <View style={styles.account}>
          <Text>You dont have an account? </Text>
          <Text style={{color: Colors.medicalPink, marginLeft: 5}} onPress={goToSignIn}>Log In</Text>
        </View>
      </ScrollView>
    </View>
  )
}

export default SignUp

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
