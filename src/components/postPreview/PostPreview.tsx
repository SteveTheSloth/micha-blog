import styles from "@/app/page.module.css";
import Link from "next/link";
const PostPreview = ({
  title,
  text,
  link,
}: {
  title: string;
  text: string;
  link: string;
}) => {
  return (
    <div className={styles.postPreview}>
      <h3 className={styles.postTitle}>{title}</h3>
      <p className={styles.postParagraph}>{text}</p>
      <Link className={styles.postLink} href={link}>
        Show Full Post
      </Link>
    </div>
  );
};
export default PostPreview;
