import Image from "next/image";
import styles from "./button.module.css"

export default function PrimaryButton({ title }: { title: string }) {
  return (
    <>
      <div className={styles.primary_button}>
        {title}
      </div>
    </>
  );
}