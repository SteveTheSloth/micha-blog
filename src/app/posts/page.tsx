import Navbar from "@/components/navbar/Navbar";
import styles from "@/app/page.module.css";
import Link from "next/link";
import postData from "@/app/(data)/postData.json";
import Layout from "@/components/Layout";

const Posts = () => {
  return (
    <Layout>
      <h1 className={styles.heading}>Posts</h1>
      <div className={styles.linkContainer}>
        {postData.posts.map((post) => {
          return (
            <Link key={post.id} href={post.title} className={styles.postLink}>
              {post.title}
            </Link>
          );
        })}
      </div>
    </Layout>
  );
};
export default Posts;
