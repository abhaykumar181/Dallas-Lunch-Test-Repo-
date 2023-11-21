import React, { ReactNode, ReactElement } from 'react';
import { Text, TextProps, StyleSheet } from 'react-native';

interface StyledTextProps extends TextProps {
  children: ReactNode;
  familyStyle?: String;
}

const StyledText: React.FC<StyledTextProps> = ({ style, children, familyStyle, ...restProps }: StyledTextProps): ReactElement => {
  const fontFamily = !familyStyle ? 'PlaypenSans-Regular' : `PlaypenSans-${familyStyle}`;

  return <Text style={[{ fontFamily }, style]} {...restProps}>{children}</Text>;
};

export default StyledText;