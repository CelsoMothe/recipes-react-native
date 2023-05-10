import { Text, StyleSheet } from 'react-native'
import { View } from 'moti'


export function Logo() {
    return (
        <View style={styles.logoArea}
            from={{
                opacity: 0,
                translateX: -51
            }}

            animate={{
                opacity: 1,
                translateX: 0
            }}

            transition={{
                type: "spring",
                duration: 850
            }}>
            <Text style={styles.logo}
            >
                Receitas Fácil
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    logoArea: {
        backgroundColor: "#4CBE6C",
        alignSelf: "flex-start",
        padding: 8,
        paddingRight: 20,
        paddingLeft: 16,
        borderTopRightRadius: 8,
        borderBottomLeftRadius: 8,
        borderTopLeftRadius: 8,
        borderBottomRightRadius: 32,
        marginBottom: 8
    },
    logo: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#FFF",

    }
})