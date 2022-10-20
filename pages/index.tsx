import Link from "next/link";
import { DarkLayout } from "../layouts/DarkLayout";
import { MainLayout } from "../layouts/MainLayout";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      
        <h1 className={styles.title}>
          Ir a <Link href="/about">About</Link>
        </h1>
      
    </>
  );
}


Home.getLayout = function getLayout(page: JSX.Element) {

  return (
    <MainLayout>
    <DarkLayout>
      {page}
      </DarkLayout>
    </MainLayout>
  );
}
