import "./about.style.scss";
import React from "react";

const About = () => {
  return (
    <div className="BettysHubAboutContainer">
      <div className="BettysHubAbout">
        <h1 className="BettysHubAboutHeader">About Us</h1>
        <p className="BettysHubAboutText">
          Betty’s Hub is an online shopping store with offices in Nigeria. We do
          wholesale and retail sales of all kinds of quality African print
          fabrics (Ankara) from top brands like <strong>Vlisco</strong> ,{" "}
          <strong>Hollandais</strong>, <strong>Daviva</strong>. We also deal in{" "}
          <strong>laces</strong>, <strong>Adire</strong>,{" "}
          <strong>Aso-oke</strong> for all occasions and events. We also have
          good selections of classy women’s shoes, bags, purses, top fashion
          accessories as well as quality watches, perfumes and much more.{" "}
        </p>
        <p className="BettysHubAboutText">
          At Betty’s Hub, we believe in high quality and exceptional customer
          service. Most importantly, we believe shopping is a right not just a
          luxury, so we strive to deliver the best products at the most
          affordable prices and ship them to you regardless of your location.
        </p>
      </div>
    </div>
  );
};

export default About;
