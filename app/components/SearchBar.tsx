import React from 'react'
import { StyleSheet, View } from 'react-native'
import InputWithIcon from '../ui/InputWithIcon'

const SearchBar = () => {
  return (
    <View style={styles.searchContainer}>
      <InputWithIcon />
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
  searchContainer: {
    marginTop: 25
  }
})
