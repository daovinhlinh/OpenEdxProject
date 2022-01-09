import { TextField } from '@mui/material';
import React, { ChangeEvent } from 'react';

interface CustomTextFieldProps {
  title: string;
  hint?: string;
  isPassword?: boolean;
  onBlur?: (e: any) => void;
  value?: string;
  error?: boolean;
  onTextChange: (text: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
  isRequire?: boolean;
  disabled?: boolean;
  errorText?: string;
}

export const CustomTextField = (props: CustomTextFieldProps) => {
  return (
    <TextField
      sx={{ marginBottom: 2 }}
      label={props.title}
      variant='standard'
      disabled={props.disabled}
      required={props.isRequire}
      placeholder={props.hint}
      value={props.value}
      onChange={props.onTextChange}
      onBlur={props.onBlur}
      error={props.error}
      helperText={props.errorText}
      fullWidth
      type={props.isPassword ? 'password' : 'text'}
    />
  );
};
