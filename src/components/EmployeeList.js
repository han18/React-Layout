const styles = {
  list: {
    color: "green",
    padding: 1,
    border: "1px solid blue ",
  },
  //   div: {
  //     border: "1px blue solid",
  //     margin: "200px",
  //   },
};

function EmployeeList() {
  return (
    <div style={styles.div}>
      <h1 style={styles.list}>This is employees list</h1>
    </div>
  );
}

export default EmployeeList;
