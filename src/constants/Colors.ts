type Color = {
  white: string;
  black: string;
  primary: {
    light: string;
    medium: string;
    dark: string;
  };
  secondary: {
    light: string;
    dark: string;
  };
};

/* TODO: Define schema and colors for dark mode */
export const Colors: Color = {
  white: '#fff',
  black: '#000',
  primary: {
    light: '#8ecae6ff',
    medium: '#219ebcff',
    dark: '#023047ff',
  },
  secondary: {
    light: '#ffb703ff',
    dark: '#fb8500ff',
  },
};
