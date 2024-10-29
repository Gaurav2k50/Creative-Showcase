import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
// import Mainsection from "../../components/MainSection/Mainsection";
import Mainsection from "../../components/MainSection/Mainsection";
// import SkillSection from "../../components/MainSection/SkillSection/SkillSection";

export default function index() {
  return (
    <>
      <Header />
      <Mainsection />
      {/* <SkillSection /> */}
      <Footer />
    </>
  );
}
