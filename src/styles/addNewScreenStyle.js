import {StyleSheet} from "react-native";

export const addNewStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },
    addButton: {
        borderWidth: 1,
        fontSize: 12,
        padding: 10,
        textAlign: 'center',
        borderRadius: 50
    },
    addEmotionContainer: {
        flex: 1,
        alignItems: 'center',
        marginTop: 30
    },
    input: {
        marginTop:20,
        marginBottom: 10,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderBottomWidth: 2,
        borderBottomColor: '#ddd',
        fontSize: 20,
        fontWeight: "bold",
    }
})
