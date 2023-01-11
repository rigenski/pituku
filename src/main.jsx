import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// style
import "src/styles/component.css";
import "src/styles/global.css";

// lib
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
