import "./longrich.about.style.scss";
import image from "../../assets/img/headoffice.jpg";
import React from "react";

const LongrichAbout = () => {
  return (
    <div className="LongrichAbout">
      <header className="LongrichAboutHeader">About Longrich</header>
      <div className="LongrichAboutContent">
        <div className="LongrichAboutContentText">
          <div>
            <img
              className="LongrichAboutContentImage"
              src={image}
              alt="longrich head office building"
            />
          </div>
          <p>
            Longrich Bio-Science Co. Ltd, (Longrich), which is located in the
            Longrich Bio-Industrial Park, is one of the leading companies that
            dominates in the production of Health Care, Cosmetic/Skin Care,
            Household Cleaning, Furniture, Real Estate business and many more
            products.
          </p>
          <p>
            Jiangsu Longliqi Bio-Science Co. Ltd (Longrich) has one of the
            largest and most advanced centres for research and development of
            cosmetic and healthcare products in Asia (Southern China). The
            company has more than 12 000 employees, more than 35% of which are
            Doctorate students, field experts, and highly trained professionals.
            For the past 31 years the company has seen steady growth in both
            expansion and market share.
          </p>
          <p>
            Jiangsu LONGLIQI Bio-Science Co., Ltd (Longrich) is located in the
            LONGLIQI Bio-Industrial Park, which covers an area of more than 133
            hectares (about 500 acres). It produces more than 1000 products in
            eight categories, including household, cosmetics, health care
            products, furniture, real estate and logistics. It is one of the
            largest and most advanced center for research, development,
            manufacture and sale of cosmetics and health care products in China.
            it has a total of 10,000 employees. In the past 26 years, the
            company has developed a healthy and steady manner and has become a
            leader of the national cosmetic industry.
          </p>
          <p>
            <strong>
              <em>Longrich Company which came to Nigeria in 2012,</em>
            </strong>{" "}
            has potential direct sales of 70 million population around the world
            and Longrich is set to become a leading brand name both locally and
            internationally. From the president’s desk: Longrich has an
            ambitious goal of giving every member not only the chance to live in
            a harmonious and healthy environment but also build a successful
            business in every environment she finds herself.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LongrichAbout;
