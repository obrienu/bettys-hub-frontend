import React from "react";
import "./ad.bar.style.scss";
import ad1 from "../../assets/img/add1.jpg";
import ad2 from "../../assets/img/add2.jpg";
import AdItem from "../ad.item/ad.item.component";

const adImage = [
  { image: ad1, id: 1 },
  { image: ad2, id: 2 }
];

const AddBar = ({ index }) => {
  return (
    <aside className="AddBar">
      <header className="AddBarHeader">Compensation Plan</header>
      <div className="AddBarBody">
        {index ? (
          <AdItem
            key={adImage[index - 1].id}
            image={adImage[index - 1].image}
          />
        ) : (
          adImage.map(item => <AdItem key={item.id} image={item.image} />)
        )}
      </div>
    </aside>
  );
};

export default AddBar;
