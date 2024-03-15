import Image from "next/image";
import styles from "./header.module.css"

export default function Header() {
  return (
    <main>
      <header className="header">
        <Image
          src={'/images/vanplan-logo.svg'}
          width={200}
          height={200}
          alt={"logo"}
          className={styles.logo}
        />
      </header>
    </main>
  );
}
