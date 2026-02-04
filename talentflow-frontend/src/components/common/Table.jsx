function Table({ columns = [], data = [] }) {
  return (
    <div style={styles.wrapper}>
      <table style={styles.table}>
        <thead>
          <tr>
            {columns.map((col, index) => (
              <th key={index} style={styles.th}>
                {col}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan={columns.length} style={styles.empty}>
                No records found
              </td>
            </tr>
          ) : (
            data.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {Object.values(row).map((cell, cellIndex) => (
                  <td key={cellIndex} style={styles.td}>
                    {cell}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

const styles = {
  wrapper: {
    overflowX: "auto",
    marginTop: "16px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    background: "#ffffff",
  },
  th: {
    border: "1px solid #e5e7eb",
    padding: "10px",
    background: "#f3f4f6",
    textAlign: "left",
    fontWeight: "600",
  },
  td: {
    border: "1px solid #e5e7eb",
    padding: "10px",
  },
  empty: {
    textAlign: "center",
    padding: "16px",
    color: "#6b7280",
  },
};

export default Table;
