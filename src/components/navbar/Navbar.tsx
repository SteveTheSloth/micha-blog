import styles from "@/app/page.module.css";
import BurgerMenu from "@/components/navbar/elements/BurgerMenu";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <BurgerMenu />
    </div>
  );
};
export default Navbar;
