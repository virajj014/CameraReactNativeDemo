import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { Camera, useCameraDevices } from 'react-native-vision-camera';
import DocumentPicker from 'react-native-document-picker'
const Home = () => {
  const [authorized, setAuthorized] = useState(false);
  const [flash, setFlash] = useState(false);
  const devices = useCameraDevices()
  const device = devices.back

  const checkCameraPermission = async () => {
    try {
      const cameraPermission = await Camera.getCameraPermissionStatus();

      if (cameraPermission === 'authorized') {
        console.log('Camera permission authorized');
        setAuthorized(true);
      } else {
        const newCameraPermission = await Camera.requestCameraPermission();

        if (newCameraPermission === 'authorized') {
          setAuthorized(true);
          console.log('Camera permission authorized');
        }
      }
    } catch (error) {
      console.error('Error checking camera permission:', error);
    }
  };

  useEffect(() => {
    checkCameraPermission();
  }, []);


  const cameraref = useRef<Camera>(null)

  const takePhoto = async () => {
    const photo = await cameraref.current?.takePhoto({
      qualityPrioritization: 'quality',
      flash: flash ? 'on' : 'off',
    })
    console.log(photo)
  }
  

  const pickImageFromGallery = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.images],
      });
      console.log(
        res
      );
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('Canceled from single doc picker');
      } else {
        console.log('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
  }


  if (device == null) return <View>
    <Text>No device found</Text>
  </View>
  return (
    <View
      style={{
        width: '100%',
        height: '100%',
      }}
    >
      <Camera
        style={styles.absoluteFill}
        device={device}
        isActive={true}
        photo={true}
        ref={cameraref}
      />

      <View style={styles.cameraButtons}>
        <Text style={styles.btn}
          onPress={() => {
            setFlash(!flash)
            console.log(!flash)
          }}
        >Flash</Text>
        <Text style={styles.btn}
          onPress={takePhoto}
        >Capture</Text>
        <Text style={styles.btn}
          onPress={pickImageFromGallery}
        >Gallery</Text>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  absoluteFill: {
    flex: 1,
  },
  cameraButtons: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  btn: {
    backgroundColor: 'white',
    padding: 10,
    margin: 10,
    borderRadius: 10,
    color: 'black',

  }
});
