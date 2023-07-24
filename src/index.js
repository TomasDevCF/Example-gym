import React, { Suspense } from "react";
import 'aos/dist/aos.css'; 
import AOS from 'aos';
import ReactDOM from "react-dom/client";
import "./index.css";
import Fallback from "./Components/Fallback";
const Main = React.lazy(() => import("./Components/Main"))

// You can also use <link> for styles
// ..
AOS.init({
  duration: 1000,
  once: true
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Suspense fallback={<Fallback/>}>
    <Main/>
  </Suspense>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
