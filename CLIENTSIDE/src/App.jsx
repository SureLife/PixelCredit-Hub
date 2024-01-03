import React from "react";
import { BrowserRouter } from "react-router-dom";
import Container from "./context/Container";
import Footer from "./components/Footer";
import AppNavigator from "./navigation/AppNavigator";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Header />
        <AppNavigator />
        <Footer />
      </Container>
    </BrowserRouter>
  );
}

export default App;
