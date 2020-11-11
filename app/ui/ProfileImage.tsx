import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Colors } from '../utils/Colors'

type TProps = {
  imageSrc: string | any
  style?: any;
}

const ProfileImage = ({imageSrc, style}: TProps) => {
  const isImageSrc = Boolean(imageSrc) && imageSrc.slice(0, 4) === "http"
  const nameInitial = imageSrc && `${imageSrc.split(" ")[0][0]}${imageSrc.split(" ")[1][0]}`
  return (
    <View>
      {isImageSrc ? <Image source={{
        uri: imageSrc,
      }} style={[styles.imageAvatarUrl, style]} /> : <View style={[styles.avatarUrl, style]}>
          <Text style={{fontSize: 20}}>{nameInitial?.toUpperCase()}</Text>
        </View>}
    </View>
  )
}

export default ProfileImage

const styles = StyleSheet.create({
  avatarUrl: {
    width: 60,
    height: 60,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.medicalBackground,
  },
  imageAvatarUrl: {
    width: 60,
    height: 60,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
