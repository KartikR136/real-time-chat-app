import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const submit = async (e) => {
    e.preventDefault();

    await login(form);

    navigate("/dashboard");
  };

  return (
    <div style={{ padding: "80px", maxWidth: "400px" }}>
      <h1>Login</h1>

      <form onSubmit={submit}>
        <input
          placeholder="Email"
          onChange={(e) =>
            setForm({
              ...form,
              email: e.target.value
            })
          }
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) =>
            setForm({
              ...form,
              password: e.target.value
            })
          }
        />

        <button type="submit">Login</button>
      </form>

      <Link to="/register">Create account</Link>
    </div>
  );
};

export default Login;