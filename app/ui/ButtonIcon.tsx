import { Icon } from 'native-base'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

type TProps = {
  onClick?: any;
  type: any;
  name: string;
  style?: any;
  bodyStyle?: any;
}

const ButtonIcon = (props: TProps) => {
  return (
    <TouchableOpacity style={[styles.btn, props.bodyStyle]} onPress={props.onClick}>
      <Icon type={props.type} name={props.name} style={[styles.icon, props.style]} />
    </TouchableOpacity>
  )
}

export default ButtonIcon

const styles = StyleSheet.create({
  btn: {},
  icon: {},
})
