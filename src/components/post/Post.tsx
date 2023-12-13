import styles from "../app/page.module.css";

const Post = ({ title, text }: { title: string; text: string }) => {
  return <div className={styles.post}>Post</div>;
};
export default Post;
