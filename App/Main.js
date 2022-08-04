import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// my components

import Header from "./Components/Header";
import AboutUs from "./Components/About";
import Form from "./Components/Form";
import Footer from "./Components/Footer";
import Terms from "./Components/Terms";
import Todos from "./Components/Todos";

function Main() {
  return (
    <BrowserRouter>
      <Header />
      <AboutUs />
      <Form />
      <Footer />
      <Routes>
        <Route className="ml-1" path="/terms" element={<Terms />} />
      </Routes>
    </BrowserRouter>
  );
}
const root = ReactDOM.createRoot(document.querySelector("#App"));
root.render(<Main />);

if (module.hot) {
  module.hot.accept();
}
