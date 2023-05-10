import {View, Text, StyleSheet } from 'react-native'

export function Instructions({ text, id }) {
    return(
        <View style={styles.container}>
            <Text style={styles.name} >{id} - </Text>
            <Text style={styles.text} >{text}</Text>
        </View>
    )
}


const styles = StyleSheet.create({

    container:{
        marginBottom: 14,
        flexDirection: 'row',
        padding: 8,
        alignItems: 'center'
    },
    name:{
        fontSize: 18,
        fontWeight: 500,
    },
    text:{
        fontSize: 15,
        lineHeight: 20
    }
})