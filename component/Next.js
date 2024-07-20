import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to My Portfolio</h1>
        <p className={styles.description}>Showcasing my skills and projects</p>
        <Image
          src="/images/profile.jpg"
          alt="Profile Picture"
          width={200}
          height={200}
        />
      </main>
    </div>
  );
}
