import styles from "@/app/page.module.css";
import MenuLink from "./elements/MenuLink";

const Menu = ({ hidden }: { hidden: boolean }) => {
  return (
    <div className={hidden ? `${styles.menu} ${styles.hidden}` : styles.menu}>
      <MenuLink route="/" text="Home" />
      <MenuLink route="/about" text="About Me" />
      <MenuLink route="/posts" text="Posts" />
      <MenuLink route="/contact" text="Contact" />
    </div>
  );
};
export default Menu;
