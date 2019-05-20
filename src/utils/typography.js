import Typography from "typography"
import twinPeaks from "typography-theme-twin-peaks"
// import { underline } from "ansi-colors";

// twinPeaks.omitGoogleFont = true
// twinPeaks.headerLineHeight = 1.1
twinPeaks.overrideThemeStyles = () => {
  return {
    a: {
      color: `black`,
      textDecoration: `underline`,
      textShadow: `none`,
      backgroundImage: `none`,
    },
    h1: {
      lineHeight: 1,
      marginTop: `0.4rem`,
    },
  }
}

// twinPeaks.baseFontSize = "16px"
// twinPeaks.headerFontFamily = ['Lato', 'sans-serif']


const typography = new Typography(twinPeaks)

export const { rhythm, scale } = typography
export default typography
