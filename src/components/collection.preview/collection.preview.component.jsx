import React from "react";
import "./collection.preview.style.scss";
import Loader from "../loader/loader.component";

const CollectionPreview = WrappedComponent => ({ data, name, itemNumber }) => {
  return (
    <section className="CollectionPreview">
      <div className="CollectionPreviewCategory">
        <span className="Category">{name}</span>
        <span className="Arrival">NEW ARRIVAL</span>
      </div>
      {data ? (
        <div className="CollectionPreviewItems">
          {data
            .filter((items, index) => index < itemNumber)
            .map(item => (
              <WrappedComponent
                key={item._id}
                shop={name.toLowerCase()}
                item={item}
              />
            ))}
        </div>
      ) : (
        <Loader />
      )}
    </section>
  );
};

export default CollectionPreview;
