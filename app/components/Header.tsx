import AsyncStorage from '@react-native-community/async-storage'
import { useNavigation } from '@react-navigation/native'
import { Icon } from 'native-base'
import React, { useCallback, useContext } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { UserContext } from '../context/Providers/UserContext'
import FemaleAvatar from '../SvgIcons/FemaleAvatar'
import MaleAvatar from '../SvgIcons/MaleAvatar'
import ProfileImage from '../ui/ProfileImage'
import { Colors } from '../utils/Colors'

const Header = () => {
  const {navigate} = useNavigation()
  const goToUserProfile = useCallback(() => navigate('User'), [navigate])
  const goToNotification = useCallback(() => navigate('Notifications'), [navigate])

  const {logoutUser, patient} = useContext(UserContext)

  const logout = () => {
    logoutUser(navigate)
  }
  
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.rightIcons} onPress={goToUserProfile}>
        {patient?.sex === "male" ? <MaleAvatar width={35} height={35} /> : <FemaleAvatar width={35} height={35} />}
        <Text style={{marginLeft: 10, fontSize: 20, fontWeight: 'bold', color: Colors.medicalPink}}>{patient?.name.split(" ")[0]}</Text>
        <Text style={{marginLeft: 10, fontSize: 20, fontWeight: 'bold', color: Colors.medicalViolet}}>{patient?.name.split(" ")[1]}</Text>
      </TouchableOpacity>
      <View style={styles.rightIcons}>
        <Icon type={"FontAwesome5"} name={"bell"} style={{color: '#777777', fontSize: 25, marginRight: 15}} onPress={goToNotification} />
        <Icon type={"FontAwesome5"} name={"sign-out-alt"} style={{color: '#777777', fontSize: 25}} onPress={logout} />
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    // marginBottom: 10
  },
  rightIcons: {
    flexDirection: 'row',
    alignItems: 'center'
  }
})
