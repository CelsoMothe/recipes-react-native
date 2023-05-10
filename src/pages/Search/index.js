import { useRoute } from '@react-navigation/native'
import { useEffect, useState } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'

import {FoodList} from '../../components/FoodList'
import api from '../../services/api'

export function Search() {
    const route = useRoute()

    const [recipes, setRecipes] = useState([])

    useEffect(()=>{
        async function fetchRecipes(){
            const response = await api.get(`/foods?name_like=${route.params?.name}`)
            setRecipes(response.data)
        }

        fetchRecipes();

    }, [route.params?.name])

    return (
        <View style={styles.container}>

            <FlatList 
            data={recipes}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => (<FoodList data={item} />)}
            ListEmptyComponent={()=>{<Text style={styles.text} >Não encontramos o que você esta buscando...</Text>}}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#F3F9FF",
        flex: 1,
        paddingStart: 14,
        paddingEnd: 14,
        paddingTop: 14,
    },
    text:{
        fontSize: 16
    }
})
