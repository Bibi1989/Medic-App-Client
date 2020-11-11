import React, { useCallback, useState } from 'react'
import { Alert, FlatList, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import AppointmentButton from '../ui/AppointmentButton'
import ButtonIcon from '../ui/ButtonIcon'
import { Colors } from '../utils/Colors'
import { symptoms } from '../utils/symptoms'

const Symptoms = () => {

  const [count, setCount] = useState<any[]>([])
  const [showModal, setShowModal] = useState(false)
  const [stateSymptoms, setStateSymptoms] = useState<any[]>(symptoms)

  const handleSymptoms = (item = "", index: number) => {
    // Alert.alert(`${index}`)
    setCount([...count, item]) 
    const newSymptoms = symptoms.splice(index, 1)
    setStateSymptoms(symptoms)
  }

  const renderItem = useCallback(({item, index}: any) => (
    <TouchableOpacity style={styles.tag} onPress={() => handleSymptoms(item, index)}>
      <Text style={styles.tagText}>{item}</Text>
    </TouchableOpacity>
  ), [setCount, count])

  const renderItemModal = useCallback(({item, index}: any) => (
    <TouchableOpacity key={index} style={styles.tag} onPress={() => handleSymptoms(item, index)}>
      <Text style={styles.tagText}>{item}</Text>
    </TouchableOpacity>
  ), [setCount, count])

  const countComponent = useCallback(() => (
    <View style={styles.count}>
      <Text>{count?.length}</Text>
    </View>
  ), [count])

  console.log("count == ", showModal)

  return (
    <View style={{padding: 15, flex: 1}}>
      <Text style={{fontSize: 20, paddingVertical: 20, fontWeight: 'bold'}}>Select Symptoms</Text>
      <FlatList 
        data={stateSymptoms}
        renderItem={renderItem}
        keyExtractor={({item, index}: any) => item}
      />
      <AppointmentButton 
        title={`Find Doctor`} 
        component={countComponent()} 
        textColor={Colors.white} 
        style={{
          backgroundColor: Colors.medicalBlue, 
          marginVertical: 10
        }} 
        onClick={() => setShowModal(true)}
      />
      <Modal 
        visible={showModal}
        animationType={"slide"}
      >
        <View 
          style={{
            padding: 15,
            flex: 1
          }}
        >
          <Text 
            style={{
              fontSize: 20, paddingVertical: 20, 
              fontWeight: 'bold'
            }}>Selected Symptoms</Text>
          <FlatList 
            data={count}
            renderItem={renderItemModal}
            keyExtractor={({item, index}: any) => item}
          />
          <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
            <AppointmentButton 
              title={`Find Doctor`}
              textColor={Colors.white} 
              style={{
                backgroundColor: Colors.medicalBlue, 
                marginVertical: 10,
                width: 200
              }} 
            />
            <ButtonIcon 
              type={'Feather'} 
              name={'chevron-left'} 
              style={{
                borderRadius: 50,
                width: 35,
                height: 35,
                backgroundColor: Colors.medicalPink, 
                marginLeft: 20,
                color: Colors.white,
                lineHeight: 35,
                textAlign: 'center'
              }}
              onClick={() => setShowModal(false)}
            />
          </View>

        </View>
      </Modal>
    </View>
  )
}

export default Symptoms

const styles = StyleSheet.create({
  count: {
    width: 25,
    height: 25,
    borderRadius: 50,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10
  },
  tag: {
    paddingVertical: 3,
    paddingHorizontal: 10,
    backgroundColor: Colors.medicalViolet,
    marginBottom: 5,
    borderRadius: 5
  },
  tagText: {
    color: Colors.white
  },
})
