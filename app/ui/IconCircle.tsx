import { Icon } from 'native-base'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

type TProps = {
  type: string | any;
  name: string;
  style?: any;
}

const IconCircle = ({type, name, style}: TProps) => {
  return (
    <View>
      <Icon type={type} name={name} style={style} />
    </View>
  )
}

export default IconCircle

const styles = StyleSheet.create({})
