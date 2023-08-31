import React, { useCallback, useEffect, useState } from "react";
import { View, TouchableOpacity, Switch } from "react-native";
import injectStyled from "theme/InjectStyled";
import { themeType } from "theme/ThemeProvider";
import { colorScheme } from "theme/colors";
import {
  storageKeys,
  removeSecureStorageItem,
} from "../../utilities/storageUtils";
import { useAppSelector } from "store";
import CLabel from "components/CLabel";
import { DashboardScreenProps } from "navigation/types";
import Styles from "./style";

type DashboardProps = {
  navigation: DashboardScreenProps["navigation"];
  style?: any;
  onChangeColorScheme: (colorScheme: typeof themeType) => void;
};
type SwitchComponentProps = {
  isEnabled: boolean;
  onToggleSwitch: (state: boolean) => void;
};

const Dashboard: React.FC<DashboardProps> = ({
  navigation,
  style,
  onChangeColorScheme,
}) => {
  const userData = useAppSelector((state) => state.auth.userData);
  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    onChangeColorScheme(isEnabled ? themeType.dark : themeType.light);
  }, [isEnabled]);

  const toggleSwitch = (state: boolean | ((prevState: boolean) => boolean)) => {
    setIsEnabled(state);
  };

  const SwitchComponent: React.FC<SwitchComponentProps> = ({
    isEnabled,
    onToggleSwitch,
  }) => {
    const toggleSwitch = () => {
      onToggleSwitch(!isEnabled);
    };

    return (
      <Switch
        trackColor={{
          false: colorScheme.dark.SecondaryColor,
          true: colorScheme.light.SecondaryColor,
        }}
        thumbColor={
          isEnabled
            ? colorScheme.dark.PrimaryColor
            : colorScheme.light.PrimaryColor
        }
        ios_backgroundColor={colorScheme.light.BackgroundColor}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    );
  };
  const onCrossPress = useCallback(() => {
    removeSecureStorageItem(storageKeys.userData)
      .then(() => {
        // remove user local data
      })
      .catch(() => {});
  }, []);

  return (
    <View style={style.constainer}>
      <SwitchComponent isEnabled={isEnabled} onToggleSwitch={toggleSwitch} />
      {/* <TouchableOpacity onPress={onCrossPress}>
        <CLabel style={style.textStyle}>Change background color</CLabel>
      </TouchableOpacity> */}
      <CLabel style={style.textStyle}>Welcome To Dashboard!!!</CLabel>
      <CLabel style={style.textStyle}>Login as: {userData.email}</CLabel>
    </View>
  );
};

export default injectStyled(Styles)(Dashboard);
