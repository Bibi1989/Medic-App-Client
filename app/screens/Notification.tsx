import { useNavigation } from '@react-navigation/native'
import { Icon } from 'native-base'
import React, { useCallback } from 'react'
import { Dimensions, FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import ButtonIcon from '../ui/ButtonIcon'
import { Colors } from '../utils/Colors'
import { notifications } from '../utils/data'

const buttonIconStyle = {
  width: 45,
  height: 45,
  borderRadius: 10,
  backgroundColor: Colors.white,
  margin: 20,
  lineHeight: 45,
  paddingLeft: 7,
  color: Colors.gray777
}

const Notification = () => {
  const {goBack} = useNavigation() 

  
  const renderNotification = useCallback(({item}) => {
    return (
      <TouchableOpacity style={styles.itemList}>
        <Icon 
          type={"Feather"} 
          name={item.type} 
          style={{
            color: Colors.gray777
          }}
        />
        <View style={{
          paddingLeft: 10
        }}>
          <Text style={{
            fontSize: 16,
            color: "#444"
          }}>{item.message}</Text>
          <Text style={{
            fontSize: 14
          }}>{item.createdAt}</Text>
        </View>
      </TouchableOpacity>
    )
  }, [notifications])

  return (
    <View style={styles.container}>
      <ButtonIcon 
        type={"Feather"} 
        name={"chevron-left"} 
        style={buttonIconStyle} 
        onClick={goBack}
      />
      <View style={styles.notiTitleContainer}>
        <Text style={styles.notiTitleText}>Notifications</Text>
      </View>
      <FlatList 
        data={notifications}
        renderItem={renderNotification}
        style={styles.notiLists}
      />
    </View>
  )
}

export default Notification

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.medicalViolet,
    flex: 1
  },
  itemList: {
    backgroundColor: Colors.medicalBackground1,
    marginBottom: 10,
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  notiTitleContainer: {
    height: 60,
    justifyContent: 'flex-end',
    paddingBottom: 10,
    paddingHorizontal: 20
  },
  notiTitleText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: Colors.white
  },
  notiLists: {
    backgroundColor: Colors.medicalBackground,
    minHeight: Dimensions.get('window').height,
    borderTopLeftRadius: 50,
    marginLeft: 5,
    paddingTop: 40,
    paddingHorizontal: 15
  },
})
