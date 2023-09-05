/* eslint-disable */
import React from "react";

const typeList = [
  {
    title: 'Queenstown',
    desc: '1 Jobs Available'
  },
  {
    title: 'Queenstown',
    desc: '2 Jobs Available'
  },
  {
    title: 'Queenstown',
    desc: '1 Jobs Available'
  },
];

const Type: React.FC = () => {
  return (
    <ul className="grid type">
      {typeList.map((type, index)=>(
        <li>
          <a href="#none">
            <div className="txt-area">
              <p>
                <h3>
                  {type.title}
                </h3>
                <span>{type.desc}</span>
              </p>
              <p className="arrow-area">
                <i className="fa-solid fa-arrow-right"></i>
              </p>
            </div>
          </a>
        </li>
      ))} 
      
    </ul>
  );
};
export default Type;
