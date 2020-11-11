import { Icon } from 'native-base'
import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { Colors } from '../utils/Colors'

type TProps = {
  placeholder?: string;
  keyboardType?: any;
  value?: string;
  secureTextEntry?: boolean;
  onChange?: any;
  style?: any;
}

const UserInput = (props: TProps) => {
  return (
    <View style={[styles.inputConytainer, props.style]}>
      {/* <Icon type={'FontAwesome5'} name={"search"} style={styles.icon} /> */}
      <TextInput secureTextEntry={props.secureTextEntry} placeholder={props.placeholder} onChangeText={props.onChange} keyboardType={props.keyboardType} value={props.value} />
    </View>
  )
}

export default UserInput

const styles = StyleSheet.create({
  icon: {
    marginRight: 10,
    fontSize: 22,
    color: Colors.gray777
  },
  inputConytainer: {
    // backgroundColor: Colors.white,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: Colors.gray777
  },
})
