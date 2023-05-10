import { useEffect, useState } from 'react'
import { View, Text, StyleSheet, SafeAreaView, FlatList } from 'react-native'
import { getFavorites } from '../../utils/storage';
import { FoodList } from '../../components/FoodList';

export function Favorites() {

    const [recipes, setRecipes] = useState([]);

    useEffect(() => {

        async function getRecipes(){
            const result = await getFavorites("@appreceitas");
            setRecipes(result)
        }

        getRecipes();

    }, [recipes])


    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title} >Receitas favoritas</Text>

            {recipes.length === 0 && <Text>Você ainda não tem nenhuma receita favorita.</Text>}

            <FlatList
                style={{marginTop: 14}}
                data={recipes} 
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => String(item.id)}
                renderItem={({item}) => <FoodList data={item}/>}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F3F9FF",
        paddingTop: 36,
        paddingLeft: 14,
        paddingRight: 14,

    },
    title: {
        color: "#000",
        fontSize: 24,
        fontWeight: 'bold',

    }
})
