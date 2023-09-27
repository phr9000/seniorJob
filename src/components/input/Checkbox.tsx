/* eslint-disable */
import React, { useState } from "react";

interface CheckboxProps {
    label?: string;
}

const CheckBox: React.FC<CheckboxProps> = ({
    label= ""
}) => {
    return (
        <>
            <input type="checkbox" className="checkbox-area"/>
            <label htmlFor={label}>{label}</label>
        </>
    );
};

export default CheckBox;        