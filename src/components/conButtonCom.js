import React from "react";
import {Text, TouchableOpacity, View} from "react-native";
import { LinearGradient} from "expo-linear-gradient";

import {nextButtonStyles} from "../styles/nextButtonStyle";
import {commonStyles} from "../styles/conCommonStyles";


export default function ConButtonCom(props){

    return(
        <View style={nextButtonStyles.nextButtonContainer}>
            <LinearGradient start={{ x: -1, y: 0 }} end={{ x: 1, y: 0 }} colors={['#36C9C6', '#4AD7BB', '#6FE3A9']} style={commonStyles.buttonStyle}>
                <TouchableOpacity onPress={props.getPress}>
                    <View>
                        <Text style={commonStyles.buttonText}>{props.getLabel}</Text>
                    </View>
                </TouchableOpacity>
            </LinearGradient>
        </View>
    );
}
