import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Navbar from "./components/navbar/navbar";
import Page1 from "./components/page1/page1";
import Teachingareas from "./components/teachingareas/teachingareas";
import PartnersAndSchedule from "./components/partnersAndSchedule/partnersAndSchedule";
import CreativeSection from "./components/creativeSection/creativeSection";
import WhyUs from "./components/whyUs/whyUs";
import ToTopButton from "./components/toTopButton/toTopButton";
import Navigation from "./components/navigation/navigation"

ReactDOM.render(
  <React.StrictMode>
    <Navbar/>
    <Page1/>
    <WhyUs/>
    <CreativeSection/>
    <Teachingareas/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
