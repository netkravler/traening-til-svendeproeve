export const MainTheme = () => {
  const primary = "#4FC1FF";
  const secondary = "#4FC1FF";
  const tertiary = "#1E1E1E";

  return {
    mainsettings: {
      containerPadding: "1rem",
      blockPadding: "1rem",
      containerMargin: "1rem",
      blockMargin: "1rem",
    },
    stageColors: {
      red: "#A33A49",
      blue: "#396999",
      green: "#6B8846",
      purple: "#80347C",
    },
    ratingStars: {
      starOn: "#FFA500",
      starOff: "#eeeeee",
      size: "22px",
    },
    colors: {
      background: "#fff",
      onBackground: "#333",
      primary: primary,
      onPrimary: "#ffffff",
      secondary: secondary,
      onSecondary: "#ffffff",
      tertiary: tertiary,
      onTertiary: "#ffffff",
    },

    buttons: {
      primary: {
        color: "white",
        backgroundColor: primary,
        "&:hover": {
          backgroundColor: secondary,
        },
      },
      secondary: {
        color: "white",
        backgroundColor: secondary,
        "&:hover": {
          backgroundColor: tertiary,
        },
      },
      tertiary: {
        color: "white",
        backgroundColor: tertiary,
        "&:hover": {
          backgroundColor: secondary,
        },
      },
      ctaPrimary: {
        backgroundColor: "pink",
        color: "#fff",
        "&:hover": {
          backgroundColor: "deeppink",
        },
      },
      ctaSecondary: {
        backgroundColor: "#fff",
        color: "red",
        "&:hover": {
          backgroundColor: "deeppink",
        },
      },
    },
    buttonSizes: {
      small: {
        fontSize: "15px",
        padding: `7px 15px`,
      },
      medium: {
        fontSize: "18px",
        padding: `9px 20px`,
      },
      large: {
        fontSize: "22px",
        padding: `15px 30px`,
      },
    },
    headerSizes: {
      h1: { color: primary, fontSize: "3em", lineHeight: "3rem" },
      h2: { color: primary, fontSize: "2.2rem", lineHeight: "2.2rem" },
      h3: { color: tertiary, fontSize: "2rem" },
      h4: { color: tertiary, fontSize: "1.6669rem", fontWeight: 900 },
      h5: { color: tertiary, fontSize: "1.18rem" },
      h6: { color: tertiary, fontSize: ".9rem" },
    },
  };
};
