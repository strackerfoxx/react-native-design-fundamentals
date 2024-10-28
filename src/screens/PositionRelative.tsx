import { View, Text, StyleSheet, Image } from 'react-native'
import global from '../theme/globals'

export function PositionRelative() {
  return (
    <View style={styles.container} >
      <View style={styles.box1} />
      <View style={styles.box2} />
      <View style={styles.box3} />
      <View style={styles.box4} />
      <View style={styles.box5} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1b1b1b"
    // justifyContent: "center",
    // alignItems: "center",
  },
  box1: {
    width: 100,
    height: 100,
    backgroundColor: "#0fb61a",
    borderWidth: 10,
    borderColor: "#030a13",
    borderRadius: 50,
    position: "absolute",
    right: 0
  },
  box2: {
    width: 100,
    height: 100,
    backgroundColor: "#dd9a1e",
    borderWidth: 10,
    borderColor: "#030a13",
    borderRadius: 50
  },
  box3: {
    width: 100,
    height: 100,
    backgroundColor: "#dd1e1e",
    borderWidth: 10,
    borderColor: "#030a13",
    borderRadius: 50,
    position: "absolute",
    bottom: 0,
    right: 0,
  },
  box4: {
    width: 100,
    height: 100,
    backgroundColor: "#dd1e9d",
    borderWidth: 10,
    borderColor: "#030a13",
    borderRadius: 50,
    position: "absolute",
    bottom: 0,
    left: 0
  },
  box5: {
    width: 100,
    height: 100,
    backgroundColor: "#1ec4dd",
    borderWidth: 10,
    borderColor: "#030a13",
    borderRadius: 50,
    position: "absolute",
    top: 350,
    left: 150
  },
})