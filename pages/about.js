// pages/about.js
import { isFunctionTypeNode } from "typescript";
import styles from "../styles/About.module.css";

export default function About() {
  return (
    <div className={styles.container}>
      <h1>About Me</h1>
      <p>Information about me.</p>
    </div>
  );
}
