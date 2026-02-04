function Button({
  text,
  onClick,
  type = "button",
  disabled = false,
  variant = "primary",
}) {
  const baseStyle = {
    padding: "10px 16px",
    borderRadius: "6px",
    border: "none",
    cursor: disabled ? "not-allowed" : "pointer",
    fontSize: "14px",
    fontWeight: "500",
  };

  const variants = {
    primary: { backgroundColor: "#2563eb", color: "#fff" },
    secondary: { backgroundColor: "#e5e7eb", color: "#111827" },
    danger: { backgroundColor: "#dc2626", color: "#fff" },
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={{
        ...baseStyle,
        ...variants[variant],
        opacity: disabled ? 0.6 : 1,
      }}
    >
      {text}
    </button>
  );
}

export default Button;
