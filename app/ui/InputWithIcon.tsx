import { Icon } from 'native-base'
import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { Colors } from '../utils/Colors'

const InputWithIcon = () => {
  return (
    <View style={styles.inputConytainer}>
      <Icon type={'FontAwesome5'} name={"search"} style={styles.icon} />
      <TextInput placeholder="Search Doctor" />
    </View>
  )
}

export default InputWithIcon

const styles = StyleSheet.create({
  icon: {
    marginRight: 10,
    fontSize: 22,
    color: Colors.gray777
  },
  inputConytainer: {
    backgroundColor: Colors.white,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15
  },
})
