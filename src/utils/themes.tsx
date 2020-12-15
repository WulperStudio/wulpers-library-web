import {createMuiTheme} from '@material-ui/core/styles';
import {
  poppinsRegular,
  poppinsItalic,
  poppinsBold,
  poppinsBoldItalic,
  poppinsLight,
  poppinsLightItalic
} from "./typography"
import {backgrounds, text} from "./colors"

const fontsPoppins = {
  typography: {
    fontFamily: "Poppins"
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [poppinsRegular, poppinsItalic, poppinsBold,
          poppinsBoldItalic, poppinsLight, poppinsLightItalic],
      },
    }
  }
}
export const defaultTheme = createMuiTheme({
  ...fontsPoppins,
  palette: {
    primary: {
      main: backgrounds.primary,
    },
    secondary: {
      main: backgrounds.secondary,
      contrastText: '#FFF'
    },
    text: {
      primary: text.primary
    }
  }
})

export const BlogVariant1 = createMuiTheme({
  ...fontsPoppins,
  palette: {
    background: {
      default: "#FDFDFD"
    },
    text: {
      primary: "#374A59"
    },
    primary: {
      main: backgrounds.primary,
    },
    secondary: {
      main: backgrounds.secondary,
      contrastText: '#FFF'
    }
  }
})

export const darkTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#FF0000",
    }
  }
})
