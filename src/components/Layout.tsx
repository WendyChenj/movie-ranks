import styles from "../styles/Layout.module.css";

const Layout = (props) => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>Movie Rank</header>
      <main>{props.children}</main>
      <footer className={styles.footer}>
        <p>@ Happy Coding</p>
      </footer>
    </div>
  );
};

export default Layout;
