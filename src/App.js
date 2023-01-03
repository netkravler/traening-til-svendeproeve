import { ThemeProvider } from "styled-components";
import MainRouter from "./App/Routers/MainRouter";


import Header from "./Components/Partials/BurgerMenu/Header";
import { Footer } from "./Components/Partials/Footer/Footer";
import { GlobalStyles } from "./Styles/Global";
import { MainTheme } from "./Styles/MainTheme";

const App = () => {
  return (
    <>
      <ThemeProvider theme={MainTheme}>
        <GlobalStyles />
        <Header />
        <MainRouter />
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default App;
