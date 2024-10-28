import { View, Text, StyleSheet, useWindowDimensions } from 'react-native'
import { Dimensions } from 'react-native'
import global from '../theme/globals'

const { width, height } = Dimensions.get("window")

export function DimensionScreen() {
    const { width, height } = useWindowDimensions()
    
    return (
        <View>
            <View style={ styles.container } >
                <View style={{...styles.box, width: width * 0.80}}></View>
            </View>
            <Text style={ global.text } >w: {width}, h: {height} </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 200,
        height: 300,
        backgroundColor: "#26cd00",
    },
    box: {
        backgroundColor: "#cd7100",
        height: "50%",
        width: "50%",
    }
})