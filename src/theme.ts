'use client';

import { Roboto } from 'next/font/google';
import { createTheme, ThemeOptions } from "@mui/material/styles";

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

const themeOptions: ThemeOptions = {
  typography: {
    fontFamily: roboto.style.fontFamily,
    body1: {
      color: '#252A31',
      fontSize: 14,
      lineHeight: 'normal',
    },
  },
};

const theme = createTheme(themeOptions);

export default theme;