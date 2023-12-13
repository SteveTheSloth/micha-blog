"use client";
import styles from "@/app/page.module.css";
import Menu from "@/components/menu/Menu";
import { useState } from "react";

const BurgerMenu = () => {
  const [isHidden, setIsHidden] = useState(true);
  return (
    <>
      <div
        className={styles.burgerMenu}
        onClick={() => {
          setIsHidden(!isHidden);
        }}
      >
        <div className={`${styles.burgerLine} ${styles.Line1}`}></div>
        <div className={`${styles.burgerLine} ${styles.Line2}`}></div>
        <div className={`${styles.burgerLine} ${styles.Line3}`}></div>
      </div>
      <Menu hidden={isHidden} />
    </>
  );
};
export default BurgerMenu;
