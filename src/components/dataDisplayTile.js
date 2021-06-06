import React from "react";
import {Provider as PaperProvider, Surface} from "react-native-paper";
import {Text, TouchableOpacity, View} from "react-native";
import { LinearGradient} from "expo-linear-gradient";

import {nextButtonStyles} from "../styles/nextButtonStyle";
import {commonStyles, theme} from "../styles/conCommonStyles";


export default function DataTile(props){

    return(
        <PaperProvider theme={theme}>
            <Surface style={commonStyles.dataTileStyle}>

            </Surface>
        </PaperProvider>
    );
}
