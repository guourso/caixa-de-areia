import { Inter } from "next/font/google";

import Header from "./Header";
import Footer from "./Footer";

import "./global.css";
import styles from "./styles.module.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Onde Uai",
  description: "Onde Uai - Home",
};

export default function ThemeDefault({ children }) {
  return (
    <html lang="pt-br">
      <head />
      <body className={inter.className}>
        <div className={styles.main}>
          <Header />
          <section>{children}</section>
          <Footer />
        </div>
      </body>
    </html>
  );
}