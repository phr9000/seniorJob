/* eslint-disable */
import React from "react";

/* Import imgs */
import imgs from 'src/common/ImgDef';

const helpList = [
  {
    imgUrl: imgs.need_help01,
    title: 'Accounting / Finance',
    desc: '1 Jobs Available'
  },
  {
    imgUrl: imgs.need_help02,
    title: 'Administrative / Clerical',
    desc: '1 Jobs Available'
  },
  {
    imgUrl: imgs.need_help03,
    title: 'Accounting / Finance',
    desc: '1 Jobs Available'
  },
  {
    imgUrl: imgs.need_help04,
    title: 'Accounting / Finance',
    desc: '1 Jobs Available'
  },
  {
    imgUrl: imgs.need_help05,
    title: 'Accounting / Finance',
    desc: '1 Jobs Available'
  },
  {
    imgUrl: imgs.need_help06,
    title: 'Accounting / Finance',
    desc: '1 Jobs Available'
  },
  {
    imgUrl: imgs.need_help07,
    title: 'Accounting / Finance',
    desc: '1 Jobs Available'
  },
  {
    imgUrl: imgs.need_help08,
    title: 'Accounting / Finance',
    desc: '1 Jobs Available'
  },
];

const Category: React.FC = () => {
  return (
    <ul className="grid">
      {helpList.map((help, index)=>(
        <li>
        <p className="img-area"
          style={{
            backgroundImage: `url(${help.imgUrl})`, // imgUrl을 background-image로 설정
          }}
        >

        </p>
        <div className="txt-area">
          <p>
            <h3>
              {help.title}
            </h3>
            <span>{help.desc}</span>
          </p>
          <p className="arrow-area">
            <i className="fa-solid fa-arrow-right"></i>
          </p>
        </div>
      </li>
      ))} 
      
    </ul>
  );
};
export default Category;
