import Image from "next/image";
import styles from "./page.module.css";
import Menu from "@/components/menu/Menu";
import Navbar from "@/components/navbar/Navbar";
import PostPreview from "@/components/postPreview/PostPreview";
import Layout from "@/components/Layout";

export default function Home() {
  return (
    <Layout>
      <h1 className={styles.heading}>Micha to the Brüggemann</h1>
      <PostPreview
        title="Post One"
        text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur dolorem a odit labore hic cumque est maxime odio autem! Sunt, tenetur aut maxime corrupti repellendus necessitatibus delectus asperiores nam mollitia. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur dolorem a odit labore hic cumque est maxime odio autem! Sunt, tenetur aut maxime corrupti repellendus necessitatibus delectus asperiores nam mollitia."
        link="about"
      />
      <PostPreview
        title="Post Two"
        text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur dolorem a odit labore hic cumque est maxime odio autem! Sunt, tenetur aut maxime corrupti repellendus necessitatibus delectus asperiores nam mollitia. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur dolorem a odit labore hic cumque est maxime odio autem! Sunt, tenetur aut maxime corrupti repellendus necessitatibus delectus asperiores nam mollitia."
        link="about"
      />
      <PostPreview
        title="Post Three"
        text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur dolorem a odit labore hic cumque est maxime odio autem! Sunt, tenetur aut maxime corrupti repellendus necessitatibus delectus asperiores nam mollitia. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur dolorem a odit labore hic cumque est maxime odio autem! Sunt, tenetur aut maxime corrupti repellendus necessitatibus delectus asperiores nam mollitia."
        link="about"
      />
    </Layout>
  );
}
