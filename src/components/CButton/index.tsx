import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextStyle,
  ViewStyle,
} from "react-native";
import Style from "./style";
import { useThemeStyle } from "hooks";
interface ICButton {
  textStyle?: TextStyle;
  buttonContainerStyle?: ViewStyle;
  onPress: () => any;
  text: string;
  disabled?: boolean;
}

function CButton({
  textStyle,
  buttonContainerStyle,
  onPress,
  text,
  disabled,
}: ICButton) {
  const { style } = useThemeStyle(Style);
  return (
    <View style={[style.buttonContainerStyle, buttonContainerStyle]}>
      <TouchableOpacity
        style={style.buttonStyle}
        onPress={onPress}
        disabled={disabled}
      >
        <Text style={[style.buttonTextStyle, textStyle]}>
          {text.toUpperCase()}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default CButton;
