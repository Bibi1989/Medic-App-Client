import { useNavigation, useRoute } from '@react-navigation/native'
import { Icon } from 'native-base'
import React, { useContext, useEffect, useState } from 'react'
import { Dimensions, Modal, StyleSheet, Text, View } from 'react-native'
import CalendarPicker from 'react-native-calendar-picker'
import { UserContext } from '../context/Providers/UserContext'
import FemaleAvatar from '../SvgIcons/FemaleAvatar'
import MaleAvatar from '../SvgIcons/MaleAvatar'

import AppointmentButton from '../ui/AppointmentButton'
import ButtonIcon from '../ui/ButtonIcon'
import ProfileImage from '../ui/ProfileImage'
import { Colors } from '../utils/Colors'
import { user } from '../utils/data'

const width = Dimensions.get("window").width - 30
const appointmentStyle = {
  width: '100%', 
  backgroundColor: Colors.medicalBlue, 
  marginTop: 20, 
  height: 44, 
  borderRadius: 15
}

const UserProfile = () => {
  const {navigate, goBack} = useNavigation()
  const {patient, getUserProfile} = useContext(UserContext)
  // const patient: any = user

  const [showModal, setShowModal] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [type, setType] = useState("");

  const handleAppointment = () => {
    setShowModal(true)
  }

  const onDateChange = (date: any, type: any) => {
    if(type === 'END_DATE') {
      setEndDate(date.toISOString())
    }else{
      setStartDate(date.toISOString())
    }
    setType(type)
  }
  return (
    <View style={styles.container}>
      <View style={styles.navBar}>
        <ButtonIcon type={"Feather"} name={"arrow-left"} style={{color: Colors.gray777}} onClick={goBack} />
        <Text style={{color: '#555555', textAlign: 'center', width: width - 30, fontWeight: 'bold', fontSize: 25}}>User Profile</Text>
      </View>
      <View style={styles.card}>
        <View style={styles.doctorProfile}>
          <View>
            <Text style={{color: "#222222", fontWeight: 'bold', fontSize: 18}}>Dr. {patient?.name}</Text>
            <View style={{
              flexDirection: 'row'
            }}>
              <View style={{
                flexDirection: 'row',
                alignItems: 'center'
              }}>
                <Icon type={"FontAwesome5"} name={"street-view"} style={{
                  fontSize: 13,
                  color: Colors.gray888,
                  marginRight: 5
                }} />
                <Text style={{color: Colors.gray888}}>{patient?.address}</Text>
              </View>
              <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginLeft: 10
              }}>
                <Icon type={"FontAwesome5"} name={"phone"} style={{
                  fontSize: 13,
                  color: Colors.gray888,
                  marginRight: 5
                }} />
                <Text style={{color: Colors.gray888}}>{patient?.phone}</Text>
              </View>
            </View>
              <View style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
                <Icon type={"FontAwesome5"} name={"envelope"} style={{
                  fontSize: 13,
                  color: Colors.gray888,
                  marginRight: 5
                }} />
                <Text style={{color: Colors.gray888}}>{patient?.email}</Text>
              </View>
          </View>
          {patient?.sex === "male" ? <MaleAvatar width={35} height={35} /> : <FemaleAvatar width={35} height={35} />}
        </View>
        <View style={styles.doctorPatientExperience}>
          <View style={styles.doctorPatient}>
            <Text style={styles.title}>Gender</Text>
            <Text style={[styles.count, {color: Colors.medicalYellow}]}>{patient?.sex}</Text>
          </View>
          <View style={styles.doctorExperience}>
            <Text style={styles.title}>Age</Text>
            <Text style={[styles.count, {color: Colors.medicalPink}]}>{patient?.age}</Text>
          </View>
        </View>
      </View>

      <View style={styles.about}>
        <Text style={{fontSize: 22, color: '#333333', fontWeight: 'bold', marginBottom: 10}}>About User</Text>
        <Text>{patient.description}</Text>
      </View>

      <Modal
        visible={showModal}
        animationType="slide"
      >
        <View style={styles.modalContainer}>
          <Text onPress={() => setShowModal(false)}>Modal</Text>

          <CalendarPicker
            onDateChange={onDateChange}
            allowRangeSelection={true}
            selectedDayColor={Colors.medicalViolet}
            selectedDayTextColor={Colors.white}
            todayBackgroundColor={Colors.medicalViolet}
            todayTextStyle={{
              color: Colors.white
            }}
            scrollable={true}
          />
          <AppointmentButton title="Start Date" onClick={() => console.log(startDate, endDate)} />

        </View>
      </Modal>
    </View>
  )
}

export default UserProfile

const styles = StyleSheet.create({
  about: {
    backgroundColor: Colors.medicalBackground1,
    borderRadius: 20,
    padding: 20,
    marginTop: 20
  },
  card: {
    backgroundColor: Colors.medicalBackground1,
    padding: 20,
    borderRadius: 20
  },
  container: {
    flex: 1,
    backgroundColor: Colors.medicalBackground,
    padding: 15,
    borderRadius: 20,
  },
  count: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  doctorContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20
  },
  doctorPatientExperience: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20
  },
  doctorPatient: {
    width: '45%',
    height: 110,
    backgroundColor: Colors.white,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  doctorExperience: {
    width: '45%',
    height: 110,
    backgroundColor: Colors.white,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  doctorProfile: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    padding: 15
  },
  navBar: {
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 0,
    paddingVertical: 15
  },
  title: {
    fontSize: 16,
    paddingBottom: 10
  },
})
