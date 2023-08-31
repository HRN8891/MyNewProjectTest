import React from "react";
import { View, TextInput, TextInputProps, ViewStyle } from "react-native";
import Style from "./style";
import { Colors } from "../../utilities/Colors";
import { useThemeStyle } from "hooks";

export interface ICTextBox extends TextInputProps {
  hidePassword?: boolean;
  containerStyle?: ViewStyle;
}

function CTextBox({ hidePassword, containerStyle, ...inputProps }: ICTextBox) {
  const { style } = useThemeStyle(Style);

  return (
    <View style={[style.container, containerStyle]}>
      <TextInput
        style={[style.input]}
        underlineColorAndroid="transparent"
        secureTextEntry={hidePassword}
        placeholderTextColor={Colors.black1}
        selectionColor={Colors.black1}
        {...inputProps}
      />
    </View>
  );
}

export default CTextBox;
