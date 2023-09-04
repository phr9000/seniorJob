/* eslint-disable */
import React, { useState } from "react";
import Input from "src/components/input/TextInput";
import SelectBoxChk from "src/components/select/SelectBoxChk";
import SelectBoxBasic from "src/components/select/SelectBoxBasic";
import Button from "src/components/button/Button";
const SearchBox: React.FC = () => {
  return (
    <>
      <div className="top flex">
        <div className="col-xs-12 col-sm-6 col-md-6">
          <Input placeholder="Job Title, Company Name, Keyword" />
        </div>
        <div className="col-xs-12 col-sm-6 col-md-2">
          <SelectBoxChk />
        </div>
        <div className="col-xs-12 col-sm-6 col-md-2">
          <SelectBoxChk />
        </div>
        <div className="col-xs-12 col-sm-6 col-md-2">
          <SelectBoxBasic />
        </div>
      </div>
      <Button color="primary" size="full" label="search" />
    </>
  );
};
export default SearchBox;
