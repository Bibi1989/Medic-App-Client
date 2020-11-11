import { Icon } from 'native-base'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Colors } from '../utils/Colors'

const Splash = () => {
  return (
    <View style={styles.splash}>
      <Icon type={"FontAwesome5"} name={"cog"} style={{fontSize: 40}} />
      <Text>Medic App</Text>
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({
  splash: {
    flex: 1,
    backgroundColor: Colors.medicalPink,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
