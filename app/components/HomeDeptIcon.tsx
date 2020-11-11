import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import IconCircle from '../ui/IconCircle'
import { Colors } from '../utils/Colors'

const lists = [
  {type: "Feather", name: "scissors", id: 1, color: Colors.medicalYellow},
  {type: "Feather", name: "heart", id: 2, color: Colors.medicalPink},
  {type: "Feather", name: "eye", id: 3, color: Colors.medicalViolet},
  {type: "Entypo", name: "lab-flask", id: 4, color: Colors.medicalBlue},
]

const HomeDeptIcon = () => {
  return (
    <View style={styles.container}>
      {lists.map((list: any) => (
        <TouchableOpacity key={list.id} style={styles.iconContainer}>
          <IconCircle type={list.type} name={list.name} style={{color: list.color}} />
        </TouchableOpacity>
      ))}
    </View>
  )
}

export default HomeDeptIcon

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20
  },
  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: Colors.white,
    marginRight: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
})
