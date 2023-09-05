/* eslint-disable */
import React from "react";

const locationList = [
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
  {
    title: 'Queenstown',
    desc: '12 Jobs Available'
  },
  {
   
    title: 'Queenstown',
    desc: '1 Jobs Available'
  },
  {
    title: 'Queenstown',
    desc: '6 Jobs Available'
  },
  {
    title: 'Queenstown',
    desc: '2 Jobs Available'
  },
  {
    title: 'Queenstown',
    desc: '1 Jobs Available'
  },
  {
    title: 'Queenstown',
    desc: '1 Jobs Available'
  },
  {
    title: 'Queenstown',
    desc: '1 Jobs Available'
  },
  {
    title: 'Queenstown',
    desc: '1 Jobs Available'
  },
  {
    title: 'Queenstown',
    desc: '1 Jobs Available'
  },
  {
    title: 'Queenstown',
    desc: '1 Jobs Available'
  },
  {
    title: 'Queenstown',
    desc: '1 Jobs Available'
  },
  {
    title: 'Queenstown',
    desc: '1 Jobs Available'
  },
  {
    title: 'Queenstown',
    desc: '1 Jobs Available'
  },
  {
    title: 'Queenstown',
    desc: '1 Jobs Available'
  },
];

const Location: React.FC = () => {
  return (
    <ul className="grid">
      {locationList.map((location, index)=>(
        <li>
          <a href="#none">
            <div className="txt-area">
              <p>
                <h3>
                  {location.title}
                </h3>
                <span>{location.desc}</span>
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
export default Location;
