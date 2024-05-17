import type {
  CSSObjectWithLabel,
  OptionProps,
  StylesConfig,
} from 'react-select';
import colors from 'tailwindcss/colors';

export const styles = {
  control: (styles: CSSObjectWithLabel) => ({
    ...styles,
    backgroundColor: colors.zinc[950],
    borderColor: colors.zinc[700],
    ':focus-within': {
      borderColor: colors.green[200],
    },
    ':hover': {
      borderColor: colors.green[200],
    },
  }),
  menu: (styles: CSSObjectWithLabel) => ({
    ...styles,
    backgroundColor: colors.gray[800],
  }),
  menuList: (styles: CSSObjectWithLabel) => ({
    ...styles,
    maxHeight: '12rem',

    '::-webkit-scrollbar': {
      width: '0.25rem',
      height: '0',
    },
    '::-webkit-scrollbar-track': {
      background: colors.zinc[800],
    },
    '::-webkit-scrollbar-thumb': {
      background: colors.blue[600],
      borderRadius: '0.25rem',
    },
    '::-webkit-scrollbar-thumb:hover': {
      background: colors.blue[700],
    },
  }),
  input: (styles: CSSObjectWithLabel) => ({
    ...styles,
    height: '2.5rem',
    backgroundColor: colors.zinc[950],
    color: colors.zinc[300],
  }),
  option: (styles: CSSObjectWithLabel, { isFocused }: OptionProps) => ({
    ...styles,
    backgroundColor: isFocused ? colors.gray[700] : colors.gray[800],
    color: colors.zinc[300],
    ':hover': {
      backgroundColor: colors.zinc[700],
    },
  }),
  singleValue: (styles: CSSObjectWithLabel) => ({
    ...styles,
    position: 'relative',
    color: colors.zinc[200],
  }),
  multiValue: (styles: CSSObjectWithLabel) => ({
    ...styles,
    position: 'relative',
    color: colors.zinc[300],
    backgroundColor: colors.zinc[700],
  }),
  multiValueLabel: (styles: CSSObjectWithLabel) => ({
    ...styles,
    position: 'relative',
    color: colors.zinc[300],
  }),
} as StylesConfig;
