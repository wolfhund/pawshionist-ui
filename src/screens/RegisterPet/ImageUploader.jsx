import React from 'react'
import { View, Image, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import * as ImagePicker from 'expo-image-picker'
import { useMutation } from 'react-query'

const uploadImage = async (imageData) => {
  const apiUrl = 'http://localhost:8000/api/v1/pets'
  const formData = new FormData()
  formData.append('image', {
    uri: imageData.uri,
    type: 'image/jpeg',
    name: 'pet_image.jpg',
  })

  const response = await fetch(apiUrl, {
    method: 'PUT',
    body: formData,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'multipart/form-data',
    },
  })

  if (!response.ok) {
    throw new Error('Image upload failed')
  }

  return response.json()
}

const ImageUploader = ({ image, setImage }) => {
  const mutation = useMutation(uploadImage, {
    onSuccess: (data) => {
      // Handle success if needed
      console.log('Image upload successful:', data)
    },
    onError: (error) => {
      // Handle error if needed
      console.error('Image upload failed:', error)
    },
  })

  const handleImageUpload = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync()

    if (permissionResult.status !== 'granted') {
      console.error('Permission to access media library was denied')
      return
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.5,
    })

    if (result.cancelled) {
      console.log('Image picker was canceled')
    } else {
      // Update the image state using setImage
      setImage(result.uri)
      // Call the mutation to upload the image
      mutation.mutate(result)
    }
  }

  return (
    <TouchableOpacity onPress={handleImageUpload}>
      <View style={{ alignItems: 'center', marginBottom: 16 }}>
        {image ? (
          <Image
            source={{ uri: image }}
            style={{ width: 100, height: 100, borderRadius: 50 }}
          />
        ) : (
          <Ionicons name="person-circle" size={100} color="gray" />
        )}
      </View>
    </TouchableOpacity>
  )
}

export default ImageUploader
