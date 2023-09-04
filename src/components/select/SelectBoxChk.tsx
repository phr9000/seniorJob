/* eslint-disable */
import React, { useState } from "react";

/* Import SCSS */
import "src/assets/styles/layout/selectBoxChk.scss";

// SelectBoxChkProps 인터페이스 정의
interface SelectBoxChkProps {
  isOpen: boolean;
  toggleDropdown: () => void;
  selectedItems: string[];
  items: string[];
  defaultLabel: string;
}

// SelectBoxChk 컴포넌트 정의
const SelectBoxChk: React.FC<SelectBoxChkProps> = ({
  toggleDropdown,
  items,
  defaultLabel,
}) => {
  // Dropdown이 열려있는지 여부를 저장하는 상태
  const [isOpen, setIsOpen] = useState(false);
  // 선택된 아이템들을 저장하는 상태
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  // label의 스타일을 관리하는 상태 (색상 변경을 위함)
  const [labelStyle, setLabelStyle] = useState<React.CSSProperties>({});
  // 각 항목의 스타일을 저장하는 상태 (색상 변경을 위함)
  const [itemColors, setItemColors] = useState<
    Record<string, React.CSSProperties>
  >({});

  // Dropdown을 열고 닫는 엑션 함수
  const toggleDropdownHandler = () => {
    setIsOpen(!isOpen); // Dropdown 열림/닫힘 상태를 토글
    if (toggleDropdown) {
      toggleDropdown(); // 외부에서 제공된 toggleDropdown 콜백 함수 호출 (선택 사항)
    }
  };

  // 체크박스 항목을 클릭할 때의 처리 함수
  const handleItemClick =
    (item: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      let newSelectedItems: string[] = [...selectedItems];

      if (item === "All") {
        if (e.target.checked) {
          newSelectedItems = ["All"]; // 'All'을 선택하면 모든 항목 선택
        } else {
          newSelectedItems = newSelectedItems.filter((i) => i !== "All"); // 'All' 선택 해제
        }
      } else {
        const isAlreadySelected = newSelectedItems.includes(item);
        if (isAlreadySelected) {
          newSelectedItems = newSelectedItems.filter((i) => i !== item); // 이미 선택된 항목 선택 해제
        } else {
          newSelectedItems.push(item); // 새로운 항목 선택
        }
        // 'All'과 다른 항목을 동시에 선택할 수 없으므로, 다른 항목을 선택했을 때 'All'을 선택 항목에서 제거
        newSelectedItems = newSelectedItems.filter((i) => i !== "All");
      }

      // 색상 설정
      const newColors: Record<string, React.CSSProperties> = {};
      newSelectedItems.forEach((i) => {
        newColors[i] = {
          color: "#3428c9",
        };
      });
      setItemColors(newColors);

      setSelectedItems(newSelectedItems);
    };

  // label 클릭 시 색상을 변경하는 핸들러
  const handleLabelColorChange = () => {
    setLabelStyle({
      color: "#3428c9",
    });
  };

  // 컴포넌트 렌더링
  return (
    <div className="dropdown_area select_chk">
      <button
        type="button"
        className="dropdown_label"
        onClick={toggleDropdownHandler}
      >
        <span className="_label" style={labelStyle}>
          {selectedItems.includes("All")
            ? "All"
            : selectedItems.length
            ? selectedItems.join(", ")
            : defaultLabel}
        </span>
        <span className="_arrow_icon"></span>
      </button>
      {isOpen && (
        <div className="dropdown_menu">
          <ul>
            {items.map((item, index) => (
              <li className="_item" key={index}>
                <label onClick={handleLabelColorChange}>
                  <input
                    type="checkbox"
                    className="hiddenCheckbox"
                    checked={selectedItems.includes(item)}
                    onChange={handleItemClick(item)}
                  />
                  <div className="__custom_chk"></div>
                  <span className="__txt" style={itemColors[item]}>
                    {item}
                  </span>
                </label>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SelectBoxChk;
