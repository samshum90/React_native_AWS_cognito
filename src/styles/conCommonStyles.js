import {StyleSheet} from "react-native";
import {DefaultTheme} from "react-native-paper"


export const commonStyles = StyleSheet.create({
    buttonStyle: {
        width: 130,
        padding: 12,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50
    },
    buttonText: {
        color: "#FFFFFF",
        fontSize: 25
    },
    headerFormat: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    headerText: {
        textAlign: "center",
        color: "#000000",
        fontSize: 23,
    },
    screenContainer: {
        flex: 4.5,
        paddingVertical: 10
    },
    dataTileStyle: {
        flex: 4,
        display: "flex",
        padding: "5%",
        margin: "2%",
        height: "100%",
        width: "90%",
        elevation: 5,
        borderRadius: 5,
        alignSelf: "center",
        borderColor: "black",
        fontSize: 5,
    }
})

export const theme = {
    ...DefaultTheme,
    roundness: 30,
    backgroundColor: '#FFFFFF',
    colors: {
        ...DefaultTheme.colors,
        primary: '#FFFFFF',
        accent: '#000000',
        error : "#D50505"
    },
};
