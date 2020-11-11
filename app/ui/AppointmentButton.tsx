import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Colors } from '../utils/Colors'

type TProps = {
  title: string;
  style?: any;
  onClick?: any;
  textColor?: string;
  component?: any;
}

const AppointmentButton = (props: TProps) => {
  return (
    <View>
      {props.component ? 
        <TouchableOpacity style={[styles.btnComponent, props.style]} onPress={props.onClick}>
          <Text style={[styles.btnTxt, {color: props.textColor ? props.textColor : Colors.gray777}]}>{props.title}</Text> 
          {props.component}
        </TouchableOpacity>
        :
        <TouchableOpacity onPress={props.onClick} style={[styles.btn, props.style]}>
          <Text style={[styles.btnTxt, {color: props.textColor ? props.textColor : Colors.gray777}]}>{props.title}</Text>
        </TouchableOpacity>
      }

    </View>
  )
}

export default AppointmentButton

const styles = StyleSheet.create({
  btn: {
    height: 34,
    justifyContent: 'center',
    borderRadius: 10
  },
  btnComponent: {
    height: 34,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  btnTxt: {
    textAlign: 'center',
    color: Colors.gray777
  }
})
