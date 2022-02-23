import { createGlobalStyle } from "styled-components";

/*======== CSS Variables: ========*/
const varHeaderHeight = "5rem";

//---Colors:
const firstColor = "#01bf77";
const firstAltColor = "#0d9460";
const titleColor = "#000";
const txtColor = "#313131";
const txtLightColor = "#474747";
const bodyColor = "#fcfcfc";
const containerColor = "#fff";
const inputColor = "#f1f1f1";
const shadowColor = "rgba(0, 0, 0, 0.2)";
const borderColor = "#cfcfcf";

//---Font & Typography:
const bodyFont = '"Encode Sans Expanded", sans-serif';

//.5rem = 8px, 1rem = 16px, 1.5rem = 24px ...
const bigFontSize = "2rem";
const h1FontSize = "1.5rem";
const h2FontSize = "1.25rem";
const h3FontSize = "1.125rem";
const normalFontSize = "0.948rem";
const smallFontSize = "0.813rem";
const smallerFontSize = "0.75rem";

//---Font Weight:
const fontMedium = "500";
const fontSemiBold = "600";
const fontBold = "700";
const fontBolder = "800";

//---Margins:
const mb1 = "0.5rem";
const mb2 = "1rem;";
const mb3 = "1.5rem";
const mb4 = "2rem;";
const mb5 = "2.5rem";
const mb6 = "3rem;";

//---Z-Index:
const zTooltip = "10";
const zFixed = "100";

//---Border Radius:
const borderOutsideRadius = "15px";
const borderInsideRadius = "20px";

export const GlobalStyles = createGlobalStyle`
  /*========== CSS Reset ==========*/
  *,
  ::before,
  ::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    font-family: ${bodyFont};
    scroll-behavior: smooth;
  }
  body {
    background: ${bodyColor};
    color: ${txtColor};
  }
`;
