import styles from "@/app/page.module.css";
import Navbar from "./navbar/Navbar";
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className={styles.main}>
      <Navbar />
      {children}
    </main>
  );
};
export default Layout;
