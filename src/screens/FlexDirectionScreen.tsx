import { View, StyleSheet, Text } from 'react-native'
import global from '../theme/globals'

export function FlexDirectionScreen() {
    return (
        <View style={styles.container}>
            <View style={[styles.box, styles.box1]}><Text style={global.text}>1</Text></View>
            <View style={[styles.box, styles.box2]}><Text style={global.text}>2</Text></View>
            <View style={[styles.box, styles.box3]}><Text style={global.text}>3</Text></View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#3b3b3b",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "stretch"
    },
    box: {
        width: 100,
        // height: 100,
    },
    box1: {
        backgroundColor: "#44e224",
    },
    box2: {
        backgroundColor: "#1794c2",
    },
    box3: {
        backgroundColor: "#e29c05",
    },
})