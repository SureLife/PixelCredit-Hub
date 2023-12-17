import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Container from "./context/Container";
import Footer from "./components/Footer";
import AppNavigator from "./navigation/AppNavigator";

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Navbar/>
        <AppNavigator/>
        <Footer/>
      </Container>
    </BrowserRouter>
  );
}

export default App;
