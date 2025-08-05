// src/App.jsx
import React from "react";
import PremiumLanding from "./components/PremiumLanding";
import WhyUsCreative from "./components/WhyUsCreative";
import ClientWorkSimple from "./components/ClientWorkSimple";
import BookTrailersPremium from "./components/BookTrailersPremium";
import BookCoversSection from "./components/BookCoversSection";
import TestimonialsPremiumBlue from "./components/TestimonialsPremiumBlue";
import AuthorsPremiumBlue from "./components/AuthorsPremiumBlue";
import OurVerticalsSection from "./components/OurVerticalsSection";
import ContactUsPremium from "./components/ContactUsPremium";
function App() {
  return (
    <div>
      <PremiumLanding />
      <WhyUsCreative/>
      <ClientWorkSimple/>
      <BookTrailersPremium/>
      <BookCoversSection/>
      <TestimonialsPremiumBlue />
      <AuthorsPremiumBlue/>
      <ContactUsPremium/>
      <OurVerticalsSection/>
    </div>
  );
}

export default App;
