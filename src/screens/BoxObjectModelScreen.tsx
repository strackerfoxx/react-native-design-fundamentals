import { View, Text, StyleSheet } from 'react-native'

export function FlexBox() {
  return (
    <View style={ styles.container }>
      {/* <Text style={ styles.title }>box</Text> */}
      <View style={ styles.insideBox }>
        <Text style={ styles.text } >box</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#030a13",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    paddingHorizontal: 30,
    paddingVertical: 20,
    borderWidth: 10,
  },
  insideBox: {
    height: 50,
    backgroundColor: "#cd7100",
    // margin: 20
    marginHorizontal: 20,
    marginVertical: 50,
    padding: 10
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  }
})