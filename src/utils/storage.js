import AsyncStorage from '@react-native-async-storage/async-storage'

export async function getFavorites(key){
    const favorites = await AsyncStorage.getItem(key)
    return JSON.parse(favorites) || []
}

export async function saveFavorite(key, newItem){
    let myFavorites = await getFavorites(key)

    let hasItem = myFavorites.some(item => item.id === newItem.id)

    if(hasItem){
        console.log("Já esta salvo")
        return
    }
    
    myFavorites.push(newItem)
    await AsyncStorage.setItem(key, JSON.stringify(myFavorites))
    console.log("Salvo com sucesso")
}

export async function removeItem(id){
    let recipes = await getFavorites("@appreceitas")

    let myFavorites = recipes.filter(item => {
        return (item.id !== id)
    })

    await AsyncStorage.setItem("@appreceitas", JSON.stringify(myFavorites))
    console.log("Deletado com sucesso")
    return myFavorites
}

export async function isFavorite(recipe){
    let myRecipes = await getFavorites("@appreceitas")

    const favorite = myRecipes.find(item => item.id === recipe.id)
    
    return favorite
}