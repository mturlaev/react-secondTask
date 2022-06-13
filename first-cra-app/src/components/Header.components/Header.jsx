import React from "react";
import img from "../../image/Group 1.svg";
import css from "../Header.components/header.module.css";

export default function Header() {
  return (
    <div className={css.rod_block}>
      <div className={css.IMG}>
        <img src={img} alt="фото" />
      </div>
      <ul className={css.ul}>
        <li className={css.li}>
          <a href="">Главная</a>
        </li>
        <li className={css.li}>
          <a href="">О нас</a>
        </li>
        <li className={css.li}>
          <a href="">Контакты</a>
        </li>
      </ul>
      
    </div>
    
  );
}
