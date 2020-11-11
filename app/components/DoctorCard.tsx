import { useNavigation } from '@react-navigation/native'
import React, { useCallback } from 'react'
import { Alert, StyleSheet, Text, View } from 'react-native'
import AppointmentButton from '../ui/AppointmentButton'
import ProfileImage from '../ui/ProfileImage'
import { Colors } from '../utils/Colors'
import { doctors } from '../utils/doctors'

const DoctorCard = () => {
  const {navigate} = useNavigation()

  const favoriteDoctor = doctors[0]

  const goToDoctorDetail = useCallback(() => navigate('Doctor', favoriteDoctor), [navigate])
  return (
    <View style={styles.container}>
      <View style={styles.doctorProfile}>
        <View>
          <Text style={{color: "#222222", fontWeight: 'bold', fontSize: 18}}>Dr. {favoriteDoctor?.name}</Text>
          <Text style={{color: Colors.gray888}}>{favoriteDoctor.deptName}</Text>
        </View>
        <ProfileImage imageSrc={favoriteDoctor.name} />
      </View>
      <View style={styles.doctorContent}>
        <Text style={{color: Colors.medicalPink}}>Available</Text>
        <AppointmentButton title="Appointment" onClick={goToDoctorDetail} style={{width: 130, backgroundColor: Colors.medicalBackground}} />
      </View>
    </View>
  )
}

export default DoctorCard

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    padding: 15,
    borderRadius: 20
  },
  doctorContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20
  },
  doctorProfile: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
})
