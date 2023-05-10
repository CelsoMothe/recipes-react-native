import { View, Text, TouchableOpacity, SafeAreaView, StyleSheet } from 'react-native'
import { WebView } from 'react-native-webview'
import { Feather } from '@expo/vector-icons'

export function VideoView({ handleClose, videoUrl }) {

    return (
        <SafeAreaView style={styles.container} >
            <TouchableOpacity onPress={handleClose} style={styles.backButton} >
                <Feather name='arrow-left' size={24} color="#FFF" />
                <Text style={styles.backText} >Voltar</Text>
            </TouchableOpacity>

            <WebView
                style={styles.contentView}
                source={{ uri: videoUrl }}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        width: '100%',
    },
    backText: {
        color: "#FFF",
        fontSize: 18,
        fontWeight: 500,
        marginLeft: 14,
    },
    backButton: {
        backgroundColor: "#4CBE6C",
        width: '100%',
        height: 48,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 14,
    },
    contentView:{
        flex:1,
        width: '100%',
    }
})