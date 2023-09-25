/* eslint-disable */
import React, { useState } from "react";

const SelectBoxBasic: React.FC = () => {
  // Dropdown에 표시될 아이템 배열
  const [items, setItems] = useState([
    "All",
    "Bedok",
    "Bishan",
    "Bukit Batok",
    "Bukit Merah",
    "Bukit Panjang",
    "Bukit Timah",
    "Geylang",
    "Changi",
    "Hougang",
    "Jurong East",
    "Jurong Island",
    "Kallang",
  ]);

  // Dropdown이 현재 열려있는지(false) 아닌지(true)를 나타내는 상태
  const [isOpen, setIsOpen] = useState(false);

  // 재 사용자에게 선택된 아이템을 저장하는 상태
  // 초기 상태는 'Location'으로 설정
  const [selectedItem, setSelectedItem] = useState("Location");

  // Dropdown을 열고 닫는 엑션 함수
  const toggleDropdown = () => {
    setIsOpen(!isOpen); // isOpen 상태 값을 반전
  };

  // Dropdown 메뉴에서 아이템을 선택했을 때 호출되는 함수
  const selectItem = (item: string) => {
    setSelectedItem(item); // 선택된 아이템으로 상태를 업데이트
    setIsOpen(false); // 아이템을 선택하면 드롭다운 닫기
  };

  return (
    <div className="select_chk">
      <div className="dropdown_area select_basic">
        {/* 선택된 아이템 또는 기본 텍스트('Location')을 표시하는 버튼 */}
        <button
          type="button"
          className="dropdown_label"
          onClick={toggleDropdown}
        >
          <span
            className="_label"
            // 'Location'이 선택되지 않았을 때 텍스트의 색상을 변경
            style={selectedItem !== "Location" ? { color: "#3428c9" } : {}}
          >
            {selectedItem}
          </span>
          <span className="_arrow_icon"></span>
        </button>
        {/* isOpen 상태가 true일 때만 드롭다운 메뉴를 표시. */}
        {isOpen && (
          <div className="dropdown_menu">
            <ul>
              {items.map((item) => (
                <li
                  className="_item"
                  key={item}
                  onClick={() => selectItem(item)}
                >
                  <span className="__txt">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
export default SelectBoxBasic;
