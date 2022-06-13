import React from "react";
import foto from "../../image/0.svg";
import css from "../Container.components/container.module.css";

export default function Container() {
  return (
      <div className={css.rod_block2}>
      <div className={css.foto}>
        <img src={foto} alt="фото"></img>
      </div>
      <div className={css.btn}>
        <button className={css.btn_item1}>Увеличить</button>
        <button className={css.btn_item2}>Уменьшить</button>
        <button className={css.btn_item3}>Сбросить</button>
      </div>
    </div>
  );
}
