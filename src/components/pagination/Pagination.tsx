/* eslint-disable */
import React from "react";

const Pagination: React.FC = () => {
    return (
        <div className="pagination-container">
            <ul>
                <li className="first disabled">
                    <a href="#none">&lt;&lt;</a>
                </li>
                <li className="prev disabled">
                    <a href="#none">&lt;</a>
                </li>
                <li className="active">
                    <a href="#none">1</a>
                </li>
                <li>
                    <a href="#none">2</a>
                </li>
                <li className="next">
                    <a href="#none">&gt;</a>
                </li>
                <li className="last">
                    <a href="#none">&gt;&gt;</a>
                </li>
            </ul>
        </div>
    );
};
export default Pagination;        