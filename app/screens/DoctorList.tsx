import { useNavigation } from '@react-navigation/native'
import React, { useCallback } from 'react'
import { Dimensions, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import SearchBar from '../components/SearchBar'
import AppointmentButton from '../ui/AppointmentButton'
import ButtonIcon from '../ui/ButtonIcon'
import ProfileImage from '../ui/ProfileImage'
import { Colors } from '../utils/Colors'
import { doctors } from '../utils/doctors'

const width = Dimensions.get("window").width - 45

const DoctorList = () => {
  const {navigate, goBack} = useNavigation()

  const goToDoctorDetail = useCallback((props) => navigate("Doctor", props), [navigate])
  
  const renderItem = ({item}: any) => (
    <View style={styles.card}>
      <ProfileImage imageSrc={item.name} style={{marginBottom: 10}} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.deptName}>{item.deptName}</Text>
      <AppointmentButton title='Appointment' style={{width: 130, backgroundColor: Colors.medicalBackground}} onClick={() => goToDoctorDetail(item)} />
    </View>
  )

  return (
    <View style={{paddingTop: 30, paddingHorizontal: 15}}>
      <View style={styles.navBar}>
        <ButtonIcon type={"Feather"} name={"arrow-left"} style={{color: Colors.gray777}} onClick={goBack} />
        <Text style={{color: '#555555', textAlign: 'center', width: width - 30, fontWeight: 'bold', fontSize: 25}}>Doctor Lists</Text>
      </View>
      <SearchBar />
      <View style={{marginBottom: 240, marginTop: 20}}>
        <FlatList
          data={doctors}
          renderItem={renderItem}
          numColumns={2}
          style={{}}
        />
      </View>
    </View>
  )
}

export default DoctorList

const styles = StyleSheet.create({
  card: {
    width: width / 2,
    backgroundColor: Colors.white,
    marginRight: 15,
    borderRightWidth: 2,
    borderRightColor: Colors.medicalPink,
    borderLeftWidth: 2,
    borderLeftColor: Colors.medicalBlue,
    // borderBottomWidth: 2,
    // borderBottomColor: Colors.medicalViolet,
    // borderTopWidth: 2,
    // borderTopColor: Colors.medicalYellow,
    marginBottom: 15,
    padding: 15,
    alignItems: 'center',
    borderRadius: 15
  },
  deptName: {
    marginBottom: 10
  },
  name: {
    marginBottom: 5
  },
  navBar: {
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
})
