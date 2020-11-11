import React, { useCallback, useContext } from 'react'
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import { Colors } from '../utils/Colors'

import WelcomeSvg from  '../assets/images/welcome.svg'
import AppointmentButton from '../ui/AppointmentButton'
import { useNavigation } from '@react-navigation/native'
import { UserContext } from '../context/Providers/UserContext'

const width = Dimensions.get('window').width

const Welcome = () => {

  const {navigate} = useNavigation()
  const goToSignUp = useCallback(() => navigate('SignUp'), [navigate])
  const goToSignIn = useCallback(() => navigate('SignIn'), [navigate])

  const {patientProfile} = useContext(UserContext)

  // console.log("patientProfile == ", patientProfile)

  return (
    <View style={styles.container}>
      <View style={styles.welcomeTexts}>
        <Text style={{
          color: Colors.white,
          fontSize: 25,
          marginBottom: 10
        }}>Welcome To</Text>
        <Text style={{
          color: '#333333',
          fontSize: 30,
          fontWeight: 'bold',
          marginBottom: 10
        }}>Medical App</Text>
        <Text style={{
          color: Colors.white,
          fontSize: 20,
          marginBottom: 20
        }}>Are You Ready?</Text>
      </View>
      <View style={styles.image}>
        <WelcomeSvg width={"90%"} height={300} />
      </View>
      <View style={{alignItems: 'center', width: width}}>
        <AppointmentButton 
          title="Are You A Patient?" 
          textColor={Colors.white}
          style={{
            backgroundColor: Colors.medicalViolet,
            maxWidth: 250,
            minWidth: 200,
            height: 40
          }}
          onClick={goToSignUp}
        />
        <AppointmentButton 
          title="Are You A Doctor?" 
          textColor={Colors.white}
          style={{
            backgroundColor: Colors.medicalBlue,
            maxWidth: 250,
            minWidth: 200,
            height: 40,
            marginTop: 15
          }}
          onClick={goToSignUp}
        />
        <View style={styles.account}>
          <Text>Already have an Account? </Text>
          <Text style={{color: Colors.white, marginLeft: 5}} onPress={goToSignIn}>Log In</Text>
        </View>
      </View>
    </View>
  )
}

export default Welcome

const styles = StyleSheet.create({
  account: {
    flexDirection: 'row',
    marginTop: 10
  },
  container: {
    flex: 1,
    backgroundColor: Colors.medicalPink,
    paddingVertical: 20,
    justifyContent: 'space-around'
  },
  image: {
    alignItems: 'center',
  },
  welcomeTexts: {
    alignItems: 'center',
  },
})
