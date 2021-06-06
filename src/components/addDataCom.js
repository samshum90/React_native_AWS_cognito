import React from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";


export default function AddDataCom(props){

    return(
        <View style={styles.addEmotionContainer}>
            <TouchableOpacity
                onPress={props.getDataType}>
                <View>
                    <Text style={styles.addButton}> {props.typeText} </Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}


const styles = StyleSheet.create({
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

    },
});
