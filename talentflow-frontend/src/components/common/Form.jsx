function Form({ onSubmit, children }) {
  return (
    <form onSubmit={onSubmit} style={styles.form}>
      {children}
    </form>
  );
}

const styles = {
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
};

export default Form;
