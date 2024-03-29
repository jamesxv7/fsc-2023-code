import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Switch from "@mui/material/Switch";
import { Typography } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });
const label = { inputProps: { "aria-label": "Switch demo" } };

export default function Home() {
  return (
    <>
      <Head>
        <title>Web App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <Switch {...label} defaultChecked />
          <Switch {...label} />
          <Switch {...label} disabled defaultChecked />
        </div>
      </main>
    </>
  );
}
