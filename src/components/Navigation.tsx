function Navigation() {
  return (
    <>
      <h1 style={{ margin: 0 }}>Brandon Pessman</h1>
      <div>
        <a href="/">blog</a> | <a href="/">projects</a> |{" "}
        <a href="/">toolbox</a> | <a href="/">reading list</a>
        <div></div>
        <a className="a-secondary" href="https://github.com/Braymen">
          github
        </a>{" "}
        |{" "}
        <a
          className="a-secondary"
          href="https://www.linkedin.com/in/brandonpessman/"
        >
          linkedin
        </a>
      </div>
    </>
  );
}

export default Navigation;
