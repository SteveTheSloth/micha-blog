import styles from "@/app/page.module.css";
import BurgerMenu from "@/components/navbar/elements/BurgerMenu";
import Title from "./elements/Title";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <BurgerMenu />
      <Title />
    </div>
  );
};
export default Navbar;
