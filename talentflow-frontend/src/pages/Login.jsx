import { useNavigate } from "react-router-dom";
import Button from "../components/common/Button";
import Input from "../components/common/Input";
import Form from "../components/common/Form";

function Login() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // TEMP: frontend-only navigation
    // Later this will be replaced with API + JWT logic
    console.log("Login submitted");
    navigate("/dashboard");
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2>Login</h2>

        <Form onSubmit={handleSubmit}>
          <Input label="Email" type="email" required />
          <Input label="Password" type="password" required />
          <Button text="Login" type="submit" />
        </Form>
      </div>
    </div>
  );
}

const styles = {
  page: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#f9fafb",
  },
  card: {
    width: "360px",
    padding: "24px",
    borderRadius: "8px",
    background: "#ffffff",
    boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
  },
};

export default Login;
