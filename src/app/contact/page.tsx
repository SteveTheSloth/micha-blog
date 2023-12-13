import Navbar from "@/components/navbar/Navbar";
import styles from "@/app/page.module.css";
import Layout from "@/components/Layout";

const Contact = () => {
  return (
    <Layout>
      <h1 className={styles.heading}>Contact</h1>
      <h4>email@email.com</h4>
      <h4>+49123456789</h4>
    </Layout>
  );
};
export default Contact;
