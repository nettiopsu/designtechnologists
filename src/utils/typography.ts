import Typography from "typography";
const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.6,
  headerFontFamily: ["Libre Baskerville", "serif"],
  bodyFontFamily: ["Libre Baskerville", "serif"],
  scaleRatio: 2,
  googleFonts: [
    {
      name: "Libre Baskerville",
      styles: ["400", "700"]
    },
    {
      name: "Roboto",
      styles: ["400", "700"]
    }
  ],
  overrideStyles: () => ({
    h1: {
      textAlign: "center",
      marginBottom: "80px"
    },
    img: {
      marginBottom: 0
    }
  })
});
export default typography;
