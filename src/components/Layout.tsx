const Layout = (props) => {
  return (
    <div>
      <header>Movie Rank</header>
      <main>{props.children}</main>
      <footer>@ Happy Coding</footer>
    </div>
  );
};

export default Layout;
