import { useLayoutEffect } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native'
import { useRoute, useNavigation } from '@react-navigation/native'

import { Entypo } from '@expo/vector-icons'

export function Detail() {
    const route = useRoute();
    const navigation = useNavigation()

    function handlePress(){
        console.log("clicou")
    }

    useLayoutEffect(() => {

        navigation.setOptions({
            title: route.params?.data ? route.params?.data.name : "Detalhes da receita",
            headerRight: () => (
                <Pressable onPress={handlePress} >
                    <Entypo name='heart' size={28} color="#FF4141" />
                </Pressable>
            )
        })

    }, [navigation, route.params?.data])

    return (
        <View style={styles.container}>
            <Text>Página detail</Text>
            <Text>{route.params?.data.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#CECE",
    }
})
