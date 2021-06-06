import React from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import { LinearGradient} from "expo-linear-gradient";

import {nextButtonStyles} from "../styles/nextButtonStyle";
import {commonStyles} from "../styles/conCommonStyles";


export default function HomeButtonCom(props){

    return(
        <View style={tempStyles.screenStyle}>
            <LinearGradient start={{ x: -1, y: 0 }} end={{ x: 1, y: 0 }} colors={['#36C9C6', '#4AD7BB', '#6FE3A9']} style={tempStyles.buttonStyle}>
                <TouchableOpacity onPress={props.getPress}>
                    <View>
                        <Text style={tempStyles.buttonText}>{props.getLabel}</Text>
                    </View>
                </TouchableOpacity>
            </LinearGradient>
        </View>
    );
}

const tempStyles = StyleSheet.create({
    buttonStyle: {
        width: 200,
        padding: 12,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        alignItems: "center"
    },
    screenStyle: {
        alignSelf: "center",
        flex: 1,
        justifyContent: "center"
    }
});
