import React, { useState } from "react";
import "./index.css";

export default function Dropdown({
  data,
  styles,
  title,
  onChange,
  selected,
  dirty,
}) {
  const [isOpen, setOpen] = useState(false);
  const [items, setItem] = useState(data);
  const [selectedItem, setSelectedItem] = useState(
    selected !== "" ? data.find((x) => x.name === selected).id : 0
  );

  const toggleDropdown = () => setOpen(!isOpen);

  const handleItemClick = (e) => {
    selectedItem === e.id ? setSelectedItem(null) : setSelectedItem(e.id);
    onChange(e);
    setOpen(false);
  };

  return (
    <div
      className={`dropdown ${styles} ${
        dirty ? "border border-solid border-[#E52F2F]" : ""
      }`}
    >
      <div className="dropdown-header" onClick={toggleDropdown}>
        {selectedItem
          ? items.find((item) => item.id == selectedItem).name
          : title}
        <i className={`fa fa-chevron-right icon ${isOpen && "open"}`}></i>
      </div>
      <div className={`dropdown-body ${isOpen && "open"}`}>
        {items.map((item) => (
          <div
            key={item.id}
            className={`dropdown-item hover:bg-[#E7F0F8] ${
              item.id === selectedItem && "selected"
            }`}
            id={item.id}
            onClick={(e) => handleItemClick(e.target)}
          >
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
}
