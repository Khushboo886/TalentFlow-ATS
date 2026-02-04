function Input({ label, type = "text", ...props }) {
  return (
    <div style={styles.wrapper}>
      {label && <label style={styles.label}>{label}</label>}
      <input type={type} {...props} style={styles.input} />
    </div>
  );
}

const styles = {
  wrapper: {
    display: "flex",
    flexDirection: "column",
    gap: "4px",
  },
  label: {
    fontSize: "14px",
    fontWeight: "500",
    color: "#374151",
  },
  input: {
    padding: "8px",
    borderRadius: "4px",
    border: "1px solid #d1d5db",
    fontSize: "14px",
  },
};

export default Input;
