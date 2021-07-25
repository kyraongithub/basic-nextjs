import Image from "next/image";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";
export default function Home() {
  return (
    <Layout pageTitle="Homepage">
      <Image src="/profile.jpg" width={200} height={200} alt="profile" />
      <h1 className={styles.title}>welcome, kyra!</h1>
    </Layout>
  );
}
