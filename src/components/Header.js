const styles = {
  header: {
    //     backgroundColor: "black",
    color: "red",
    padding: 1,
    border: "1px solid blue ",
  },
  //   div: {
  //     border: "2px blue solid",
  //     margin: "100px",
  //   },
};

function Header() {
  return (
    <div style={styles.div}>
      <h1 style={styles.header}>Employee Directory</h1>
    </div>
  );
}

export default Header;
