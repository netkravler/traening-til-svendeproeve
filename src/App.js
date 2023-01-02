import { ThemeProvider } from "styled-components";
import MainRouter from "./App/Routers/MainRouter";
import FlashMessages from "./Components/FlashMessages/FlashMessages";
import Modal from "./Components/Modal/Modal";

import Header from "./Components/Partials/BurgerMenu/Header";
import { Footer } from "./Components/Partials/Footer/Footer";
import { GlobalStyles } from "./Styles/Global";
import { MainTheme } from "./Styles/MainTheme";

const App = () => {
  return (
    <>
      <ThemeProvider theme={MainTheme}>
        <GlobalStyles />
        <Modal />
        <FlashMessages />

        <Header />
        <MainRouter />
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default App;
