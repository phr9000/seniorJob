/* eslint-disable */
import React, {useState} from "react";

/* Import SCSS */
import "src/assets/styles/layout/selectBoxBasic.scss";


// Dropdown에 표시될 항목들
const ITEMS = [ "All", "Part Time", "Full Time", "Contract" ];

const SelectBoxChk: React.FC = () => {
  
  // Dropdown이 열려있는지 여부를 저장하는 상태
  const [ isOpen, setIsOpen ] = useState(false);
  // 선택된 항목들을 저장하는 상태
  const [ selectedItems, setSelectedItems ] = useState<string[]>([]);
  
  // label의 스타일을 관리하는 상태 (색상 변경을 위함)
  const [ labelStyle, setLabelStyle ] = useState<React.CSSProperties>({});
  // 각 항목의 스타일을 저장하는 상태 (색상 변경을 위함)
  const [ itemColors, setItemColors ] = useState<Record<string, React.CSSProperties>>({});
  
  
  // Dropdown을 열고 닫는 함수
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  
  
  // 체크박스 항목을 클릭할 때의 처리 함수
  const handleItemClick = (item: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSelectedItems: string[] = [ ...selectedItems ];
    
    // "All" 항목을 클릭한 경우의 처리
    if (item === "All") {
      setSelectedItems(e.target.checked ? [ "All" ] : []);
    } else {
      const isAlreadySelected = newSelectedItems.includes(item);
      if (isAlreadySelected) {
        newSelectedItems.splice(newSelectedItems.indexOf(item), 1);
      } else {
        newSelectedItems.push(item);
      }
      
      // "All"이 이미 선택되어 있는 경우 삭제
      if (newSelectedItems.includes("All")) {
        newSelectedItems.splice(newSelectedItems.indexOf("All"), 1);
      }
      
      setSelectedItems(newSelectedItems);
    }
    
    // 항목의 색상 변경
    if (e.target.checked) {
      handleItemColorChange(item);
    } else {
      handleItemColorRevert(item);
    }
  };
  
  
  // label 클릭 시 색상을 변경하는 핸들러
  const handleLabelColorChange = () => {
    setLabelStyle({
      color: '#3428c9'
    });
  };
  
  // 항목을 클릭했을 때 색상만 변경하는 함수
  const handleItemColorChange = (item: string) => {
    setItemColors(prev => ( {
      ...prev,
      [item]: {
        color: '#3428c9'
      }
    } ));
  };
  
  // 항목의 색상을 원래대로 돌리는 핸들러
  const handleItemColorRevert = (item: string) => {
    setItemColors(prev => {
      const newState = {...prev};
      delete newState[item];
      return newState;
    });
  };
  
  
  // Dropdown의 상단 여백 설정
  const margin = {
    marginTop: '10rem',
  };
  
  return (
    <div className="dropdown_area select_basic" style={margin}>
      <button type="button" className="dropdown_label" onClick={toggleDropdown}>
        <span className="_label" style={labelStyle}>
          {selectedItems.includes("All")
            ? "All"
            : ( selectedItems.length ? selectedItems.join(", ") : "Select Employment Type" )}
        </span>
        <span className="_arrow_icon"></span>
      </button>
      {isOpen && (
        <div className="dropdown_menu">
          <ul>
            {ITEMS.map((item, index) => (
              <li
                className="_item"
                key={index}
              >
                <label onClick={handleLabelColorChange}>
                  <input
                    type="checkbox"
                    className="hiddenCheckbox"
                    checked={selectedItems.includes(item)}
                    onChange={handleItemClick(item)}
                  />
                  <div className="__custom_chk"></div>
                  <span className="__txt" style={itemColors[item]}>{item}</span>
                </label>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
export default SelectBoxChk;