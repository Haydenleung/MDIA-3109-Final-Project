import Image from "next/image";
import logo from "../../../public/images/logo.svg"
import styles from "./header.module.css"

export default function Header() {
  return (
    <main>
      <header className="header">
        {/* "Back" icon  */}
        {/* <Image
          src={}
          width={}
          height={}
          alt={}
        /> */}

        {/* Logo image  */}
        <Image
          src={logo}
          width={200}
          height={200}
          alt={"logo"}
          className={styles.logo}
        />
        {/* <h1 className="logo">VANPLAN</h1> */}
      </header>
    </main>
  );
}
