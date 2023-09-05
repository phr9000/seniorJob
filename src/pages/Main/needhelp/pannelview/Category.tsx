/* eslint-disable */
import React from "react";

/* Import imgs */
import imgs from 'src/common/ImgDef';

const CateList = [
  {
    imgUrl: imgs.need_help01,
    title: 'Accounting / Finance',
    desc: '1 Jobs Available'
  },
  {
    imgUrl: imgs.need_help02,
    title: 'Administrative / Clerical',
    desc: '2 Jobs Available'
  },
  {
    imgUrl: imgs.need_help03,
    title: 'Cleaning / Housekeeping',
    desc: '1 Jobs Available'
  },
  {
    imgUrl: imgs.need_help04,
    title: 'Customer Service / Receptionists',
    desc: '12 Jobs Available'
  },
  {
    imgUrl: imgs.need_help05,
    title: 'Drivers / Riders / Delivery',
    desc: '1 Jobs Available'
  },
  {
    imgUrl: imgs.need_help06,
    title: 'Hospitality / F&B',
    desc: '6 Jobs Available'
  },
  {
    imgUrl: imgs.need_help07,
    title: 'Nursing / Health Care',
    desc: '2 Jobs Available'
  },
  {
    imgUrl: imgs.need_help08,
    title: 'Warehousing & Logistics',
    desc: '1 Jobs Available'
  },
];

const Category: React.FC = () => {
  return (
    <ul className="grid">
      {CateList.map((cate, index)=>(
        <li>
          <a href="#none">
            <p className="img-area"
              style={{
                backgroundImage: `url(${cate.imgUrl})`, // imgUrl을 background-image로 설정
              }}
            >
            </p>
            <div className="txt-area">
              <p>
                <h3>
                  {cate.title}
                </h3>
                <span>{cate.desc}</span>
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
export default Category;
