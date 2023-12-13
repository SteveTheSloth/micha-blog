import Link from "next/link";
import styles from "@/app/page.module.css";

const MenuLink = ({ route, text }: { route: string; text: string }) => {
  return (
    <Link className={styles.link} href={route}>
      {text}
    </Link>
  );
};
export default MenuLink;
