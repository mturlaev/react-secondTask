import React from "react";
import images from "../../image/Group 6 1.svg";
import css from "../Footer.components/footer.module.css"

export default function Footer () {
    return (
        <div className={css.footer}>
        <div className={css.logo}>
            <img src={images} alt="фотка"></img>
        
        <ul className={css.ul_foot}>
            <li className={css.lishka}>Партнерам</li>
            <li className={css.lishka}>Разработчики</li>
            <li className={css.lishka}>Вакансии</li>
        </ul>
        </div>
        <div className={css.intocode}>ООО “интукод”, 2022г.</div>
        </div>
    )
}