/* eslint-disable */
import React from "react";
import { Link, useLocation } from "react-router-dom";

const BreadCrumb: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <div className="breadcrumb-container">
      <div className="breadcrumb-inner">
        <Link to="/">Home<span className="split">/</span></Link>
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;
          return isLast ? (
            <div key={name} className="current-route" aria-current="page">
              {name}
            </div>
          ) : (
            <Link key={name} to={routeTo}>
              {name}<span className="split">/</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default BreadCrumb;