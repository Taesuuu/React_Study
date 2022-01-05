import React from "react";
import ReactDOM, { render } from "react-dom";
import "./index.css";
import App from "./App";
import AttendanceBook from "./react08/AttendanceBook";
import SignUp from "./react09/SignUp";
import LoginControl from "./react07/LoginControl";
// import Greeting from "./react07/Greeting";
import reportWebVitals from "./reportWebVitals";

// function tick() {
//   const elemet = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );

//   ReactDOM.render(
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>,
//     // elemet,
//     document.getElementById("root")
//   );
// }

// setInterval(tick, 1000);

// ReactDOM.render(
//   //vue v-if랑 똑같은 원리
//   <LoginControl></LoginControl>,
//   document.getElementById("root")
// );

// ReactDOM.render(
//   <AttendanceBook></AttendanceBook>,
//   document.getElementById('root')
// );

ReactDOM.render(
  <SignUp></SignUp>,
  document.getElementById('root')
);

// ReactDOM.render(
//   // <React.StrictMode>
//   //   <App />
//   // </React.StrictMode>,
//   elemet,
//   document.getElementById("root")
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
