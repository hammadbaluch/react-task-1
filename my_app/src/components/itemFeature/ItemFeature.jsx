import React from "react";
import "./itemFeature.css";

export default function ItemFeature({icon, title, para}) {
  return (
    <div className="item-feature">
      <div className="icon">
        {icon}
      </div>
      <div className="item-text">
        <h className="title">{title}</h>
        <p className="para">
          {para}
        </p>
      </div>
    </div>
  );
}
