/* eslint-disable */
import React from "react";

const Category: React.FC = () => {
  return (
    <ul className="grid">
      <li>
        <p className="img-area img-01"></p>
        <div className="txt-area flex items-center justify-between">
          <p>
            <h3>
              Accounting /<br /> Finance
            </h3>
            <span>1 Jobs Available</span>
          </p>
          <p className="arrow-area">
            <i className="fa-solid fa-arrow-right"></i>
          </p>
        </div>
      </li>
    </ul>
  );
};
export default Category;
