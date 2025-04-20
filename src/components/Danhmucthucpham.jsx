import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/components/Danhmucthucpham.css";
const thucpham = [
  {
    name: "Gạo",
    children: ["Gạo 4B", "Gạo nếp", "Gạo tẻ", "Gạo Cửu Long", "Gạo Thái Lan"],
  },
  {
    name: "Rau củ quả",
    children: ["Cà chua", "Dưa leo", "Bí đỏ", "Khoai tây", "Cà rốt"],
  },
  { name: "Thịt", children: ["Thịt heo", "Thịt bò", "Thịt gà", "Thịt vịt"] },
  { name: "Bánh", children: ["Bánh mì", "Bánh bao", "Bánh ngọt", "Bánh quy"] },
  {
    name: "Đồ uống",
    children: ["Nước ngọt", "Nước ép trái cây", "Trà sữa", "Cà phê"],
  },
  { name: "Gia vị", children: ["Muối", "Đường", "Tiêu", "Nước mắm"] },
  { name: "Thực phẩm chức năng", children: ["Vitamin C", "Omega 3", "Canxi"] },
];

const Danhmucthucpham = () => {
  //Hàm chuyển tiếng Việt có dấu thành URL không dấudấu
  const toSlug = (str) => str.replace(/ /g, "-");
  const [openIndex, setOpenIndex] = useState(0);
  const Dropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <nav className="thucpham-menu">
      <h4 id="title">Danh mục thực phẩm</h4>
      <ul className="thucpham-list">
        {thucpham.map((item, index) => (
          <li className="thucpham-item" key={index}>
            <div className="thucpham-row">
              <Link
                to={`/thucpham/${toSlug(item.name)}`}
                className="thucpham-link"
              >
                {item.name}
              </Link>
              <span
                className="dropdown-icon"
                onClick={() => Dropdown(index)}
                style={{ cursor: "pointer", marginLeft: "8px" }}
              >
                {openIndex === index ? "⏷" : "⏶"}
              </span>
            </div>
            {openIndex === index && (
              <ul className="thucpham-sublist">
                {item.children.map((child, childIndex) => (
                  <li className="thucpham-subitem" key={childIndex}>
                    <Link
                      to={`/thucpham/${toSlug(child)}`}
                      className="thucpham-sublink"
                    >
                      {child}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Danhmucthucpham;
