import React, { useState, useEffect } from "react";
import "./index.css";

export default function Dropdown({ data, styles, title, onChange, selected }) {
  const [isOpen, setOpen] = useState(false);
  const [items, setItem] = useState(data);
  const [selectedItem, setSelectedItem] = useState(selected);

  const toggleDropdown = () => setOpen(!isOpen);

  const handleItemClick = (id) => {
    selectedItem == id ? setSelectedItem(null) : setSelectedItem(id);
    onChange(id);
    toggleDropdown();
  };

  return (
    <div className={`dropdown ${styles}`}>
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
              item.id == selectedItem && "selected"
            }`}
            id={item.id}
            onClick={(e) => handleItemClick(e.target.id)}
          >
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
}
