import { View, StyleSheet } from 'react-native'

export function FlexScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.box1} />
            <View style={styles.box2} />
            <View style={styles.box3} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#3b3b3b",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    box1: {
        backgroundColor: "#44e224",
        width: 100,
        height: 100,
    },
    box2: {
        backgroundColor: "#1794c2",
        width: 100,
        height: 100,
    },
    box3: {
        backgroundColor: "#e29c05",
        height: 100,
        width: 100,
    },
})