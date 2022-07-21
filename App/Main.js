import React from "react";
import ReactDOM from "react-dom/client";

// my components


function Main() {
  return (
    <>
      <div>Hello World!</div>
    </>
  );
}
const root = ReactDOM.createRoot(document.querySelector("#app"));
root.render(<Main />);

if (module.hot) {
  module.hot.accept();
}
