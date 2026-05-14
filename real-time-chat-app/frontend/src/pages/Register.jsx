import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const Register = () => {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: ""
  });

  const submit = async (e) => {
    e.preventDefault();

    await register(form);

    navigate("/dashboard");
  };

  return (
    <div style={{ padding: "80px", maxWidth: "400px" }}>
      <h1>Register</h1>

      <form onSubmit={submit}>
        <input
          placeholder="Username"
          onChange={(e) =>
            setForm({
              ...form,
              username: e.target.value
            })
          }
        />

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

        <button type="submit">Create Account</button>
      </form>

      <Link to="/">Already have account?</Link>
    </div>
  );
};

export default Register;