import {View, Text, StyleSheet } from 'react-native'

export function Ingredients({ name, amount }) {
    return(
        <View style={styles.container}>
            <Text style={styles.name} >{name}</Text>
            <Text>{amount}</Text>
        </View>
    )
}


const styles = StyleSheet.create({

    container:{
        backgroundColor: "#FFF",
        marginBottom: 14,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 4,
        padding: 12,
    },
    name:{
        fontWeight: 500,
        fontSize: 16
    }
})