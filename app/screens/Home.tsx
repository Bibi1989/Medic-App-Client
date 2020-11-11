import { useNavigation } from '@react-navigation/native'
import React, { useCallback, useContext, useEffect, useMemo } from 'react'
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import DoctorCard from '../components/DoctorCard'
import Header from '../components/Header'
import HomeDeptIcon from '../components/HomeDeptIcon'
import SearchBar from '../components/SearchBar'
import { UserContext } from '../context/Providers/UserContext'
import AppointmentButton from '../ui/AppointmentButton'
import ButtonIcon from '../ui/ButtonIcon'
import { Colors } from '../utils/Colors'

const Home = () => {
  const {navigate} = useNavigation()
  const {getUserProfile} = useContext(UserContext)
  const goToSymptoms = useCallback(() => navigate("Symptoms"), [navigate])

  useEffect(() => {
    getUserProfile()
  }, [])
  
  return (
    <View style={styles.container}>
      {/* <StatusBar style="auto" /> */}
      <SafeAreaView>
        <Header />
        <View style={styles.card}>
          <Text style={styles.welcomeText}>Let Find You A Doctor</Text>
          <HomeDeptIcon />
          <SearchBar />
        </View>
        <View style={styles.card}>
          {/* <Text>Let Find You A Doctor</Text> */}
          <AppointmentButton 
            title="Check Your Symptoms" 
            textColor={Colors.white} 
            style={{
              backgroundColor: Colors.medicalBlue
            }}
            onClick={goToSymptoms}
          />
        </View>

        <View style={{}}>
          <Text 
            style={{
              marginBottom: 10, 
              textDecorationLine: 'underline', 
              color: Colors.medicalBlue,
              textAlign: 'right'
            }} 
            onPress={() => navigate("Doctors")}
          >See Doctors</Text>
          <DoctorCard />
        </View>
      </SafeAreaView>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  card: {
    padding: 20,
    backgroundColor: Colors.medicalBackground1,
    borderRadius: 20,
    marginBottom: 15
  },
  container: {
    flex: 1,
    backgroundColor: Colors.medicalBackground,
    paddingHorizontal: 15
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  welcomeText: {
    fontSize: 40,
    lineHeight: 50,
    color: '#222222',
    fontWeight: "bold"
  },
})
