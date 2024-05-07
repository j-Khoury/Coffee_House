import React, {FC} from 'react';
import {TextInput, TextInputProps} from 'react-native';
import {Orange} from './constants';
import {COLORS} from '../theme/theme';

interface FieldProps extends TextInputProps {}

const Field: FC<FieldProps> = props => {
  return (
    <TextInput
      {...props}
      style={{
        borderRadius: 100,
        color: Orange,
        paddingHorizontal: 10,
        width: '78%',
        backgroundColor: COLORS.primaryGreyHex,
        marginVertical: 10,
      }}
      placeholderTextColor={Orange}
    />
  );
};

export default Field;
