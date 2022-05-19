import { View, Text, Alert, Image, StyleSheet } from "react-native"
import { useState } from "react"
import { launchCameraAsync, useCameraPermissions, PermissionStatus } from "expo-image-picker"
import { Colors } from "../utils/colors"
import Button from "../components/Button"

function AddImage(){
  const [pickedImage, setPickedImage] = useState()
  const [cameraPermissionInformation, requestPermission] = useCameraPermissions()

  async function verifyPermissions(){

    if (cameraPermissionInformation.status === PermissionStatus.UNDETERMINED){
      const permissionResponse = await requestPermission()
      return permissionResponse.granted
    }

    if (cameraPermissionInformation.status === PermissionStatus.DENIED){
      Alert.alert("Insufficient Permissions!", "You need to grant camera permissions to use this app.")
      //return false
      const permissionResponse = await requestPermission()
      return permissionResponse.granted
    }

    return true
  }

  async function takeImageHandler(){
    const hasPermission = await verifyPermissions()
    if (!hasPermission) return;

    const image = await launchCameraAsync({
      allowsEditing: true,
      aspect: [16,9],
      quality: 0.5
    })
    setPickedImage(image.uri)
  }

  let imagePreview = <Text>No image taken yet.</Text>
  if (pickedImage) imagePreview = <Image style={styles.image} source={{uri: pickedImage}} />

  return (
      <View style={styles.container}>
        <View style={styles.imagePreview}>
          {imagePreview}
        </View>
        <Button icon="camera" onPress={takeImageHandler}>Take Image</Button>
      </View>
  )
}

export default AddImage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  imagePreview: {
    width: "100%",
    height: 200,
    marginVertical: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary100,
    overflow: "hidden",
    borderTopEndRadius: 30,
    borderBottomLeftRadius: 20,
    borderColor: Colors.primary400,
  },
  image: {
    width: "100%",
    height: "100%",
  }
})