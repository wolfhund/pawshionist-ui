import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import Panel from '../../components/Panel/Panel' // Make sure to import your Panel component
import Container from '../../components/Container/Container'
import ImageUploader from './ImageUploader'
import { Formik } from 'formik'
import tw from 'twrnc'
import * as Yup from 'yup'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { SafeAreaView } from 'react-native-safe-area-context'

const RegisterPet = ({ navigation, resetForm }) => {
  const initialValues = {
    petName: '',
    ownerName: '',
  }
  const [petImage, setPetImage] = useState(null)

  const ProfileSchema = Yup.object().shape({
    petName: Yup.string().required('This field is required'),
    ownerName: Yup.string().required('This field is required'),
  })

  const handleSubmit = (values, { resetForm }) => {
    console.log('Form values:', values)
    // Here you can perform any further actions, such as submitting the data to a server.
    navigation.navigate('Home')
    setPetImage(null)
    resetForm()
  }

  const insets = useSafeAreaInsets()

  return (
    <SafeAreaView style={tw`flex-1 bg-sky-50`}>
      <View style={tw`p-4`}>
        <View style={tw`flex-row items-center justify-between mb-4`}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
          <Text style={tw`font-bold text-lg`}>Register</Text>
          <View style={{ width: 24 }} />
        </View>

        <Panel>
          <Formik
            initialValues={initialValues}
            validationSchema={ProfileSchema}
            onSubmit={handleSubmit}
          >
            {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
              <View>
                <View>
                  <Text style={tw`font-bold text-lg mb-2`}>Pet</Text>
                  <ImageUploader image={petImage} setImage={setPetImage} />
                  <Text>Name:</Text>
                  <TextInput
                    onChangeText={handleChange('petName')}
                    onBlur={handleBlur('petName')}
                    value={values.petName}
                    style={tw`border border-gray-300 p-2`}
                  />
                  <Text style={tw`text-red-600`}>{errors.petName}</Text>
                </View>

                <View style={tw`mt-4`}>
                  <Text style={tw`font-bold text-lg mb-2`}>Owner</Text>
                  <Text>Name:</Text>
                  <TextInput
                    onChangeText={handleChange('ownerName')}
                    onBlur={handleBlur('ownerName')}
                    value={values.ownerName}
                    style={tw`border border-gray-300 p-2`}
                  />
                  <Text style={tw`text-red-600`}>{errors.ownerName}</Text>
                </View>

                <TouchableOpacity onPress={handleSubmit}>
                  <View
                    style={tw`bg-blue-500 rounded-lg shadow-md py-2 px-4 mt-4 items-center justify-center`}
                  >
                    <Text style={tw`text-white font-bold text-lg`}>Submit</Text>
                  </View>
                </TouchableOpacity>
              </View>
            )}
          </Formik>
        </Panel>
      </View>
    </SafeAreaView>
  )
}

export default RegisterPet
