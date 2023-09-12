// serachbox
/* eslint-disable */
import React, { useState } from "react";
import Input from "src/components/input/TextInput";
import SelectBoxChk from "src/components/select/SelectBoxChk";
import SelectBoxBasic from "src/components/select/SelectBoxBasic";
import Button from "src/components/button/Button";

const SearchBox: React.FC = () => {
  // 첫 번째 SelectBoxChk 컴포넌트에 대한 상태와 콜백 함수
  const [isDropdownOpen1, setIsDropdownOpen1] = useState(false);
  const [selectedItems1, setSelectedItems1] = useState<string[]>([]);

  // 두 번째 SelectBoxChk 컴포넌트에 대한 상태와 콜백 함수
  const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);
  const [selectedItems2, setSelectedItems2] = useState<string[]>([]);

  return (
    <>
      <div className="search-box-inner">
        <div className="top flex">
          <div className="col-xs-12 col-sm-6 col-md-6">
            <Input placeholder="Job Title, Company Name, Keyword" />
          </div>
          <div className="col-xs-12 col-sm-6 col-md-2">
            <SelectBoxChk
              isOpen={isDropdownOpen1}
              toggleDropdown={() => setIsDropdownOpen1(!isDropdownOpen1)}
              selectedItems={selectedItems1}
              items={["All", "Option1", "Option2"]} // 적절한 아이템 배열 전달
              defaultLabel="Category"
            />
          </div>
          <div className="col-xs-12 col-sm-6 col-md-2">
            <SelectBoxChk
              isOpen={isDropdownOpen2}
              toggleDropdown={() => setIsDropdownOpen2(!isDropdownOpen2)}
              selectedItems={selectedItems2}
              items={["All", "Option1", "Option2"]} // 적절한 아이템 배열 전달
              defaultLabel="Emplyment Type"
            />
          </div>
          <div className="col-xs-12 col-sm-6 col-md-2">
            <SelectBoxBasic />
          </div>
        </div>
        <Button
          color="primary"
          size="full"
          label="&nbsp;&nbsp;Search Job"
          icon="fa-solid fa-magnifying-glass"
        />
      </div>
    </>
  );
};

export default SearchBox;
